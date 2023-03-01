import styled from 'styled-components';
import CommunutyHeader from './CommunityHeader'
import CommunityWrapper from './CommunityWrapper'


function CommunityLayout(){
return(
    <>
    <StHeader>
        <CommunutyHeader/>
    </StHeader>
    <StLogoWrapper>
        <CommunityWrapper/>
    </StLogoWrapper>
    </>
)
}

export default CommunityLayout;

const StHeader = styled.div`
position: fixed;
top: 0;
width: 100%;
background-color: #fff;
z-index: 1;

@media screen and (max-width: 768px) {
position: static;
margin: 1rem 0;
}
`;

const StLogoWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-height: calc(100vh - 330px);
margin-top: 30px;
padding-top: 90px;

@media screen and (max-width: 768px) {
padding-top: 110px;
}
`;