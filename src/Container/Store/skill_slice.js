import { createSlice } from "@reduxjs/toolkit";


const createReducer=createSlice({
    name:'skills',
    initialState:{
        skills:[]
    },
    reducers:{
        setAllSkills:(state,action)=>{state.skills=(action.payload)},
        setAddSkills:(state,action)=>{state.skills.push(action.payload)},
        setRemoveSkills:(state,action)=>{state.skills=state.skills.filter(f=>f.name!=action.payload)}
    }
})


export const {setAddSkills,setRemoveSkills,setAllSkills}= createReducer.actions;

export default createReducer.reducer;