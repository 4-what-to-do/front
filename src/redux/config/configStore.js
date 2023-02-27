import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "../modules/dateSlice";

// TO-BE
const store = configureStore({
  reducer: {
    dateSlice,
  },
});

export default store;