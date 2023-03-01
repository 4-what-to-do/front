import React from 'react';
import styled from 'styled-components';
import Header from './MembershipHeader';
import MembershipFormWrapper from './MembershipFormWrapper';

function MembershipLayout() {
  return (
    <StLayout>
      <StLogoWrapper>
        <Header />
      </StLogoWrapper>  
      <StMembershipFormWrapper>
        <MembershipFormWrapper />
      </StMembershipFormWrapper>
    </StLayout>
  );
}

export default MembershipLayout;

const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 200px;
  margin-top: 20px;
  `;

const StMembershipFormWrapper = styled.div`
  width: 700px;
  height: 500px;
  border: 4px solid #99CCFF;
  border-radius: 20px;
  position: relative; 
  top: 50px;
  background-color: transparent;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;
  }
`;
