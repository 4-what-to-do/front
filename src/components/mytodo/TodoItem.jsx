import React ,{useState} from "react";
import styled,{ css } from "styled-components";
import { MdDone, MdDelete,MdOutlineDoneOutline,MdOutlineCancel } from "react-icons/md";
import { removeTodo, checkSwitchTodo, switchTodo } from "./../../api/todos";
import { useQuery,useMutation, useQueryClient } from "react-query";
import {getTodos} from './../../api/todos';
import { useSelector } from 'react-redux';

function TodoItem(){
  const queryClient = useQueryClient();
  const todoDate = useSelector((state)=>state.dateSlice);
  const date = todoDate.date.date;
  
  const queryKey = "posts_" + date;
  

    const { data, error, isLoading } = useQuery(queryKey,()=> getTodos(date), {
      onSuccess: () => {
            
          },
          onError: () => {
            console.log('error')
          }
    });

    
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    let [editedTodoTitle, setEditedTodoTitle] = useState('');
    const [selectedOption, setSelectedOption] = useState('STUDY');

    const deleteMutation = useMutation(removeTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    });

    const checkSwitchMutation = useMutation(checkSwitchTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    });

    const switchMutation = useMutation(switchTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    });

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const handleTextClick = (e,item) => {
      e.stopPropagation();
      setEditedTodoTitle(item.content);
      setIsModalOpen(true);
    };
    
    const handleModalInputChange = (e) => {
      e.stopPropagation();
      setEditedTodoTitle(e.target.value);
      
    };
  
    const handleModalCompleteButtonClick = (id) => {
      
      const payload = {
        id:id,
        content : editedTodoTitle,
        category: selectedOption
      };
      console.log(selectedOption);
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
      checkSwitchMutation.mutate(payload);

    }
    
    const handleDeleteButtonClick = (item) => {
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
                <CheckCircle done={item.done} onClick={(e)=>checkDonehandler(e,item)} > {item.done && <MdDone />} </CheckCircle>
                <TextWrapper>
                <StyledText option={item.category}>{item.category}</StyledText>
                <Text done={item.done} onClick={(e) => handleTextClick(e,item)}>{item.content}</Text>
                </TextWrapper>
                <Remove onClick={() => handleDeleteButtonClick(item)}>
                <MdDelete />
                </Remove>
            </TodoItemStyle>            
            <Modal isOpen={isModalOpen}>
            <Select value={selectedOption} onChange={(e) => handleSelectChange(e)}>
                    <option value="STUDY">공부</option>
                    <option value="EXERCISE">취미</option>
                    <option value="MEETING">약속</option>
                    <option value="TASK">업무</option>
                    <option value="ETC">기타</option>
            </Select>
            <ModalInput value={editedTodoTitle} onChange={(e) => handleModalInputChange(e)} />
            <ButtonDiv>
            <ModalButton onClick={(e) => handleModalCompleteButtonClick(item.id)}>
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

const Select = styled.select`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 30%;
  margin-bottom: 10px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23808080' d='M16.267,7.075c-0.409-0.41-1.071-0.41-1.48,0L10,11.145L5.213,7.075c-0.41-0.41-1.071-0.41-1.48,0 c-0.41,0.409-0.41,1.071,0,1.48l5.787,5.787c0.41,0.41,1.071,0.41,1.48,0l5.787-5.787C16.677,8.146,16.677,7.484,16.267,7.075z'/%3E%3C/svg%3E") no-repeat right center / 16px 16px;
  cursor: pointer;
`;