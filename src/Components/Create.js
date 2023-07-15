import axios from 'axios';
import React,{useState} from 'react'
import {Form, Button, Checkbox, FormField} from 'semantic-ui-react'
import {API_URL} from '../Constants/URL'
import {useNavigate} from 'react-router-dom';
function Create() {
    const[firstName,setFirstName] =useState('');
    const[lastName,setLastName]=useState('');
    const[checked,setChecked] =useState(false);
    const navigate=useNavigate();
    const postData= async()=>{
        await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        navigate('/read');
        // console.log(firstName);
        // console.log(lastName);
        // console.log(checked)
    }
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
            <Button onClick={postData}>Submit</Button>
       </Form>

    </div>
  )
}

export default Create