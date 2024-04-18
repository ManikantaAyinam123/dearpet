import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider, TextField, Button, Box } from '@mui/material';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {
  const [formdata, setFormdata] = useState({ name: '', lastname: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', lastname: '', email: '', password: '', dataExist: '' });
  const navigate = useNavigate();

 

  const handleInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmission = async () => {
    let formIsValid = true;
    const newErrors = { name: '', lastname: '', email: '', password: '', dataExist: '' };

    if (!formdata.name.trim()) {
      newErrors.name = 'First name is required';
      formIsValid = false;

    } else if (!isNaN(formdata.name)) {
      newErrors.name = 'First name should not contain numbers';
      formIsValid = false;
    }

    if (!formdata.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
      formIsValid = false;
    } else if (!isNaN(formdata.lastname)) {
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
    } else if (formdata.password.length < 6) {
      newErrors.password = 'Password should contain at least 6 characters';
      formIsValid = false;
    }

    if (!formIsValid) {
      toast.error('please fill all details', {
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
      setErrors(newErrors);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password);
      console.log("User created successfully:", userCredential.user);
      updateProfile(userCredential.user, { displayName: formdata.name + " " + formdata.lastname })

      const token = await userCredential.user.getIdToken();

      localStorage.setItem('accessToken', token);

      
      navigate('/');
      toast.success('Signed Up Sucessfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

      
    } catch (error) {
      console.error("Error creating user:", error);
      newErrors.dataExist = 'User already exists';
      setErrors(newErrors);
    }
  };

  return (
    <>
    <Grid container sx={{ justifyContent: 'center' }}>

      <Grid item sx={{ width: '85%', justifyContent: 'center', marginTop: { xs: '20px', md: '20px' }, marginBottom: { xs: '10px' } }}>
        <Typography sx={{ marginBottom: { xs: '10px' }, fontSize: { xs: '10px', sm: '12px' }, fontWeight: '200' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link> {'>'} CreateAccount
        </Typography>
        <Typography sx={{ fontSize: { xs: '15px', md: '23px' }, fontWeight: { xs: '700', md: '700' } }}>CREATE AN ACCOUNT</Typography>
        <Divider sx={{ marginTop: { xs: '20px', md: '20px' } }} />
        <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { xs: '15px' } }}>Sign up for a free account at Dearpet.</Typography>
        <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>First Name</Typography>
        <TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="name" type="text" value={formdata.name} onChange={handleInputChange} />
        {errors.name && <Typography color="error">{errors.name}</Typography>}
        <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Last Name</Typography>
        <TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="lastname" type="text" value={formdata.lastname} onChange={handleInputChange} />
        {errors.lastname && <Typography color="error">{errors.lastname}</Typography>}
        <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Your Email Address</Typography>
        <TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="email" type="email" value={formdata.email} onChange={handleInputChange} />
        {errors.email && <Typography color="error">{errors.email}</Typography>}
        <Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Password</Typography>
        <TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="password" type="password" value={formdata.password} onChange={handleInputChange} />
        {errors.password && <Typography color="error">{errors.password}</Typography>}
        <Box sx={{ marginTop: { xs: '20px', md: '20px' }, color: 'black' }}>{errors.dataExist && <Typography color="error">{errors.dataExist}</Typography>} <Button onClick={handleSubmission} sx={{ color: 'black', fontWeight: 700, borderColor: 'black' }} variant='outlined'> CREATE AN ACCOUNT</Button></Box>
      </Grid>
    </Grid>
     <ToastContainer />
     </>
  );
};

export default CreateAccount;
