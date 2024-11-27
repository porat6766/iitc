import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: {
    todos: [{ id: 1234, payload: "dghjk", completed: false }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = toDosSlice.actions;
export default toDosSlice.reducer;
