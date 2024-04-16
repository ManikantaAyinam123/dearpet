import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { TextField, InputAdornment } from '@mui/material';
import { Icon } from "@iconify/react";

const Homenewsletter = () => {
    return (
        <>
            <Grid container justifyContent="center">
                <Grid container justifyContent="center" alignItems="center" item sx={{ display: 'flex', flexDirection: 'column', height: '320px' }}>
                    <Grid item >
                        <Typography sx={{ color: '#FFFFFF', fontSize: { xs: '15px',sm:'18px', md: '20px' }, fontWeight: { sm: '700' }, letterSpacing: '0.1em', textAlign: 'center' }}>NEWSLETTER SIGN UP</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontSize: { xs: '10px',sm:'13px', md: '12px' }, marginTop: { xs: '15px', sm: '20px', md: '20px' }, marginBottom: { xs: '15px', sm: '20px', md: '20px' } }}>Receive our latest updates about our products and promotions.</Typography>
                    </Grid>
                    <Grid container justifyContent="center" item sx={{ display: 'flex' }}>
                        <Grid item xs={12} sm={7} md={6} lg={3} sx={{ marginBottom: { xs: '20px', md: '0' }, display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Icon icon="ic:outline-email" style={{ color: 'black' }} />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        width: { xs: '100%', sm: '350px', md: '380px' },
                                        marginLeft: {  sm: '150px', md: '250px', lg: '450px' }, 
                                        borderRadius: '30px',
                                        height: '50px',
                                        backgroundColor: '#FFFFFF',
                                    },
                                }}
                                placeholder="Enter your email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={5} md={6} lg={9} sx={{ display: 'flex', justifyContent: 'center', marginBottom: { xs: '20px', md: '0' } }}>
                            <Button variant="contained" sx={{ height: {xs:'50px' }, backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '5px 45px' }}>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Homenewsletter;
