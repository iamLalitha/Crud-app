import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Form, Button, Checkbox, FormField} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

function Update() {
    const[id,setId]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[checked,setChecked] =useState(false);
    const navigate=useNavigate();
    const UpdateUser=async()=>{
        await axios.put(`${API_URL}/${id}`, {
            id,
            firstName,
            lastName,
            checked
          });
          
        navigate('/read')
    }
    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setChecked(localStorage.getItem('checked'))
    },[])
  return (
    <div>
    <Form className='form'>
    <FormField>
        <label>First Name</label>
        <input value={firstName} 
        onChange={event=>setFirstName(event.target.value)}
        placeholder='Enter First name'/>
    </FormField>
    <br/>
    <FormField>
        <label>Last Name</label>
        <input value={lastName}
         onChange={event=>setLastName(event.target.value)}
        placeholder='Enter Last name'/>
    </FormField>
    <br/>
    <FormField>
        <Checkbox checked={checked} label="Agree the terms & conditions"
        onChange={()=>setChecked(!checked)}/>
        
    </FormField>
    <br/>
    <Button onClick={UpdateUser}>Update</Button>
</Form>

</div>
  )
}

export default Update