import React, { useState } from 'react';
import { Grid, Typography, Divider, TextField, Button, Box } from '@mui/material';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formdata, setFormdata] = useState({ name: '', lastname: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', lastname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmission = () => {
   
    let formIsValid = true;
    const newErrors = { name: '', lastname: '', email: '', password: '',dataExist:'' };

    if (!formdata.name.trim()) {
      newErrors.name = 'First name is required';
      formIsValid = false;
    }else if (!isNaN(formdata.name)) {
      newErrors.name = 'First name should not contain numbers';
      formIsValid = false;
    }

    if (!formdata.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
      formIsValid = false;
    }else if (!isNaN(formdata.lastname)) {
      newErrors.lastname = 'First name should not contain numbers';
      formIsValid = false;
    }

    if (!formdata.email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formdata.password.trim()) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }
    else if (formdata.password.length < 6) {
      newErrors.password = 'Password should contain at least 6 characters';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return; 
    }

    createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((userCredential) => {
        console.log("User created successfully:", userCredential);
       
             
        console.log("user-->",userCredential.user)
        const token = userCredential.user.getIdToken();
        console.log("token",token);
        navigate('/');
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        newErrors.dataExist='User already Exists'
        formIsValid = false;
        if (!formIsValid) {
          setErrors(newErrors);
          return; 
        }
    
      });
  };

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item sx={{ width: '85%', justifyContent: 'center', border: '', marginTop: { md: '20px' } }}>
        <Typography sx={{ fontSize: { md: '23px' }, fontWeight: { md: '700' } }}>CREATE AN ACCOUNT</Typography>
        <Divider sx={{ marginTop: { md: '20px' } }} />
        <Typography sx={{ marginTop: { md: '20px' } }}>Sign up for a free account at Dearpet.</Typography>
        <Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>First Name</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} name="name" type="text" value={formdata.name} onChange={handleInputChange} />
        {errors.name && <Typography color="error">{errors.name}</Typography>}
        <Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Last Name</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} name="lastname" type="text" value={formdata.lastname} onChange={handleInputChange} />
        {errors.lastname && <Typography color="error">{errors.lastname}</Typography>}
        <Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Your Email Address</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} name="email" type="email" value={formdata.email} onChange={handleInputChange} />
        {errors.email && <Typography color="error">{errors.email}</Typography>}
        <Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Password</Typography>
        <TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} name="password" type="password" value={formdata.password} onChange={handleInputChange} />
        {errors.password && <Typography color="error">{errors.password}</Typography>}
        <Box sx={{ marginTop: { md: '20px' }, color: 'black' }}>{errors.dataExist && <Typography color="error">{errors.dataExist}</Typography>} <Button onClick={handleSubmission} sx={{ color: 'black', fontWeight: 700 }} variant='outlined'> CREATE AN ACCOUNT</Button></Box>
      </Grid>
    </Grid>
  );
};

export default CreateAccount;
