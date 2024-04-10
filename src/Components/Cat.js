import React from 'react'
import {  Grid, Typography } from '@mui/material'
const Cat = () => {
  return (
   <Grid container sx={{width:'100%',display:'flex',justifyContent:'space-around',}}>
       <Grid item>
        <Typography  sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Cat Accessories</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Bow Tie</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Collar,Leash&Harness</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Mufflers</Typography>
        <Typography  sx={{ mt:3,mb:3,fontSize:'11px',fontWeight:550, }}>Cat Treates</Typography>
        <Typography  sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Dear Pet Fav's</Typography>
        <Typography  sx={{ fontSize:'11px',fontWeight:300, }}>Twin with your Pet</Typography>

        
       
       
       </Grid>
       <Grid item>
       <Typography   sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Cat Beds & Crates</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Beds & Crates</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Furniture & Scratcher</Typography>
        <Typography   sx={{ mt:3,mb:3,fontSize:'11px',fontWeight:550, }}>Cat Bowls</Typography>
        <Typography   sx={{ fontSize:'11px',fontWeight:550, }}>Cat Toys</Typography>
      
     
       
      
       
      
       </Grid>
       <Grid item>
       <Typography sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Dear Pet Collections</Typography>
       <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Double Trouble Collection</Typography>
       <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Something's Fishy Collection</Typography>
       <Typography sx={{ fontSize:'11px',fontWeight:300, }}>Classic Collection</Typography>
       <Typography sx={{ mt:3,mb:1,fontSize:'11px',fontWeight:550, }}>Hygiene & Care</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Oral Care</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Strains & Odour Control</Typography>
        <Typography sx={{ fontSize:'11px',fontWeight:300, }}>Litter Training</Typography>

     
       </Grid>
       <Grid item>
       
        <Typography  sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Cat Gromming</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Syhampoos & Conditioners</Typography>
        <Typography sx={{ mb:1,fontSize:'11px',fontWeight:300, }}>Brushes & Combs</Typography>
        <Typography sx={{ fontSize:'11px',fontWeight:300, }}>Towels & Wipes</Typography>
        <Typography sx={{ mt:3,fontSize:'11px',fontWeight:550, }}>Travel & Utilities</Typography>
       </Grid>

   </Grid>
  )
}

export default Cat
