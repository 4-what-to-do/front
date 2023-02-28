import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <StLogo src='/img/logo.jpeg' alt='logo' />
  );
}

export default Header;

const StLogo = styled.img`
  width: 700px;
  height: 850px;
`;
