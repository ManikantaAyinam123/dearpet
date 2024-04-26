import { Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/action';

const DogTabsComponent = () => {
    const dispatch = useDispatch(); 
    const { loading, data, error } = useSelector((state) => state);
    console.log("this is data",data);
    console.log("this is data",loading);
    console.log("this is data",error);
  
    useEffect(() => {
      dispatch(fetchData()); 
    }, [dispatch]);
  
   
    const params=useParams();
    const router=params.id;
    console.log("router ---->",router)
  return (
   <Typography>dhd</Typography>



  

 
  
  )
}

export default DogTabsComponent
