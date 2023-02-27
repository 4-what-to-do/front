import React from 'react'
import styled from 'styled-components'
import InputWrapper from './InputWrapper'

function LoginFormWrapper() {
  return(
    <StLoginFormWrapper>
      <InputWrapper />
    </StLoginFormWrapper>
  )
}

export default LoginFormWrapper

const StLoginFormWrapper = styled.div`
  width: 500px;
  height: 300px;
  border: 4px solid #99CCFF;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`