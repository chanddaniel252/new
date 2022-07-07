import './Info.css'
import Axios from 'axios';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setAllSkills } from './Store/skill_slice';




export const EditSkills = () => {
    const {update}=useSelector(state=>state.update)
    const [name, setName] = useState('sa')
    const [level, setLevel] = useState('mid')
    
 const dispatch=useDispatch()
 
    const updateSkill = () => {

       

        const data = new FormData();

        data.append('name', name)
        data.append('experience_level', level)



        Axios.post(`http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/update/skills/${update}`, data)
            .then((resp) =>{ 
                
                
                Axios.get('http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/fetch/skills')
                .then(resp => resp.data).then(result => dispatch(setAllSkills(result.data)))
                .catch(err => alert(err))
                alert('sucessfully updated')})
            .catch(err => alert(err.response.message))



    }

    return (
        <div className="form">

            <div className='left'>

            </div>
            <div className='right'>
                <div className='water'></div>
                <input placeholder='type name' onChange={(text) => setName(text.target.value)}></input>
              
                <select className="experience_level" onChange={(e)=>setLevel(e.target.value)}>
                    <option value="mid" >mid</option>
                    <option value="beginner" >beginner</option>
                    <option value="expert" >expert</option>
                    
                </select>
                <h4 onClick={() => updateSkill()}>update</h4>
            </div>
        </div>
    )
}