import './Info.css'
import Axios from 'axios';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { setAddDetails } from './Store/details_slice';

export const Info=()=>{

    const dispatch=useDispatch();
    const [name,setName]=useState('sa')
    const [desc,setDesc]=useState('as')
    const [contact,setContact]=useState('as');
    
    const {details}=useSelector(state=>state.details)
    const saveInfo=()=>{
 

     
        const data= new FormData();

        data.append('name',name)
        data.append('description',desc)
        data.append('contact_detail',contact)
       
        const uploadData={
            name:name,
            description:desc,
            contact_detail:contact
        }

        Axios.post('http://mi-linux.wlv.ac.uk/~2019323/kulwinder/index.php/store/data',data)
        .then((resp)=>{
            alert('sucessfully added')
            dispatch(setAddDetails(uploadData))

        })
        .catch(err=>alert(err.message))

        
       
      
    }

    return(
        <div className="form">

         <div className='left'>
           
         </div>
         <div className='right'>
            <div className='water'></div>
         <input placeholder='type name' onChange={(text)=>setName(text.target.value)}></input>
         <input placeholder='contact_detail' onChange={(text)=>setDesc(text.target.value)}></input>
         <textarea placeholder='description' onChange={(text)=>setContact(text.target.value)}></textarea>
         <h4 onClick={()=>saveInfo()}>save</h4>
         </div>
        </div>
    )
}