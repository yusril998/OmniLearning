import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './state';
import todosReducer from './stateTodo';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    todos: todosReducer
  }
});