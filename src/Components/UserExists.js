import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Box, IconButton, Divider } from '@mui/material';
import { auth } from '../firebase';
import { Icon } from "@iconify/react";

const UserExists = () => {
  const [formClose, setFormClose] = useState(false);
  const [username,setUserName] =useState('');

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully.');
        localStorage.removeItem('accessToken');
        setFormClose(true); // Use setFormClose instead of setcloseform
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const handleCloseForm = () => {
    setFormClose(true); // Use setFormClose instead of setcloseform
  };
  useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        setUserName(user.displayName);
      }

    });
    if (formClose) {

      window.location.reload();
  }
   }, [formClose]);

  return (

  
    !formClose && (
      <Grid sx={{ minWidth: 400, padding: '15px 30px 100px 30px', position: 'relative', marginTop: {} }}>
        <Box sx={{ display: 'flex', position: 'absolute', top: '20px', right: '30px', marginBottom: '50px', fontWeight: 700 }}> <IconButton onClick={() => setFormClose(true)}> <Icon icon="iconoir:cancel" width="18" height="18" /><Typography sx={{ fontSize: '12px', fontWeight: 500, ml: '2px' }}>
          CLOSE</Typography></IconButton></Box>
        <Box sx={{ mt: '50px' }}> <Typography sx={{ fontSize: '13px', fontWeight: 700,textTransform:'uppercase',letterSpacing:'0.5px' }}>{username}</Typography></Box>
        <Divider sx={{ mt: 2 }} />
        <Typography sx={{ textAlign: 'center',marginTop:'20px' }}>My Account </Typography>

        <Button onClick={handleSignOut}variant="outlined"sx={{marginTop:'15px',display: 'flex',alignItems: 'center',justifyContent: 'center',width: '353px',height: '34px',backgroundColor: '#232323',color: '#FFFFFF',border: '1px solid #000000',fontWeight:'700'}}>
          LOG OUT
        </Button>
     </Grid>
    )
  );
};


export default UserExists;
