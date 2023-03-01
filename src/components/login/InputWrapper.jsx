import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { requestLogin } from '../../api/todos';
import { useMutation } from 'react-query';


function InputWrapper() {
  // 로그인 정보를 저장하는 함수
const setLoginInfo = (token) => {
  localStorage.setItem('token', token);
};

// 저장된 로그인 정보를 가져오는 함수
const getLoginInfo = () => {
  return localStorage.getItem('token');
};

// 저장된 로그인 정보를 삭제하는 함수
const removeLoginInfo = () => {
  localStorage.removeItem('token');
};

// 로그인 정보를 체크하는 함수
const checkLoginInfo = () => {
  const token = getLoginInfo();
  return token ? true : false;
};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 정보가 있으면 메인 페이지로 이동
    if (checkLoginInfo()) {
      navigate('/mytodo');
    }
  }, [navigate]);

  // 추가한거
  const loginMutation = useMutation(requestLogin, { 
    onSuccess: (response) => {
      console.log(response)
      alert("로그인 성공");
      navigate("/mytodo");
    },
    onError: (response) => {
      console.log(response);

      alert("로그인 뭔가 에러?");

      alert("로그인 뭔가 에러");

    },
  });

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      try {
        console.log(password)
        loginMutation.mutate({password, email})
        const result = loginMutation.response.data; //추가

        // const result = await requestLogin(email, password); //원래

        setLoginInfo(result.token); // 로그인 정보 저장
        navigate('/mytodo'); // 로그인 성공 후 메인 페이지로 이동
      } catch (error) {
        console.log(error);
        alert('로그인 실패');
      }
    }
  }

  const onLogout = () => {
    removeLoginInfo(); // 저장된 로그인 정보 삭제
    navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
  };
  
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