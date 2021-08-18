import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {singInUserApi} from "./loginAPI";

const initialState = {
    email:'',
    password:'',
    sesion:null,
    loading:false,
};
export const singInUser = createAsyncThunk(
    'login/sinIn',
    async ({email='',password=''})=>{
        const data = await singInUserApi({email, password});
        return data;
    }
);
const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        handleEmail:(state,action)=>{
            state.email = action.payload;
        },
        handlePassword:(state,action)=>{
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
    builder
      .addCase(singInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(singInUser.fulfilled, (state, action) => {
         state.loading = false;
         state.sesion = action.payload;
      })
        .addCase(singInUser.rejected,(state)=>{
            state.loading = false;
            state.sesion = null;
        });
  },
});

export const { handleEmail,handlePassword } = loginSlice.actions;
export const selectLogin = (state) =>  state.login;
export const selectSesion = (state) => state.login.sesion;
export  default  loginSlice.reducer;