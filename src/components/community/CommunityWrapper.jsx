import React from 'react';
import styled from 'styled-components';
import CategoryTodoList from './CategoryTodoList';
import {FaPencilAlt} from 'react-icons/fa';
import {RiComputerFill} from 'react-icons/ri';
import {ImCamera} from 'react-icons/im';
import {IoBeerOutline} from 'react-icons/io5';
import {SlHeart} from 'react-icons/sl';
function CommunityWrapper(){
    return(
        <>
        <Logo/>
        <CategoryContainer>
        <CategoryButton>공부 <FaPencilAlt/></CategoryButton>
        <CategoryButton>업무 <RiComputerFill/></CategoryButton>
        <CategoryButton>취미 <ImCamera/></CategoryButton>
        <CategoryButton>약속 <IoBeerOutline/></CategoryButton>
        <CategoryButton>기타 <SlHeart/></CategoryButton>
        </CategoryContainer>
        <CategoryTodoList/>
        </>
    )
}
const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`

  background-color: #99CCFF;
  color:#fff;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 30px;
  margin: 0 1rem;
`;

export default CommunityWrapper;
