
import React ,{useState} from "react";
import styled,{ css } from "styled-components";
import { MdDone, MdDelete,MdOutlineDoneOutline,MdOutlineCancel } from "react-icons/md";
import { removeTodo, checkSwitchTodo, switchTodo } from "./../../api/todos";
import { useQuery,useMutation, useQueryClient } from "react-query";
import {getTodos} from './../../api/todos';
import { useSelector } from 'react-redux';

function TodoItem({ date }){
  const todoDate = useSelector((state)=>state.dateSlice);
  console.log(date);
    const { isLoading, isError, data } = useQuery("posts", getTodos(date));

    
    const queryClient = useQueryClient();
    const [isModalOpen, setIsModalOpen] = useState(false);
    let [editedTodoTitle, setEditedTodoTitle] = useState('');
    

    const deleteMutation = useMutation(removeTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    });

    const switchMutation = useMutation(checkSwitchTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    });

    const checkSwitchMutation = useMutation(switchTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    });

    const handleModalInputChange = (e,item) => {
      editedTodoTitle = item.content;
      setEditedTodoTitle(e.target.value);
      const payload = {
        content: item.content,
        category: item.category,
      };
      checkSwitchMutation.mutate(payload);
    };
  
    const handleModalCompleteButtonClick = () => {
      const payload = {
        content : editedTodoTitle
      };
      switchMutation.mutate(payload);
      setIsModalOpen(false);
    };
    
    const handleModalCancelButtonClick = (item) => {
    setEditedTodoTitle(item.content);
    setIsModalOpen(false);
    };

    const checkDonehandler = (e,item) =>{
      e.stopPropagation();
      const payload = {
        id:item.id,
        done: !item.done,
      };
      switchMutation.mutate(payload);
       
    }

    const handleDeleteButtonClick = (e,item) => {
      deleteMutation.mutate(item.id);
    }
// date !== ""
// date && data && data.map
// 1. network 통신 성공
// 2. 저 코드를 쓰세요
// date !== "" && data && data.map
    return(
       
          <>
        {date && data 
          && data.map((item) =>{
            return(
              <>
            <TodoItemStyle key={item.id}>
                <CheckCircle onClick={(e,item)=>checkDonehandler(e,item)} > {item.done && <MdDone />} </CheckCircle>
                <TextWrapper>
                <StyledText option={item.category}>공부</StyledText>
                <Text>리액트 공부하기</Text>
                </TextWrapper>
                <Remove onClick={(e,item) => handleDeleteButtonClick(e,item)}>
                <MdDelete />
                </Remove>
            </TodoItemStyle>
            <Modal isOpen={isModalOpen}>
            <ModalInput value={editedTodoTitle} onChange={(e) => handleModalInputChange(e,item)} />
            <ButtonDiv>
            <ModalButton onClick={() => handleModalCompleteButtonClick(item)}>
                <MdOutlineDoneOutline/>
            </ModalButton>
            <ModalButton onClick={() => handleModalCancelButtonClick(item)}>
                <MdOutlineCancel/>
            </ModalButton>
            </ButtonDiv>
            </Modal>
            </>
            );
         })}
        

        </>
        
        
    )
}

export default TodoItem;

const Remove = styled.div`
  width: 32px;
  height: 32px;
  display: none;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`;
const StyledText = styled.div`
  font-size: 21px;
  color: white;
  background-color: ${(props) => getColor(props.option)};
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

function getColor(option) {
    switch (option) {
      case "STUDY":
        return "#87CEEB"; // 하늘색
      case "EXERCISE":
        return "#47e4a2"; // 노란색
      case "MEETING":
        return "#FF69B4"; // 분홍색
      case "TASK":
        return "#8B008B"; // 보라색
      default:
        return "#D3D3D3"; // 회색
    }
  }

const Text = styled.div`
  flex-grow: 1;
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
  cursor: pointer;
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ModalInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-size: 16px;
`;

const ModalButton = styled.button`
  padding: 7px 30px;
  margin-right:20px;
  border-radius: 5px;
  font-size: 24px;
  background-color: #38d9a9;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #63e6be;
  }
`;

const ButtonDiv = styled.div`
  margin-left:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`