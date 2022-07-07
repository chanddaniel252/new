import './Info.css'
import Axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setAddSkills } from './Store/skill_slice';

export const AddSkills = () => {

    const dispatch=useDispatch()
    const [name, setName] = useState('sa')
    const [level, setLevel] = useState('mid')
    

    const saveSkill = () => {


        const data = new FormData();

        data.append('name', name)
        data.append('experience_level', level)


        const uploadData={
            name:name,
            experience_level:level
        }

        Axios.post('http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/store/skills', data)
            .then((resp) => {

                dispatch(setAddSkills(uploadData))
                alert('sucessfully added')
            })
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
                <h4 onClick={() => saveSkill()}>save</h4>
            </div>
        </div>
    )
}