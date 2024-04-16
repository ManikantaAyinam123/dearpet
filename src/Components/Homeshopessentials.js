import React from 'react';
import { Grid, Typography } from '@mui/material';
import Imagewithzoom from './ImageWithZoom';

const Homeshopessentials = () => {
    const images = [
        {
            imageurl: "https://dearpet.in/cdn/shop/files/puppy_phone_view_1024x1024_crop_center.jpg?v=1623695625",
        },
        {
            imageurl: "https://dearpet.in/cdn/shop/files/kitten_phone_view_1024x1024_crop_center.jpg?v=1623695639",
        },
    ];
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
                <Grid container item width="90%" >
                    <Grid item xs={12}>
                        <Typography sx={{ color: '#6A4EA4', letterSpacing: '0.1em', fontSize: { xs: '20px', sm: '25px', lg: '30px', textAlign: 'center' }, fontWeight: { xs: 550, sm: 600, lg: 700 }, marginTop: { xs: '5px' }, marginBottom: { xs: '5px' } }}>
                            Shop For Essentials
                        </Typography>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', }}>
                        {images.map((item, index) => (
                            <Grid item xs={12} sm={5.5} key={index} sx={{ margin: { sm: '0px 10px', md: '0px 15px', lg: '0px 25px' } }} >
                                <Imagewithzoom src={item.imageurl} alt="image not found" />

                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>



        </>

    );
}

export default Homeshopessentials;
