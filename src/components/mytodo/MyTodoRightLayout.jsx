import MyTodoListWrapper from './MyTodoListWrapper';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { getTodos } from "./../../api/todos";
import { useQuery } from "react-query";
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from "react-query";
import { removeTodo, switchTodo } from "./../../api/todos";

function MyTodoRightLayout() {
  const [showCompleted, setShowCompleted] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const todoDate = useSelector((state)=>state.dateSlice);
  console.log(todoDate.date)
  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  // const { isLoading, isError, data } = useQuery(`posts/todo?data=${date}`, getTodos);

  // if (isLoading) {
  //   return <p>로딩중입니다....!</p>;
  // }

  // if (isError) {
  //   return <p>오류가 발생하였습니다...!</p>;
  // }

  // function Todo({ todo, isActive }) {
  // const queryClient = useQueryClient();
  // // 삭제 확인 용 메시지 관리

  // const deleteMutation = useMutation(removeTodo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("todos");
  //   },
  // });

  // const switchMutation = useMutation(switchTodo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("todos");
  //   },
  // });


  return (
    <TodoLayoutStyle>
      <TodoHeadStyle>
        
        <div className="title-wrapper">
          <h1>{todoDate.date.date}</h1>
          <div className="toggle-wrapper" onClick={handleToggle}>
          
            {isOn ? <BsToggleOn size={50} style={{ color: '#5ee2bb' }} /> : <BsToggleOff size={50} style={{ color: '#616060' }} />}
          
        </div>
          
        </div>
        
        <span className="day">{todoDate.date.weekDay}요일</span>
      </TodoHeadStyle>
      <MyTodoListWrapper showCompleted={showCompleted} />
    </TodoLayoutStyle>
  );
}



const TodoLayoutStyle = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoHeadStyle = styled.div`
  position: relative;
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .toggle-wrapper {
    
    display: flex;
    align-items: center;
  }

  
`;




export default MyTodoRightLayout;