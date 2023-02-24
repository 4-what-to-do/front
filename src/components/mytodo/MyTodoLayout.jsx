import MytodoHeader from './../components/mytodo/MyTodoLayout'
import MytodoLeftLayout from './../components/mytodo/MyTodoLeftLayout'
import MytodoRightLayout from './../components/mytodo/MyTodoRightLayout'

function MyTodoLayout(){
    return(
        <>
        <MytodoHeader/>
        <MytodoLeftLayout/>            
        <MytodoRightLayout/>
        </>
    )
}

export default MyTodoLayout;