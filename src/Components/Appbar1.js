import { AppBar, Grid, Typography } from '@mui/material'
import React from 'react'
import { Icon } from "@iconify/react";

const Appbar1 = () => {
    return (
        <AppBar sx={{ backgroundColor: "#6434a4", padding: '8px 70px 8px 5px' }}>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Grid container spacing={0.3}>
                        <Grid item><Icon icon="ic:baseline-whatsapp" fontSize={'16px'} /></Grid>
                        <Grid item><Icon icon="ic:round-phone" fontSize={'14px'} /></Grid>
                        <Grid item><Typography sx={{ fontSize: '12px', fontFamily: 'sans-serif', marginTop: '3px' }}>+919111888111</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md="auto" sx={{ textAlign: 'center', m: 'auto', paddingTop: { xs: '0px', md: '0px' } }}>
                    <Typography sx={{ marginLeft: '30px', letterSpacing: '0.1em', fontSize: '9px', fontFamily: 'sans-serif', lineHeight: "140%" }}>GET UPTO 10% OFF MINIMUM CART VALUE RS799 ONLY!</Typography>
                </Grid>
            </Grid>
        </AppBar>


    )
}

export default Appbar1
