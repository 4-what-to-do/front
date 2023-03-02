import MyTodoListWrapper from './MyTodoListWrapper';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useSelector,useDispatch } from 'react-redux';
import { publicSwitchTodo } from "./../../api/todos";
import { useQuery,useMutation, useQueryClient } from "react-query";
import {getTodos} from './../../api/todos';


function MyTodoRightLayout() {

  const todoDate = useSelector((state) => state.dateSlice);
  
  const date = todoDate.date.date;
  

  const queryKey = "posts_" + date;
  
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery(queryKey,()=> getTodos(date), {
    onSuccess: () => {
          
        },
        onError: () => {
          console.log('error')
        }
  });
    

  const [showCompleted, setShowCompleted] = useState(true);
  const [stateisOn, statesetIsOn] = useState(false);
  const queryClient = useQueryClient();

  
  

  const publicswitchMutation = useMutation( publicSwitchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const handleToggle = () => {
    
    
    statesetIsOn(!stateisOn);

    const payload = {

      date:date,
      open:!stateisOn,

    }
    publicswitchMutation.mutate(payload);
    
    
  };
  
  
  
  return (
    <TodoLayoutStyle>
      <TodoHeadStyle>
          <div className="title-wrapper">
          <h1>{todoDate.date.date}</h1>
          <div className="toggle-wrapper" onClick={handleToggle}>
            {stateisOn? <BsToggleOn size={50} style={{ color: '#5ee2bb' }} /> : <BsToggleOff size={50} style={{ color: '#616060' }} />}
          </div>
          </div>
          <span className="day">{todoDate.date.weekday}요일</span>
        </TodoHeadStyle>
        <MyTodoListWrapper data = {data} showCompleted={showCompleted} />
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