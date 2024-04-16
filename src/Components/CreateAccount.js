import React from 'react'
import {Grid,Typography,Divider,TextField,Button,Box} from '@mui/material';

const CreateAccount = () => {
  return (
    <Grid container sx={{justifyContent:'center'}}>
        <Grid item   sx={{width:'85%',justifyContent:'center',border:'' ,marginTop:{md:'20px'}}}>
        <Typography sx={{fontSize:{md:'23px'},fontWeight:{md:'700'}}}>CREATE AN ACCOUNT</Typography>
        <Divider sx={{marginTop:{md:'20px'}}}/>
        <Typography sx={{marginTop:{md:'20px'}}}>Sign up for a free account at Dearpet.</Typography>
        <Typography sx={{marginTop:{md:'20px'},fontSize:{md:'13px'},marginBottom:{md:'10px'}}}>First Name</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0, },}}/>
        <Typography sx={{marginTop:{md:'20px'},fontSize:{md:'13px'},marginBottom:{md:'10px'}}}>Last Name</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0, },}}/>
        <Typography sx={{marginTop:{md:'20px'},fontSize:{md:'13px'},marginBottom:{md:'10px'}}}>Your Email Address</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0, },}}/>
        <Typography sx={{marginTop:{md:'20px'},fontSize:{md:'13px'},marginBottom:{md:'10px'}}}>Password</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0, },}}/>
        <Box sx={{marginTop:{md:'20px'},color:'black'}}> <Button sx={{color:'black',fontWeight:700}} variant='outlined'> CREATE AN ACCOUNT</Button></Box>
    
        </Grid>
    </Grid>
  )
}

export default CreateAccount
