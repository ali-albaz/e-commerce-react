import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function Register() {

  const {register,handleSubmit} = useForm()

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
        <TextField {...register("userName")} sx={{margin:1}} label="userName" variant="outlined" />
        <TextField {...register("fullname")} sx={{margin:1}} label="fullname" variant="outlined" /> 
        <TextField {...register("email")} sx={{margin:1}} label="email" variant="outlined" />
        <TextField {...register("password")} sx={{margin:1}} label="password" variant="outlined" />
        <TextField {...register("phoneNumber")} sx={{margin:1}} label="phoneNumber" variant="outlined" /> 
        <Button variant="outlined" type="submit">Register</Button>
      </Box>
    </Box>
  )
}
