import React from 'react';
import styled from 'styled-components';
import LoginHeader from './LoginHeader';
import LoginFormWrapper from './LoginFormWrapper';

function LoginLayout() {
  return (
    <StLayout>
      <StLogoWrapper>
        <LoginHeader />
      </StLogoWrapper>
      <StLoginFormWrapper>
        <LoginFormWrapper />
      </StLoginFormWrapper>
    </StLayout>
  );
}

export default LoginLayout;

const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px
`;

const StLoginFormWrapper = styled.div`
  width: 500px;
  height: 300px;
  border: 4px solid #99CCFF;
  border-radius: 20px;
  position: relative; /* 수정 */
  background-color: transparent;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;
  }
`;

const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 200px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
