import React from 'react';
import styled from 'styled-components';
import MyTodoCalendar from './/MyTodoCalendar'
import {BsEmojiSmileUpsideDown,BsEmojiSmile} from 'react-icons/bs';
function MyTodoLeftLayout(){

  // const { isLoading, isError, data } = useQuery(`posts/todo`, getTodos);

    return(
        <Left>
            <UserHi>
                <BsEmojiSmileUpsideDown fontSize={50}/> User! Hi <BsEmojiSmile fontSize={50}/>
            </UserHi>
            <CalendarWrapper>
                <MyTodoCalendar/>
            </CalendarWrapper>
        </Left>
    )
}


const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const UserHi = styled.h2`
  width: 80%;
  color: white;
  position: sticky;
  top: 0;
  padding: 16px;
  margin-top: 100px;
  font-size: 40px;
`;

const CalendarWrapper = styled.div`
  flex: 1;
  width: 80%;
  height: 100%;
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
`;
export default MyTodoLeftLayout;