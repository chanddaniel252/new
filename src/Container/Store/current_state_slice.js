import { createSlice } from "@reduxjs/toolkit";


const createReducer=createSlice({
    name:'name',
    initialState:{
        name:'Home'
    },
    reducers:{
        setScreenName:(state,action)=>{state.name=action.payload}
    }
})


export const {setScreenName}= createReducer.actions;

export default createReducer.reducer;