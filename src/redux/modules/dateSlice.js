import { createSlice } from "@reduxjs/toolkit";

export const isOnSlice = createSlice({
  name: "isOnSlice",
  initialState: [{ date:"",isOn:false }],
  reducers: {
    switchIsOn(state,action){
      state.isOn = action.payload;
      state.date = dateSlice.date;
    }
  },
});

export const  dateSlice = createSlice({
  name: "selectedDate",
  initialState: { date: "",weekday:"" },
  reducers: {
    addDate(state,action){
      state.date = action.payload;
      
    },
   
    }
  },
);

// export
export const {addDate} = dateSlice.actions;

export const {switchIsOn} = isOnSlice.actions;
