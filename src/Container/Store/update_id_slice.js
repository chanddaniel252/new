import { createSlice } from "@reduxjs/toolkit";


const createReducer=createSlice({
    name:'update',
    initialState:{
        update:''
    },
    reducers:{
        setUpdateName:(state,action)=>{state.update=action.payload}
    }
})


export const {setUpdateName}= createReducer.actions;

export default createReducer.reducer;