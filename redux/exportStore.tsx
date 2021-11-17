import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './state';
import usersReducer from './stateTodo';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersReducer
  }
});