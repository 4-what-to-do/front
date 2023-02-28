import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Logo src='/img/logo.jpeg' alt='logo' />
  );
}

export default Header;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
`;
