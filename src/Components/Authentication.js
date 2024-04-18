import { Divider, Grid, Typography, Box, TextField, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Authentication = (props) => {
    const [formClose, setFormClose] = useState(false);
    const [signindata, setSigninData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    // const dbref=ref(db);


    const handleInputChange = (e) => {
        setSigninData({ ...signindata, [e.target.name]: e.target.value });
    };


    const handleLogin = async() => {
        let dataIsValid = true;
        const errormsgs = { email: '', password: '', isUserExist: '' };
        console.log(signindata);
        if (!signindata.email.trim()) {
            errormsgs.email = 'Email is required';
            dataIsValid = false;
        }
        if (!signindata.password.trim()) {
            errormsgs.password = 'Password is required';
            dataIsValid = false;
        }
        if (!dataIsValid) {
            setErrors(errormsgs);
            toast.error('Please Fill All Details', {
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
            return;
        }

       try{
        const userCredential = await signInWithEmailAndPassword(auth, signindata.email, signindata.password)
        console.log("User login sucesssfully:", userCredential.user);

        const token = await userCredential.user.getIdToken();
        
        localStorage.setItem('accessToken', token);
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
        setFormClose(true);
       
       
       }
       catch(error){
        console.log("Error", error.message);
        console.log("Error", error.code);
        toast.error(error.code, {
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
       }
        
         
    }
    useEffect(() => {
        if (formClose) {

            window.location.reload();
        }
    }, [formClose]);


    return (
        <>
            {!formClose &&
                <Grid sx={{ minWidth: 400, padding: '15px 30px 100px 30px', position: 'relative', marginTop: {} }}>
                    <Box sx={{ display: 'flex', position: 'absolute', top: '20px', right: '30px', marginBottom: '50px', fontWeight: 700 }}> <IconButton onClick={() => setFormClose(true)}> <Icon icon="iconoir:cancel" width="18" height="18" /><Typography sx={{ fontSize: '12px', fontWeight: 500, ml: '2px' }}>
                        CLOSE</Typography></IconButton></Box>
                    <Box sx={{ mt: '50px' }}> <Typography sx={{ fontSize: '13px', fontWeight: 700, }}>CUSTOMER LOGIN:</Typography></Box>
                    <Divider sx={{ mt: 2 }} />
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>

                        <Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}> Email Address<Box component="span" sx={{ color: '#F1152F' }}>*</Box></Typography>
                        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} placeholder='Email Adress' name="email" type="email" onChange={handleInputChange} />
                        {errors.email && <Typography color="error">{errors.email}</Typography>}

                        <Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Password <Box component="span" sx={{ color: '#F1152F' }}>*</Box></Typography>
                        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} placeholder='Password' name="password" type="password" onChange={handleInputChange} />
                        {errors.password && <Typography color="error">{errors.password}</Typography>}
                        <Grid >

                            <Button
                                onClick={handleLogin}
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '353px',
                                    height: '34px',
                                    backgroundColor: '#FFFFFF',
                                    color: '#000000',
                                    border: '1px solid #000000',
                                    fontWeight: 550,
                                    marginTop: '20px'
                                }}

                            >
                                LOGIN
                            </Button>
                            {errors.isUserExist && <Typography color="error">{errors.isUserExist}</Typography>}
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}> <Typography>Forgot your password?</Typography></Box>
                        </Grid>
                        <Grid sx={{ mt: 2 }}>
                            <Button onClick={() => navigate('/CreateAccountPage')}
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '353px',
                                    height: '34px',
                                    backgroundColor: '#232323',
                                    color: '#FFFFFF',
                                    border: '1px solid #000000',
                                
                                }}
                            >
                                CREATE AN Account
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            }
            <ToastContainer />
        </>
    )
}

export default Authentication
