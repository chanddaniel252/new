import { createSlice } from "@reduxjs/toolkit";


const createReducer=createSlice({
    name:'details',
    initialState:{
        details:[]
    },
    reducers:{
        setAllDetails:(state,action)=>{state.details=(action.payload)},
        setAddDetails:(state,action)=>{state.details.push(action.payload)},
        setRemoveDetails:(state,action)=>{state.details=state.details.filter(f=>f.id!=action.payload)}
    }
})


export const {setAddDetails,setRemoveDetails,setAllDetails}= createReducer.actions;

export default createReducer.reducer;