import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addDate } from './../../redux/modules/dateSlice'
import { useDispatch } from 'react-redux';


function MyTodoCalendar() {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [weekDay,setWeekDay] = useState('');
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  
  const handleDateClick = (value) => {
    setSelectedDate(value);
  };

  useEffect(()=>{
    
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const weekDay = weekDays[selectedDate.getDay()];
    const formattedDate = `${year}년${month}월${day}일`;

    setWeekDay(weekDay);
    setFormattedDate(formattedDate);
  },[selectedDate])

  useEffect(()=>{
    if(formattedDate !== ''){
      dispatch(addDate({ date: formattedDate, weekDay: weekDay }));
      
    }
  },[formattedDate,weekDay, dispatch])
    
  

  return (
        <CalendarWrapper>
          <MyCalendar formatDay={formatDay} value={selectedDate} onClickDay={handleDateClick} />
        
        </CalendarWrapper>
  );
}

const formatDay = (locale, date) => {
  return date.getDate(); // 날짜만 반환
}


const CalendarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  
  
`;


const MyCalendar = styled(Calendar)`
  
  &&.react-calendar { 
    width: 800px;
    padding:20px 20px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    border: none; /* 추가 */
  
  }
  
  .react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #99CCFF;
  color:white;
  font-size: 1em;
  text-decoration: none;
  }
  .react-calendar__navigation__label {
      font-weight: bold;
      font-size: 20px;
  }
  .react-calendar__navigation__next-button{
      font-weight: bold;
      font-size: 30px;

  }
  .react-calendar__navigation__next2-button{
      font-weight: bold;
      font-size: 30px;

  }
  .react-calendar__navigation__prev-button{
      font-weight: bold;
      font-size: 30px;

  }
  .react-calendar__navigation__prev2-button{
      font-weight: bold;
      font-size: 30px;

  }
    
  
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #99CCFF;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #eef08399;
    border-radius: 6px;
    font-weight: bold;
    color: #bcbcbc;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #99CCFF;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  &&&.react-calendar__tile--active {
    
    background: #99CCFF;
    border-radius: 6px;
    font-weight: bold;
    color: white;
    
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #99CCFF;
    color: white;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #99CCFF;
    border-radius: 0;
    
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #99CCFF;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #99CCFF;
    color: white;
  }
  
  .react-calendar__month-view__days__day {
    padding-left:30px;
    padding-bottom: 30px;
    padding-right: 20px;
    font-size: 14px;
    
    
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
 
  .react-calendar__tile.react-calendar__month-view__days__day {
  display: flex;
  justify-content: flex-end;
}

.react-calendar__tile.react-calendar__month-view__days__day abbr {
  margin-left: auto;
}
.react-calendar__month-view__weekdays__weekday abbr{
  text-decoration: none;
  border: none;
  
}
`;


export default MyTodoCalendar;