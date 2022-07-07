
import { useEffect, useState } from 'react'
import './Skill.css'
import Axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { setScreenName } from './Store/current_state_slice'
import { setUpdateName } from './Store/update_id_slice'
import { setRemoveSkills } from './Store/skill_slice'

export const Skills = () => {

    const dispatch=useDispatch()
    const {skills}=useSelector(state=>state.skills)
    
    const [progress,setProgress]=useState('progress')
    const [progress2,setProgress2]=useState('progress2')
    const [progress3,setProgress3]=useState('progress3')
 


    const deleteSkill=(name)=>{
        Axios.get(`http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/delete/skills/${name}`)
        .then(()=>{
            dispatch(setRemoveSkills(name))
            alert('deleted')
        })
        .catch(err => alert(err.response.message))
    }

    return (
        <div style={{ width: '100%', height: '100%', display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: "row", flexWrap: 'wrap' }}>

            {skills.map((skill, index) => {

                return (

                    <div className='loader' key={index}>
                         <text style={{color:'white',fontWeight:'400',fontSize:20,fontFamily:'fantasy',position:'absolute',top:'50%'}}>{skill.name}</text>
                        <svg width='90%' height='90%' >
                            
                            <circle className={skill.experience_level==='expert'?progress:skill.experience_level==='mid'?progress2:progress3} cx="50%" cy="50%" r="35%" >

                            </circle>
                        </svg>
                        <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
                        <button onClick={()=>deleteSkill(skill.name)} style={{letterSpacing:1,borderRadius:6,fontWeight:'600',paddingLeft:20, borderStyle:'none',cursor:'pointer',paddingRight:20,paddingTop:10,paddingBottom:10}}>delete</button>
                        <button style={{letterSpacing:1,fontWeight:'600',paddingLeft:20,borderRadius:6,borderStyle:'none',cursor:'pointer', paddingRight:20,paddingTop:10,paddingBottom:10}} onClick={()=>{
                            dispatch(setUpdateName(skill.name))
                            dispatch(setScreenName('EditSkills'))
                        }}>edit</button>
                        </div>
                    </div>

                )
            })}






        </div>
    )
}