import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAccountApi, singInUserApi, logoutAPI } from './loginAPI';
import persistedState from '../../app/initialState';


export const singInUser = createAsyncThunk(
    'login/sinIn',
    async ({email='',password=''})=>{
        const data = await singInUserApi({email, password});
        return data;
    }
);
export const singOutUser = createAsyncThunk(
  'login/sinOut',
    logoutAPI
);

export const createAccountAsync = createAsyncThunk(
    'login/createAccount',
    createAccountApi
);
const loginSlice = createSlice({
    name:'login',
    initialState:persistedState.login,
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
        .addCase(createAccountAsync.pending,(state)=>{
            state.loading = true;
        })
          .addCase(singInUser.fulfilled, (state, action) => {
             state.loading = false;
             state.sesion = action.payload;
          })
        .addCase(createAccountAsync.fulfilled,(state)=>{
          state.loading = false;
        })
        .addCase(createAccountAsync.rejected,(state)=>{
          state.loading = false;
        })
        .addCase(singInUser.rejected,(state)=>{
            state.loading = false;
            state.sesion = null;
        }).addCase(singOutUser.fulfilled,(state, action)=>{
          if (action.payload){
            state.sesion = null;
          }
        });
  },
});

export const { handleEmail,handlePassword } = loginSlice.actions;
export const selectLogin = (state) =>  state.login;
export const selectSesion = (state) => state.login.sesion;
export  default  loginSlice.reducer;