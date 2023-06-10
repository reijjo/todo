import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../reducers/todoReducers";

const store = configureStore({
  reducer: {
    todo: todoReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
