
import './Body.css'
import { Info } from './Info'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Skills } from './Skills'
import { AddSkills } from './AddSkills'
import { EditSkills } from './editSkills'
import { useSelector,useDispatch } from 'react-redux'
import { setAddDetails, setAllDetails, setRemoveDetails } from './Store/details_slice'
import { setAllSkills } from './Store/skill_slice'


export const Body = (props) => {

    const dispatch=useDispatch()
    const {details}=useSelector(state=>state.details)
    const { name } = useSelector(state => state.name) //global state
    // const [details, setDetails] = useState([]);
  

    useEffect(() => {
       
        axios.get('http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/fetch/data')
            .then(resp => resp.data).then(result => dispatch(setAllDetails(result.data)))
            .catch(err => alert(err))

            axios.get('http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/fetch/skills')
            .then(resp => resp.data).then(result => dispatch(setAllSkills(result.data)))
            .catch(err => alert(err))

    }, [])

   

    const deleteSelected = (id) => {
        console.log(id)
        axios.get(`http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/delete/data/${id}`)
            .then(resp => {

                dispatch(setRemoveDetails(id))
                alert('deleted')
            })
            .catch(err => console.log(err.response.data))
    }

    return (
        <div className="body" onMouseEnter={() => props.setName('drawer1')} >
            <div className='heading'>
                <h1 >personal website</h1>
            </div>
            <div className='box'>

                {name === 'Home' ?

                    details && details.map((detail, index) => {
                        return (
                           
                                <div key={index} className='card2'>
                                    <a>{detail.name}</a>
                                    <a>{detail.contact_detail}</a>
                                    <p>{detail.description}</p>
                                    <text onClick={() => deleteSelected(detail.id)}>Delete</text>
                                    
                                </div>
                            
                        )
                    })
                    :

                    name === 'Info' ? <Info /> :
                        name==='AddSkills'? <AddSkills/>:
                        name==='EditSkills'? <EditSkills/>:<Skills />}

            </div>
        </div>
    )
}