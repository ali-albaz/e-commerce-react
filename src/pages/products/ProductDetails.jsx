import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct';
import { Box, CircularProgress ,Typography } from '@mui/material';

export default function ProductDetails() {

   const {id} = useParams();

   const {data,isError,isLoading,error} = useProduct(id);

   if(isLoading) return <CircularProgress />

  return (
    <Box>
        <Typography>{data.response.name}</Typography>
        <Typography>{data.response.description}</Typography>
        <Typography>{data.response.price}</Typography>
    </Box>
  )
}
