import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validations/RegisterSchema'

export default function Register() {

  const {register,handleSubmit,formState:{errors}} = useForm(
    {
      resolver:yupResolver(registerSchema)
    }
  )


  const RegisterForm = async(data)=>{
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box component="section">
      <Typography component="h1" variant="h2">Register</Typography>

      <Box component="form" onSubmit={handleSubmit(RegisterForm)}>

        <TextField {...register("userName")} sx={{margin:1}} label="userName" variant="outlined" 
        error={errors.userName}
        helperText={errors.userName?.message}/>

        <TextField {...register("fullname")} sx={{margin:1}} label="fullname" variant="outlined" 
        error={errors.fullname}
        helperText={errors.fullname?.message}/> 

        <TextField {...register("email")} sx={{margin:1}} label="email" variant="outlined" 
        error={errors.email}
        helperText={errors.email?.message}/>

        <TextField {...register("password")} sx={{margin:1}} label="password" variant="outlined" 
        error={errors.password}
        helperText={errors.password?.message}/>

        <TextField {...register("phoneNumber")} sx={{margin:1}} label="phoneNumber" variant="outlined" 
        error={errors.phoneNumber}
        helperText={errors.phoneNumber?.message}/> 

        <Button variant="outlined" type="submit">Register</Button>

      </Box>
    </Box>
  )
}
