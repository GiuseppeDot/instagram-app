import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  reducer: mainReducer,
} );

export default store;

//adesso per rendere lo store disponibile, dobbiamo metterlo in main
