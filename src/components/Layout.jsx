import React from 'react'
import styled from 'styled-components';
import Header from './Header'
import LoginFormWrapper from '././login/LoginFormWrapper'

function Layout() {
  return (
    <StLayout>
      <Header/>
      <LoginFormWrapper/>
    </StLayout>
  )
}

export default Layout

const StLayout = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;
