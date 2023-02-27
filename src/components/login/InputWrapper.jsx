import React, { useState } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { requestLogin } from '../../api/todos';



function InputWrapper() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
  //       id,
  //       password,
  //     });
  //     const token = response.data.token;
  //     localStorage.setItem('token', token);
  //     const decodedToken = jwtDecode(token);
  //     console.log(decodedToken); // jwt 토큰 해독 결과 출력
  //     // TODO: 로그인 후 페이지 이동 등 필요한 작업 수행
  //   } catch (error) {
  //     console.error(error);
  //     alert('로그인 실패');
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!id.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      try {
        const result = await requestLogin(id, password);
        navigate('/'); // 로그인 성공 후 메인 페이지로 이동
      } catch (error) {
        console.error(error);
        alert('로그인 실패');
      }
    }
  }


  return(
    <>
    <StInputWrapper>
      <StInput type="email" placeholder="아이디" value={id} onChange={handleUsernameChange}/>
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
