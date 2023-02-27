import TodoItem from './TodoItem'
import styled from 'styled-components';
import PublicButtonGroup from './PublicButtonGroup'

function MyTodoListWrapper(){

  // const { isLoading, isError, data } = useQuery(`posts/todo?data=${date}`, getTodos);
  
    return(
        <TodoListStyle>
            <TasksLeft>할일 3개 남음</TasksLeft>  
            <ProgressBarWrapper>
                <ProgressBar/>
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
  background-color: #5ee2bb;
  width: 60%;
  
`;
// ${(props) => props.progress}%;