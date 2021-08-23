import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from "../features/login/loginSlice";
import layoutReducer from '../components/layout-private/layout-privateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer,
    layout:layoutReducer
  },
});
