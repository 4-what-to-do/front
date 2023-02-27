import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { HiOutlineLogout } from 'react-icons/hi';
import {BiUserPin} from 'react-icons/bi';
function CommunutyHeader(){
    return(
        <Header>
            <MyTodo to={'/mytodo'}><BiUserPin fontSize="30px"/></MyTodo>
            <Logout><HiOutlineLogout fontSize="30px"/></Logout>
        </Header>
    )
}

export default CommunutyHeader;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  

  
`;

const MyTodo = styled(Link)`
  margin-right: 10px;
  padding: 6px 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  background-color: #99CCFF;
  cursor: pointer;
  
`;

const Logout = styled(Link)`
  margin-right: 30px;
  padding: 6px 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  background-color: #99CCFF;
  cursor: pointer;
`;