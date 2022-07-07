import { useEffect, useState } from 'react';
import { FaBars, FaBackward, FaHome, FaInfo, FaStar } from 'react-icons/fa'
import { Body } from './Body';
import './Drawer.css'
import {useDispatch} from 'react-redux'
import { setScreenName } from './Store/current_state_slice';

export const Drawer = () => {
    const [name, setName] = useState('drawer1')
    useEffect(()=>{

      setName('drawer1')
    },[])

    const dispatch=useDispatch()
    return (
        <div className='main'>
            <Body setName={setName}/>
            <FaBars size={40} style={{ padding: 15, color: 'wheat', position: 'absolute', top: 0, left: 0 }} onClick={() => setName('drawer2')} />
            <div className={name}>

                <FaBackward size={30} style={{ padding: 15, position: 'absolute', bottom: 0, left: 0 }} color='white' onClick={() => setName('drawer1')} />
                <div className='container'>
                    <FaHome size={40} color='white'/>
                    <a onClick={()=>{
                        dispatch(setScreenName('Home'))
                        setName('drawer1')
                    }}>Home</a>
                </div>
                <div className='container'>
                    <FaInfo size={40} color='white'/>
                    <a onClick={()=>
                        {dispatch(setScreenName('Info'))
                        setName('drawer1')}
                      
                    }>Info</a>
                </div>
                <div className='container' >
                    <FaStar size={40} color='white' />
                    <a onClick={()=>
                        {dispatch(setScreenName('Skills'))
                        setName('drawer1')}}>Skills</a>
                </div>
                <div className='container' >
                    <FaStar size={40} color='white' />
                    <a onClick={()=>
                        {dispatch(setScreenName('AddSkills'))
                        setName('drawer1')}}>add Skills</a>
                </div>


            </div>
        </div>
    )
}