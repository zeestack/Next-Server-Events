import {
  PayloadAction,
  createSelector,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

import { RootState } from "./configureStore";

export type Todo = {
  id: string;
  name: string;
};

export type TodoList = {
  list: Todo[];
  loading: boolean;
  lastFetch: number | null;
};

const initialState: TodoList = {
  list: [],
  loading: false,
  lastFetch: null,
};

const slice = createSlice({
  name: "TodoList",
  initialState,

  reducers: {
    todoListRequested: (todoList) => {
      todoList.loading = true;
    },

    todoListReceived: (todoList, action) => {
      todoList.list = action.payload.map((s: Todo) => ({
        ...s,
        id: s.id,
        value: s.name,
        label: s.name,
      }));
      todoList.loading = false;
      todoList.lastFetch = Date.now();
    },

    setTodos: (todoList, action: PayloadAction<Todo>) => {
      todoList.list.push({ ...action.payload, id: nanoid() });
      todoList.loading = false;
    },

    setSlice: (todoList, action) => {
      todoList = action.payload;
    },

    completeTask: (tasks, action) => {
      tasks.list = tasks.list.filter((task) => task.id !== action.payload);
    },
  },
});

export const todoListReducer = slice.reducer;
export const { setTodos, setSlice, completeTask } = slice.actions;

export default slice.reducer;
