import React from 'react';
import controls from './Import'

const Homenewsletter = () => {
    return (
        <>
            <controls.Grid container justifyContent="center">
                <controls.Grid container justifyContent="center" alignItems="center" item sx={{ display: 'flex', flexDirection: 'column', height: '320px' }}>
                    <controls.Grid item >
                        <controls.Typography sx={{ color: '#FFFFFF', fontSize: { xs: '15px',sm:'18px', md: '20px' }, fontWeight: { sm: '700' }, letterSpacing: '0.1em', textAlign: 'center' }}>NEWSLETTER SIGN UP</controls.Typography>
                        <controls.Typography sx={{ color: '#FFFFFF', fontSize: { xs: '10px',sm:'13px', md: '12px' }, marginTop: { xs: '15px', sm: '20px', md: '20px' }, marginBottom: { xs: '15px', sm: '20px', md: '20px' } }}>Receive our latest updates about our products and promotions.</controls.Typography>
                    </controls.Grid>
                    <controls.Grid container justifyContent="center" item sx={{ display: 'flex' }}>
                        <controls.Grid item xs={12} sm={7} md={6} lg={3} sx={{ marginBottom: { xs: '20px', md: '0' }, display: 'flex', justifyContent: 'center' }}>
                            <controls.TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <controls.InputAdornment position="start">
                                            <controls.Icon icon="ic:outline-email" style={{ color: 'black' }} />
                                        </controls.InputAdornment>
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
                        </controls.Grid>
                        <controls.Grid item xs={12} sm={5} md={6} lg={9} sx={{ display: 'flex', justifyContent: 'center', marginBottom: { xs: '20px', md: '0' } }}>
                            <controls.Button variant="contained" sx={{ height: {xs:'50px' }, backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '5px 45px' }}>Submit</controls.Button>
                        </controls.Grid>
                    </controls.Grid>
                </controls.Grid>
            </controls.Grid>
        </>
    )
}

export default Homenewsletter;
