import { Typography, Grid, Button, Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInMobile = () => {
    const [signindata, setSigninData] = useState({ email: '', password: '' });
  
    let navigate = useNavigate();
    const handleInputChange = (e) => {
        setSigninData({ ...signindata, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {


        console.log(signindata);


        try {
            const userCredential = await signInWithEmailAndPassword(auth, signindata.email, signindata.password)
            console.log("User login sucesssfully:", userCredential.user);

            const token = await userCredential.user.getIdToken();

            localStorage.setItem('accessToken', token);
            console.log(localStorage.getItem('accessToken'))
            toast.success('Signed In Sucessfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            navigate('/');

        }
        catch (error) {
            console.log("Error", error.message);
            console.log("Error", error.code);
            
        }


    }
    return (
        <>
       
              <Grid container sx={{ justifyContent: 'center' }}>

              <Grid item sx={{ width: '85%', justifyContent: 'center', border: '', marginTop: { xs: '15px', md: '20px' } }}>
                  <Typography sx={{ marginBottom: { xs: '10px' }, fontSize: { xs: '10px', sm: '12px' }, fontWeight: '200' }}>
                      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link> {'>'} CreateAccount
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '20px' }, fontWeight: '550', letterSpacing: '0.5px' }}>Account</Typography>
                  <Typography sx={{ textAlign: 'center', padding: '15px', marginTop: { xs: '15px' }, fontSize: { xs: '18px' }, fontWeight: { xs: '700' }, letterSpacing: '0.5px', backgroundColor: '#FAFAFA', borderBottom: '1px solid #e0e0e0', borderTop: '1px solid #e0e0e0' }}>RETURNING CUSTOMER</Typography>
                  <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { xs: '10px', md: '10px' } }}> Email Address<Box component="span" sx={{ color: '#F1152F' }}>*</Box></Typography>
                  <TextField InputProps={{ sx: { width: { xs: '30ch' }, height: '38px', borderRadius: 0 } }} placeholder='Email Adress' name="email" type="email" onChange={handleInputChange} />
  
  
                  <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { xs: '10px', md: '10px' } }}>Password <Box component="span" sx={{ color: '#F1152F' }}>*</Box></Typography>
                  <TextField InputProps={{ sx: { width: { xs: '30ch' }, height: '38px', borderRadius: 0 } }} placeholder='Password' name="password" type="password" onChange={handleInputChange} />
  
                  <Grid >
                      <Button onClick={handleLogin} variant="outlined" sx={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%', height: '34px', backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #000000', fontWeight: 550, marginTop: '20px'
                      }}>
                          LOGIN
                      </Button>
  
                  </Grid>
                  <Typography sx={{fontSize:'13px',marginTop:{xs:'10px'}}}>Forget password? or return to store</Typography>
                  <Typography sx={{ textAlign: 'center', padding: '15px', marginTop: { xs: '15px' }, fontSize: { xs: '18px' }, fontWeight: { xs: '700' }, letterSpacing: '0.5px', backgroundColor: '#FAFAFA', borderBottom: '1px solid #e0e0e0', borderTop: '1px solid #e0e0e0' }}>NEW CUSTOMER</Typography>
                  <Typography sx={{fontSize:{xs:'13px'},marginTop:{xs:'15px'}}}>Register with us for a faster checkout,to track the status of your order and more.</Typography>
                  <Grid container sx={{justifyContent:'center'}}><Button onClick={() => navigate('/CreateAccountPage')}variant="outlined"
                       sx={{display: 'flex',alignItems: 'center',borderRadius:'0px',justifyContent: 'center',width: '200px',height: '34px',backgroundColor: '#232323',color: '#FFFFFF',marginTop:'20px',marginBottom:'20px'}}>
                                  CREATE AN Account
                  </Button>
                  </Grid>
  
              </Grid>
          </Grid>
    
      
        <ToastContainer />
        </>
    )
}

export default SignInMobile
