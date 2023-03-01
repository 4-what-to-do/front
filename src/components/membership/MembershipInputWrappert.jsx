import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-query';
import { postSignup, getCheckId } from '../../api/todos';
import { useNavigate } from 'react-router-dom';


function MembershipInputWrappert() {
  const [email, setEmail] = useState("")
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [ischeck, setIscheck] = useState(false);
  const [isemail, setIsemail] = useState(false);
  const navigate = useNavigate();

//회원가입
  const signUpMutation = useMutation(postSignup, {
    onSuccess: (response) => {
      console.log(response)
      alert("회원가입 성공");
      navigate("/");
    },
    onError: (response) => {
      console.log(response);
      alert("회원가입 뭔가 에러");
    },
  });

  //중복확인
  const checkIdMutation = useMutation(getCheckId, {
    onSuccess: (response) => {
      setIsemail(response);
    },
  });

  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    const checkID = (e) => {
      e.preventDefault();
      setIscheck(true);
      checkIdMutation.mutate(e.target.value);
      {ischeck && isemail !== undefined && (
        isemail ? alert("이미 사용중 입니다") : alert("사용 가능합니다")
      )}
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !nickname || !password || !passwordCheck) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    if (password !== passwordCheck) {
      alert('비밀번호가 일치 하지 않습니다');
      return;
    }
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
      return;
    }
    
    const userData = {
      email,
      nickname,
      password,
      passwordCheck,
    };
    signUpMutation.mutate(userData);
  };

  const handleFocus = () => {
      setShowErrorMessage(true);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setShowErrorMessage(true);
  };

  
  return (
    <>
    <StInputWrapper>
      <StInputContainer>
        <StInput
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <StDuplicateCheckButton value={email}  onClick={checkID}>중복확인</StDuplicateCheckButton>
      </StInputContainer>
      {showErrorMessage && !email.includes("@") ? <Stwarning>@를 입력해주세요</Stwarning> : null}
      <StInputContainer>
        <StInput
          type="text"
          placeholder="닉네임을 입력 해주세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value) && setShowErrorMessage(true)}
          onFocus={handleFocus}
        />
        <StDuplicateCheckButton>중복확인</StDuplicateCheckButton>
      </StInputContainer>
      {showErrorMessage && nickname.length < 2 ? <Stwarning>닉네임은 영문 대,소문자와 숫자로 구성된 2자 ~ 10자리여야 합니다.</Stwarning> : null}
      <StInput
        type="password"
        placeholder="비밀번호를 입력 해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)  && setShowErrorMessage(true)}
        onFocus={handleFocus}
      />
      {showErrorMessage && password.length < 4 || password.length > 12 ? <Stwarning>알파벳 대, 소문자, 숫자로 구성된 4~12자리여야 합니다.</Stwarning> : null}
      <StInput
        type="password"
        placeholder="비밀번호를 다시 입력 해주세요"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)  && setShowErrorMessage(true)}
        onFocus={handleFocus}
      />
      {showErrorMessage && password != passwordCheck ? <Stwarning>비밀번호가 같지 않습니다</Stwarning> : null}
    </StInputWrapper>
    <StButtonWrapper>
      <StButton onClick={handleSubmit}>회원가입</StButton>
    </StButtonWrapper>
  </>
);
}

export default MembershipInputWrappert

const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 82%;
`
const StInputContainer = styled.div`
  position: relative;
  width: 85%;
`
const Stwarning = styled.span`
  color: red;
  right: 0px;
`

const StInput = styled.input`
  width: 80%;
  height: 70px;
  margin: 10px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #807b7b;
  background-color: #F2F2F2;
`

const StDuplicateCheckButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  height: 40px;
  padding: 0 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #99CCFF;
  cursor: pointer;

  &:hover {
    background-color: #ececb6;
    color: #a3a39d;
  }
`
const StButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const StButton = styled.button`
  width: 30%;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: #99CCFF;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #ececb6;
    color: #a3a39d;
  }
`;