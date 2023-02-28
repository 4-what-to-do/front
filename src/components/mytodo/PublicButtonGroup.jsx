import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../../api/todos';
import { useMutation, useQueryClient } from 'react-query';


function PublicButtonGroup(){
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    
    const queryClient = useQueryClient();
    const todoDate = useSelector((state)=>state.dateSlice);

    const mutation = useMutation(addTodo, {
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries("posts");
      },
    });

    
    const [content, setContent] = useState("");
    
    const [category, setCategory] = useState("");
    

     // 에러 메시지 발생 함수
   
     const onChangehandler = (e) => {
      setContent(e.target.value);
    }

    const onSelectHandler = (e) => {
      e.preventDefault();
      setCategory(e.target.value);
    };

    const handleSubmitButtonClick = async (event) => {
      // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함
      event.preventDefault();
  
     
      // 추가하려는 todo를 newTodo라는 객체로 세로 만듦
      const newTodo = {
        content,
        done:false,
        category:category,
        date:todoDate.date.date,
        
      };
  

      mutation.mutate(newTodo);

      setContent("");
      
    };
    
    return(
        <>
            {open && (
                <AddFormPosition>
                    <AddFormStyle onSubmit={handleSubmitButtonClick}>
                        <InputWrapper>
                            <Select value={category} onChange={(e)=>onSelectHandler(e)}>
                              <option value="STUDY">공부</option>
                              <option value="EXERCISE">취미</option>
                              <option value="MEETING">약속</option>
                              <option value="TASK">업무</option>
                              <option value="ETC">기타</option>
                            </Select>
                            <Input 
                            value={content}
                            onChange={(e)=>onChangehandler(e)}/>
                        </InputWrapper>
                    </AddFormStyle>
                </AddFormPosition>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const AddFormPosition = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const AddFormStyle = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-left: 10px;
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 20%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23808080' d='M16.267,7.075c-0.409-0.41-1.071-0.41-1.48,0L10,11.145L5.213,7.075c-0.41-0.41-1.071-0.41-1.48,0 c-0.41,0.409-0.41,1.071,0,1.48l5.787,5.787c0.41,0.41,1.071,0.41,1.48,0l5.787-5.787C16.677,8.146,16.677,7.484,16.267,7.075z'/%3E%3C/svg%3E") no-repeat right center / 16px 16px;
  cursor: pointer;
`;


export default PublicButtonGroup;
