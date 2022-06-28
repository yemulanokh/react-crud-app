import React, { useState } from 'react'
import { FormControl,FormGroup, InputLabel, Input, Typography, Button, styled} from '@mui/material'
import { addUser } from '../service/db';

// const container = styled(FormGroup)`             
//   width: 100%;
//   margin: 5% auto 0 auto;
//   & > div
// `

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

export const AddUser = () => {

    const [user , setUser] = useState(initialValues);

    const onValueChange = (e) =>{
        // console.log(e.target.name, e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetails = async() => {
        await addUser(user);

    }
  return (
    <FormGroup>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name :</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>Username :</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email :</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone :</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone"/>
        </FormControl>
        <FormControl>
            <Button onClick={() => addUserDetails()} variant='contained'>Add User</Button>
        </FormControl>
    </FormGroup>
  )
}
