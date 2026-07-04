import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import useCategories from '../../hooks/useCategories';

export default function Categories() {

    const {data,isLoading,isError,error} = useCategories();

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography color='red'>{error}</Typography>

  return (
    <div>
      {data.response.data.map((category)=><Box> <Typography>{category.name}</Typography></Box>)}
    </div>
  )
}
