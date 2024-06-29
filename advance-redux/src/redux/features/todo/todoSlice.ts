import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo } from "./types";

type TState = {
  todos: TTodo[];
};
const initialState: TState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      console.log(state.todos.filter((item) => item.id !== action.payload));
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      const newTask = state.todos.filter((item) => item.id !== action.payload);
      state.todos = [...newTask, task as TTodo];
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
