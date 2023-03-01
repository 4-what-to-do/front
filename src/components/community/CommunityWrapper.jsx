import React from 'react';
import styled from 'styled-components';
import CategoryTodoList from './CategoryTodoList';
import { FaPencilAlt } from 'react-icons/fa';
import { RiComputerFill } from 'react-icons/ri';
import { ImCamera } from 'react-icons/im';
import { IoBeerOutline } from 'react-icons/io5';
import { SlHeart } from 'react-icons/sl';
import { useQueryClient } from 'react-query';
import { Link,useNavigate } from "react-router-dom";



function CommunityWrapper() {
    const navigate = useNavigate();
    return (
        <>
            <LogoContainer>
                <Logo src='/img/logo.jpeg' alt='logo' />
            </LogoContainer>
            <CategoryContainer>
                <CategoryButton onClick={()=>{navigate('/community')} }>전체 <FaPencilAlt /></CategoryButton>
                <CategoryButton onClick={()=>{navigate('/community/STUDY')} }>공부 <FaPencilAlt /></CategoryButton>
                <CategoryButton onClick={()=>{navigate('/community/TASK')}  }>업무 <RiComputerFill /></CategoryButton>
                <CategoryButton onClick={()=>{navigate('/community/EXERCISE')} }>취미 <ImCamera /></CategoryButton>
                <CategoryButton onClick={()=>{navigate('/community/MEETING')} }>약속 <IoBeerOutline /></CategoryButton>
                <CategoryButton onClick={()=>{navigate('/community/ETC')} }>기타 <SlHeart /></CategoryButton>
            </CategoryContainer>
            <CategoryTodoList />
        </>
    )
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
 max-width: 700px;
 max-height: 100%;
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
  text-decoration: none;
`;


export default CommunityWrapper;
