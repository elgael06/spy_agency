import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "../features/login/loginSlice";
import layoutReducer from '../components/layout-private/layout-privateSlice';

export const store = configureStore({
  reducer: {
    login:loginReducer,
    layout:layoutReducer
  },
});
