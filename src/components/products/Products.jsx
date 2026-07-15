import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import useProducts from '../../hooks/useProducts';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'



export default function Products() {

  const {data,isLoading,isError,error} = useProducts();

  if(isLoading) return <CircularProgress />

  return (
    <Box clasName ="product" components="section">
        <Typography component="h1" variant="h1">Products</Typography>

        <Grid container>

            {data.response.data.map((product)=>{
                return <Grid items size = {{xs: 6 , md: 4 }} sx={{textAlign:'center'}}>
                            <Card>
                                <CardMedia
                                component="img"
                                image = {product.image}
                                sx={{width: 200 }}
                                ></CardMedia>

                                <CardContent>
                                    <Typography component = "h3" variant="h3">{product.name}</Typography>
                                    <Typography component = "span" variant="body1">{product.price}$</Typography>
                                </CardContent>
                            </Card>
                       </Grid>
            })}

        </Grid>
    </Box>
    

  )
}
