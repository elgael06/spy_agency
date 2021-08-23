import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllRoutesAccess } from './layout-privateAPI';


export const getAllRoutesAccessAPI = createAsyncThunk(
    'layout/menus',
    getAllRoutesAccess
); 

const initialState = {
    menus: [],
    loaddin: false,
    collapsed:false,
}

const layoutSlice = createSlice({
    name:'layout',
    initialState,
    reducers:{
        handleCollapsed:(state,action)=>{
            state.collapsed = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllRoutesAccessAPI.pending, (state)=> {
            state.loaddin  = true;
        })
        .addCase(getAllRoutesAccessAPI.fulfilled, (state, action)=> {
            state.loaddin = false;
            state.menus = action.payload.status ? action.payload.data : [];
        })
        .addCase(getAllRoutesAccessAPI.rejected, state=>{
            state.loaddin = false;
            state.menus = [];
        })
    }
}); 

export const { handleCollapsed } = layoutSlice.actions;
export const selectMenus = (state, action)=> state.layout.menus;
export const selectCollapsed = (state, action)=> state.layout.collapsed;

export default layoutSlice.reducer;