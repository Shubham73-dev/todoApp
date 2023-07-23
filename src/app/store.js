import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../redux/list-slice";

const store = configureStore({
  reducer: {
    listItems: listReducer,
  },
});

export default store;
