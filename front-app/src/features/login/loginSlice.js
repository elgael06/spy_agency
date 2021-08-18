import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    email:'',
    password:'',
    sesion:null,
};

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
    }
});

export const { handleEmail,handlePassword } = loginSlice.actions;
export const selectLogin = (state) =>  state.login;
export const selectSesion = (state) => state.login.sesion;
export  default  loginSlice.reducer;