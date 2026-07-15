import React, { useEffect } from 'react'
import authAxiosInstance from '../../api/authAxiosInstance';
import useAuthStore from '../../store/useAuthStore';

export default function Cart() {

  const token = useAuthStore((state)=> state.token);

  console.log(token);

  const getItems = async ()=>{
    const response = await authAxiosInstance.get(`/Carts`)

    console.log(response);
  }

  useEffect(()=>{
    getItems();
  },[])

  return (
    <div>
      cart
    </div>
  )
}
