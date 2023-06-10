import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TODOs } from "../types";

interface TodoState {
  todos: TODOs[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TODOs[]>) {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<TODOs>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, setTodos, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
