import React from 'react';
import styled from 'styled-components';
import { Link,useNavigate } from "react-router-dom";
import { HiOutlineLogout } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';
import { requestLogout } from '../../api/todos';
import { useMutation } from 'react-query';



function MyTodoHeader(){

  const navigate = useNavigate();
  
  const logoutMutation = useMutation(requestLogout, {
    onSuccess: (response) => {
    console.log(response);
    },
    onError: (response) => {
    console.log(response);
    },
    });
    
    const handleLogout = (e) => {
    e.preventDefault();
    try {
    logoutMutation.mutate("access_token");
    navigate('/');
    } catch (error) {
    console.log(error);
    }
    };
  

    return(
        <>
        
        <Community to={'/community'}><FaUserFriends fontSize="24px"/></Community>
        <Logout onClick={handleLogout}><HiOutlineLogout fontSize="24px"/></Logout>
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