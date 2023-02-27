import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";

function PublicButtonGroup(){
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
        <>
            {open && (
                <AddFormPosition>
                    <AddFormStyle onSubmit={handleFormSubmit}>
                        <InputWrapper>
                            <Select>
                                <option>공부</option>
                                <option>취미</option>
                                <option>약속</option>
                                <option>업무</option>
                                <option>기타</option>
                            </Select>
                            <Input />
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
