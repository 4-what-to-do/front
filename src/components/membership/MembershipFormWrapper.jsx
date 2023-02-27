import React from 'react'
import styled from 'styled-components'
import MembershipInputWrappert from './MembershipInputWrappert'

function MembershipFormWrapper() {
  return (
    <StMembershipFormWrapper>
      <MembershipInputWrappert />
    </StMembershipFormWrapper>
  )
}

export default MembershipFormWrapper

const StMembershipFormWrapper = styled.div`
  width: 700px;
  height: 500px;
  border: 4px solid #99CCFF;
  border-radius: 20px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`