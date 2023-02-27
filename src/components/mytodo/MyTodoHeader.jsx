import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { HiOutlineLogout } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';



function MyTodoHeader(){

  

    return(
        <>
        
        <Community to={'/community'}><FaUserFriends fontSize="24px"/></Community>
        <Logout><HiOutlineLogout fontSize="24px"/></Logout>
        </>
    )
}

const Community = styled(Link)`
  margin: 10px;
  margin-left: 8px;
  margin-right:5px;
  padding: 10px 12px;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  background-color: #99CCFF;
  cursor: pointer;
`;

const Logout = styled(Link)`
  margin: 10px;
  margin-left: 8px;
  margin-right:5px;
  padding: 10px 12px;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  background-color: #99CCFF;
  cursor: pointer;
`;

export default MyTodoHeader;