import React, { useState } from 'react';
import styled,{ css } from "styled-components";
import { MdDone } from "react-icons/md";
import { FaRegUserCircle,FaHeart,FaRegHeart } from "react-icons/fa";
function CategoryTodoList(){

  const [isHearted, setIsHearted] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
    setLikeCount(isHearted ? likeCount - 1 : likeCount + 1);
  };

    return(
        <GridContainer>
             <GridItem>
              <TodoHeadStyle>
                <UserHeartWrapper>
                  <UserWrapper className='user'>
                    <FaRegUserCircle /> User
                  </UserWrapper>
                  <HeartWrapper>
                  <HeartIcon onClick={handleHeartClick}>
                      {isHearted ? <FaHeart /> : <FaRegHeart />}
                    </HeartIcon>
                    <span className='count'>{likeCount}</span>
                  </HeartWrapper>
                </UserHeartWrapper>
                <div className="title-wrapper">
                  <h5>2022년2월26일</h5>
                </div>
              </TodoHeadStyle>
              <TodoItemStyle>
                <CheckCircle done={true}>{true && <MdDone />}</CheckCircle>
                <TextWrapper>
                  <StyledText option={"공부"}>공부</StyledText>
                  <Text>리액트 공부하기</Text>
                </TextWrapper>
              </TodoItemStyle>
            </GridItem>

            <GridItem>
            <TodoHeadStyle>
                <UserHeartWrapper>
                  <UserWrapper className='user'>
                    <FaRegUserCircle /> User
                  </UserWrapper>
                  <HeartWrapper>
                  <HeartIcon onClick={handleHeartClick}>
                      {isHearted ? <FaHeart /> : <FaRegHeart />}
                    </HeartIcon>
                    <span className='count'>{likeCount}</span>
                  </HeartWrapper>
                </UserHeartWrapper>
                <div className="title-wrapper">
                  <h5>2022년2월26일</h5>
                </div>
              </TodoHeadStyle>
                <TodoItemStyle>
                  <CheckCircle done ={true}> {true && <MdDone />} </CheckCircle>
                  <TextWrapper>
                  <StyledText option={"취미"}>취미</StyledText>
                  <Text>리액트 공부하기</Text>
                  </TextWrapper>
              </TodoItemStyle>
            </GridItem>
            <GridItem>
            <TodoHeadStyle>
                <UserHeartWrapper>
                  <UserWrapper className='user'>
                    <FaRegUserCircle /> User
                  </UserWrapper>
                  <HeartWrapper>
                  <HeartIcon onClick={handleHeartClick}>
                      {isHearted ? <FaHeart /> : <FaRegHeart />}
                    </HeartIcon>
                    <span className='count'>{likeCount}</span>
                  </HeartWrapper>
                </UserHeartWrapper>
                <div className="title-wrapper">
                  <h5>2022년2월26일</h5>
                </div>
              </TodoHeadStyle>
                <TodoItemStyle>
                  <CheckCircle done ={true}> {true && <MdDone />} </CheckCircle>
                  <TextWrapper>
                  <StyledText option={"약속"}>약속</StyledText>
                  <Text>4/25일 항해끝</Text>
                  </TextWrapper>
              </TodoItemStyle>
            </GridItem>
            <GridItem>
            <TodoHeadStyle>
                <UserHeartWrapper>
                  <UserWrapper className='user'>
                    <FaRegUserCircle /> User
                  </UserWrapper>
                  <HeartWrapper>
                  <HeartIcon onClick={handleHeartClick}>
                      {isHearted ? <FaHeart /> : <FaRegHeart />}
                    </HeartIcon>
                    <span className='count'>{likeCount}</span>
                  </HeartWrapper>
                </UserHeartWrapper>
                <div className="title-wrapper">
                  <h5>2022년2월26일</h5>
                </div>
              </TodoHeadStyle>
                <TodoItemStyle>
                  <CheckCircle done ={true}> {true && <MdDone />} </CheckCircle>
                  <TextWrapper>
                  <StyledText option={"기타"}>기타</StyledText>
                  <Text>5키로 빼기</Text>
                  </TextWrapper>
              </TodoItemStyle>
            </GridItem>
            
        </GridContainer>
        
    )
}

const GridContainer = styled.div`
  display: grid;
  background: #e9ecef;
  padding: 10px;
  border-radius: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 열 개수를 자동으로 조절하고, 아이템의 최소 너비는 300px */
  grid-gap: 2rem;
  margin: 0 2rem;

  @media (max-width: 1200px) { /* 화면 너비가 1200px 이하일 때, 열 개수를 3개로 조절 */
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

  @media (max-width: 768px) { /* 화면 너비가 768px 이하일 때, 열 개수를 2개로 조절 */
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 576px) { /* 화면 너비가 576px 이하일 때, 열 개수를 1개로 조절 */
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;

const GridItem = styled.div`
  background: white;
  padding: 10px 25px;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  text-align: center;
  word-wrap: break-word; // 텍스트 길이에 맞게 자동으로 줄바꿈

  max-width: calc(80% - 20px);

@media screen and (max-width: 600px) {
  
    /* 그리드 아이템이 1개일 때 */
    max-width: 100%;
  }
`;

const TodoHeadStyle = styled.div`
  position: relative;
  padding: 28px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h5 {
    margin: 0;
    font-size: 24px;
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

  .user {
    position: relative;
    right: 40px;
    bottom: 20px;
    color: #868e96;
    font-size: 21px;
  }
  
  `
const HeartIcon = styled.span`
font-size: 21px;
color: red;
cursor: pointer;


`;

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
font-size: 16px;
color: white;
background-color: ${(props) => getColor(props.option)};
padding: 5px;
border-radius: 5px;
cursor: pointer;
`;

function getColor(option) {
  switch (option) {
    case "공부":
      return "#87CEEB"; // 하늘색
    case "취미":
      return "#47e4a2"; // 노란색
    case "약속":
      return "#FF69B4"; // 분홍색
    case "업무":
      return "#8B008B"; // 보라색
    default:
      return "#D3D3D3"; // 회색
  }
}

const Text = styled.div`
flex-grow: 1;
flex: 1;
font-size: 18px;
color: #495057;
${(props) =>
  props.done &&
  css`
    color: #ced4da;
  `}
cursor: pointer;
`;
const UserHeartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const HeartWrapper = styled.span`
  position: relative;
  left: 50px;
  bottom: 20px;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 20px;
  margin-right: 10px;
`;


export default CategoryTodoList;
