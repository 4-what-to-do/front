import { configureStore } from "@reduxjs/toolkit";
import {dateSlice, isOnSlice} from "../modules/dateSlice";

// TO-BE
const store = configureStore({
  reducer: {
    dateSlice,
    isOnSlice,
  },
});

export default store;