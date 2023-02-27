import React from 'react'
import styled from 'styled-components';
import LoginHeader from './LoginHeader';
import LoginFormWrapper from './LoginFormWrapper';


function LoginLayout() {
  return (
    <StLayout>
    <LoginHeader />
    <LoginFormWrapper />
    </StLayout>
  )
}

export default LoginLayout

const StLayout = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
