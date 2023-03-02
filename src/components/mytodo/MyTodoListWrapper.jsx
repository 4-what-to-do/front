import { useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import styled from 'styled-components';
import PublicButtonGroup from './PublicButtonGroup'
import { useQuery,useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {getTodos} from './../../api/todos';
import {BiConfused} from 'react-icons/bi'
import {BsEmojiSmileUpsideDown} from 'react-icons/bs'
function MyTodoListWrapper(){

  const todoDate = useSelector((state)=>state.dateSlice);
  const date = todoDate.date.date
  const queryKey = "posts_" + date;

  const { data, error, isLoading } = useQuery(queryKey,()=> getTodos(date), {
    onSuccess: () => {
          
        },
        onError: () => {
          console.log('error')
        }
  });
  
  
  
  
  let undoneTasksCount = 0;
  let doneTasksCount = 0;
  let totalTasksCount = 0;
  let progress = 0;

  if (data) {
    
    undoneTasksCount = data.filter((item) => !item.done).length;
    doneTasksCount = data.filter((item) => item.done).length;
    totalTasksCount = data.length;
    progress = (doneTasksCount / totalTasksCount) * 100;
    
  }

  return(
    <TodoListStyle>
      
      {
        
      undoneTasksCount==0 ?<TasksLeft> 할일 끝! <BsEmojiSmileUpsideDown fontSize={24}/></TasksLeft> :<TasksLeft>할일 {undoneTasksCount}개 남음 <BiConfused fontSize={24}/></TasksLeft>  
      
      }
    
      <ProgressBarWrapper>
        <ProgressBar undoneTasksCount={undoneTasksCount} progress={progress}/>
      </ProgressBarWrapper>
      <TodoItem/>
      <PublicButtonGroup/>
    </TodoListStyle>
  )
}

export default MyTodoListWrapper;


const TodoListStyle = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
`;
const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #e9ecef;
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 20px;
  background-color:${(props) => props.undoneTasksCount == 0 ? '#5ee2bb' : '#74ef5ba8'};
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease-in-out;
`;
