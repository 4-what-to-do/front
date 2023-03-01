import TodoItem from './TodoItem'
import styled from 'styled-components';
import PublicButtonGroup from './PublicButtonGroup'
import { useQuery,useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {getTodos} from './../../api/todos';

function MyTodoListWrapper(){

  // const { data } = useQuery("posts", getTodos);
  const todoDate = useSelector((state)=>state.dateSlice);

  // const undoneTasksCount = data
  //         .filter((item) => item.date === todoDate.date.date)
  //         .filter((item) => item.done).length;

  // let doneTasksCount = data
  //       .filter((item) => item.date === todoDate.date.date)
  //       .filter((item) => item.done).length;
  // const totalTasksCount = data.todo.length;
  // doneTasksCount = totalTasksCount-doneTasksCount;
  // const progress = (undoneTasksCount / totalTasksCount) * 100;

    return(
        <TodoListStyle>
            <TasksLeft>할일 3개 남음</TasksLeft>  
            <ProgressBarWrapper>
                <ProgressBar progress={30}/>
            </ProgressBarWrapper>
                <TodoItem date={todoDate.date.date}/>
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
  background-color: #5ee2bb;
  width: ${(props) => props.progress}%;
`
