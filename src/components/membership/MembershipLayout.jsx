import React from 'react'
import styled from 'styled-components';
import Header from './MembershipHeader';
import MembershipFormWrapper from './MembershipFormWrapper';


function MembershipLayout() {
  return (
    <StLayout>
    <Header />
    <MembershipFormWrapper />
    </StLayout>
  )
}

export default MembershipLayout

const StLayout = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
