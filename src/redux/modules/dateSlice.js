import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "selectedDate",
  initialState: { date: "",weekday:"" },
  reducers: {
    addDate(state,action){
      state.date = action.payload;
      
    }
  },
});

// export
export const {addDate} = dateSlice.actions;

export default dateSlice.reducer;