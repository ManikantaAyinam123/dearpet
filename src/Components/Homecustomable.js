import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import Imagewithzoom from './Imagewithzoom';

const Homecustomable = () => {
    const images = [
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/cat-accessories_1_370x_crop_center.png?v=1617775633',
            name:'Acessories'
        },
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/cat-food-category_1_370x_crop_center.png?v=1617775633',
            name:'Treats'
        },
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/black-cat-cropped_370x_crop_center.jpg?v=1621417767',
            name:'Toys & Furniture'
        },
    ];

    return (
        <Grid  container sx={{backgroundColor:'#FFFFFF'}}>
            <Grid container sx={{ display: 'flex', alignItems: 'center',backgroundColor:{xs:'#6534AC',sm:'#FFFFFF'},height:{xs:'50px'},marginTop:{xs:3,sm:4,lg:5},marginBottom:{xs:3,sm:4,lg:5} }}>
                <Divider sx={{ flexGrow: 1, height: 1.1, backgroundColor:{xs:'#FFFFFF',sm:'black'} , marginRight:{xs:3,sm:5} }} />
                <Typography sx={{ fontSize: { xs: '1.3rem', sm: '2rem',lg:'3rem' }, color:{xs:'#FFFFFF',sm:'#6534AC'} , fontWeight: { xs:550, sm: 600,lg:'700' }, fontFamily: 'Fredoka One', letterSpacing: '2px' }}>CUSTOMISABLE</Typography>
                <Divider sx={{ flexGrow: 1, height: 1.1, backgroundColor:{xs:'#FFFFFF',sm:'black'}, marginLeft:{xs:3,sm:5} }} />
            </Grid>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid container item sx={{ width: '90%' }} spacing={2}>
                    {images.map((item, index) => (
                        <Grid item key={index} xs={index === 2 ? 12 : 6} sm={4}>
                            <Typography sx={{display:{xs:'block',sm:'none'},textAlign:'center',backgroundColor:"#6534AC"}} >{item.name}</Typography>
                            <Imagewithzoom src={item.imageurl} alt={'not found'} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Homecustomable;
