import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/LoginSchema'
import { CircularProgress } from '@mui/material'
import axiosInstance from '../../api/axiosInstance'
import useAuthStore from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();

  const[serverErrors,setServerErrors] = useState([]);
  const setToken = useAuthStore((state)=> state.setToken );
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm(
    {
      resolver:yupResolver(loginSchema)
    }
  )


  const LoginForm = async(data)=>{
    try {
      const response = await axiosInstance.post(`/auth/Account/Login`,data);
      setToken(response.data.accessToken);
      navigate('/');
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  }

  return (
    <Box component="section">
      <Typography component="h1" variant="h2">Login</Typography>

      {serverErrors?.length > 0 ? serverErrors.map( (error)=>
       <Typography color="error">{error}</Typography>
      ) :''}

      <Box component="form" onSubmit={handleSubmit(LoginForm)}>

        <TextField {...register("email")} sx={{margin:1}} label="email" variant="outlined" 
        error={errors.email}
        helperText={errors.email?.message}/>

        <TextField {...register("password")} sx={{margin:1}} label="password" variant="outlined" 
        error={errors.password}
        helperText={errors.password?.message}/>

        <Button variant="outlined" type="submit" disabled={isSubmitting}>{isSubmitting? <CircularProgress /> :'Login'}</Button>
      </Box>
    </Box>
  )
}

