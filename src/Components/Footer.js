import React from 'react'
import {Grid,Typography} from '@mui/material'

const Footer = () => {
  return (
    <Grid container sx={{ border:'1px solid black',backgroundColor:'#EEEEEE',justifyContent:'center',height:'300px'}} >
        <Grid container item width="80%" sx={{border:'1px solid red'}}>
            <Grid item md={5} sx={{border:'1px solid green'}}>
               <Typography sx={{fontSize:{md:'18px'}}}> About Dear Pet</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Our Story</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Our dreams are alike in terms of adorning our four-legged family. To take it further, we envision an approach that's paw-some in its own ways. Happiness, comfort & support, these are our royalties, our pillars on which we stand to be there for our pet's every need. We feel paw-sitive to be able to build a society for our pets and create the world a better place for them.</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Blog</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Careers</Typography>
            </Grid>
            <Grid item md={3} sx={{border:'1px solid orange'}}>
            <Typography sx={{fontSize:{md:'18px'}}}>Support</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> FAQ</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}>Contact us</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Return & Refund Policy</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}>Privacy Policy</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Shipping Information</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Payment Options</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Terms and Conditions</Typography>
               <Typography sx={{fontSize:{md:'12px'}}}> Become a Groomer</Typography>
            </Grid>
            <Grid item md={4} sx={{border:'1px solid blue'}}>
            <Typography sx={{fontSize:{md:'18px'}}}>Keep in touch</Typography>
            </Grid>
        </Grid>
      
    </Grid>
  )
}

export default Footer
