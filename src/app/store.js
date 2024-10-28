import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
