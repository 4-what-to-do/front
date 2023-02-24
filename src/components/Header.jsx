import React from 'react'
import styled from "styled-components";


function Header() {
  return(
    <StHeader>
      What To DO?
    </StHeader>
  )
}

export default Header

const StHeader = styled.div`
color: 33F0E5;
font-size: 80px;
text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow, 0px -1px yellow;
`;
