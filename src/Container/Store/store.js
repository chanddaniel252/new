import { configureStore } from '@reduxjs/toolkit';
import current_state_slice from './current_state_slice';
import details_slice from './details_slice';
import skill_slice from './skill_slice';
import update_id_slice from './update_id_slice';




const store= configureStore({
    reducer:{
        name:current_state_slice,
        update:update_id_slice,
        details:details_slice,
        skills:skill_slice
    }
})


export default store;