import MyTodoProgressbar from './MyTodoProgressbar'
import AddTodoInputWrapper from './AddTodoInputWrapper'
import TodoItemWrapper from './TodoItemWrapper'
import FooterButtonWrapper from './FooterButtonWrapper'

function MyTodoListWrapper(){
    return(
        <>
        <MyTodoProgressbar/>
        <AddTodoInputWrapper/>
        <TodoItemWrapper/>
        <FooterButtonWrapper/>
        </>
    )
}

export default MyTodoListWrapper;