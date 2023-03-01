import React, { useState } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { requestLogin } from '../../api/todos';
import { useMutation } from 'react-query';

function InputWrapper() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // 추가한거
  const loginMutation = useMutation(requestLogin, { 
    onSuccess: (response) => {
      console.log(response)
      alert("로그인 성공");
    },
    onError: (response) => {
      console.log(response);
      alert("로그인 뭔가 에러");
    },
  });

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      try {
        loginMutation.mutate({password, email})
        navigate('/mytodo'); // 로그인 성공 후 메인 페이지로 이동
      } catch (error) {
        console.log(error);
        alert('로그인 실패');
      }
    }
  }
  
  return(
    <>
    <StInputWrapper>
      <StInput type="email" placeholder="아이디" value={email} onChange={handleUsernameChange}/>
      <StInput type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange}/>
    </StInputWrapper>
    <StButtonWrapper>
    <StLink onClick={onSubmit}>로그인</StLink>
    <StLink>카카오</StLink>
    <StLink to ={"/membership"}>회원가입</StLink>
  </StButtonWrapper>
  </>
  )
}

export default InputWrapper

const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`

const StInput = styled.input`
  width: 80%;
  height: 60px;
  margin: 10px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #4F4F4F;
  background-color: #F2F2F2;
`
const StButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  margin: 0 30px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #33F0E5;
  }
`;
