import React from 'react';
import {Grid,Typography} from '@mui/material';
import Imagewithzoom from './Imagewithzoom';

const Homedearpetrecomndations = () => {
  return (
    <>
    
  <Grid container justifyContent={'center'} >
  <Grid>
        <Typography sx={{color:'#6A4EA4',fontSize:{xs:'20px',sm:"25px",md:'28px',lg:'30px'},fontWeight:{xs:750},marginTop:{xs:'15px',sm:'35px'},marginBottom:{xs:'13px',sm:'20px'}}}>Dear Pet Recomondations</Typography>
    </Grid>
    <Grid  container item  width={'90%'}  spacing={2}>
        <Grid item xs={12} sm={6} >
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/1_7a7f3023-333a-4830-853e-4ccbf4bd7156_1024x1024_crop_center.jpg?v=1622546165" alt="not found"/>

            <Typography sx={{marginTop:'5px',fontSize:{xs:'15px',sm:'17px',md:'20px'}}}>Dear Pet Chick'n Bikis</Typography>
        </Grid>
        <Grid container item xs={12} sm={6}  display={'flex'} spacing={2} >
            <Grid item xs={6} sm={6} >
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/2_1024x1024_crop_center.jpg?v=1622546165" alt="not found"/>
           
            <Typography sx={{marginTop:'5px',fontSize:{xs:'15px',sm:'17px',md:'20px'}}}>Customisation</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/3_efaec787-49e1-4801-a550-c9c95249058b_1024x1024_crop_center.jpg?v=1622546165" alt="not found"/>
  
            <Typography sx={{marginTop:'5px',fontSize:{xs:'15px',sm:'17px',md:'20px'}}}>Bedding</Typography>
            </Grid>
        </Grid>

    </Grid>

  </Grid>
  <Grid container justifyContent={'center'}  sx={{marginTop:{xs:'10px',sm:'15px',md:'20px'}}}>
 
    <Grid  container item  width={'90%'}  spacing={2}>
       
        <Grid container item xs={12} sm={6}  display={'flex'} spacing={2} >
            <Grid item xs={6} sm={6} >
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/4_b85b6d0e-60f4-4fec-abd1-30017987081d_1024x1024_crop_center.jpg?v=1622546165" alt="not found"/>
           
            <Typography sx={{marginTop:'5px',fontSize:{xs:'15px',sm:'17px',md:'20px'}}}>Dog Shampoo</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/5_5bac69ca-e50c-46ff-bd61-fca1767f90e4_1024x1024_crop_center.jpg?v=1622546165" alt="not found"/>
  
            <Typography sx={{marginTop:'5px',fontSize:{xs:'15px',sm:'17px',md:'20px'}}}>Cat Shampoo</Typography>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6} >
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/6_c92e03b5-9382-4e3f-b14c-376639ca98de_1024x1024_crop_center.jpg?v=1622546165" alt="not found"/>

            <Typography sx={{marginTop:'5px',fontSize:{xs:'15px',sm:'17px',md:'20px'}}}>Dear Pet Treats</Typography>
        </Grid>

    </Grid>

  </Grid>
  </>
  )
}

export default Homedearpetrecomndations
