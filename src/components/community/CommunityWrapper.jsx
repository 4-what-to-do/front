import React from 'react';
import styled from 'styled-components';
import CategoryTodoList from './CategoryTodoList';
import {FaPencilAlt} from 'react-icons/fa';
import {RiComputerFill} from 'react-icons/ri';
import {ImCamera} from 'react-icons/im';
import {IoBeerOutline} from 'react-icons/io5';
import {SlHeart} from 'react-icons/sl';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

function CommunityWrapper(){

const {id} = useParams();

return(
<>
<LogoContainer>
<Logo src='/img/logo.jpeg'/>
<CategoryContainer>
<CategoryButton to={'/community/STUDY'}>공부 <FaPencilAlt/></CategoryButton>
<CategoryButton to={'/community/TASK'}>업무 <RiComputerFill/></CategoryButton>
<CategoryButton to={'/community/EXERCISE'}>취미 <ImCamera/></CategoryButton>
<CategoryButton to={'/community/MEETING'}>약속 <IoBeerOutline/></CategoryButton>
<CategoryButton to={'/community/ETC'}>기타 <SlHeart/></CategoryButton>
</CategoryContainer>
</LogoContainer>
{/* <CategoryTodoList/> */}
</>
)
}

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15rem;
`;

const Logo = styled.img`
max-width: 700px;
max-height: 100%;
@media screen and (max-width: 700px) {
max-width: 100%;
}
`;

const CategoryContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
flex-wrap: wrap;
`;


const CategoryButton = styled(Link)`
background-color: #99CCFF;
color:#fff;
border: none;
padding: 1rem;
font-size: 1.5rem;
border-radius: 30px;
margin: 0 1rem;
`;

export default CommunityWrapper;