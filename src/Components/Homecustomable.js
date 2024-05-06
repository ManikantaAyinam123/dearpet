import React from 'react';
import Imagewithzoom from './ImageWithZoom';
import controls from './Import'

const Homecustomable = () => {
    const images = [
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/cat-accessories_1_370x_crop_center.png?v=1617775633',
            name: 'Acessories'
        },
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/cat-food-category_1_370x_crop_center.png?v=1617775633',
            name: 'Treats'
        },
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/black-cat-cropped_370x_crop_center.jpg?v=1621417767',
            name: 'Toys & Furniture'
        },
    ];

    return (
        <controls.Grid container sx={{ backgroundColor: '#FFFFFF' }}>
            <controls.Grid container sx={{ display: 'flex', alignItems: 'center', backgroundColor: { xs: '#6534AC', sm: '#FFFFFF' }, height: { xs: '50px' }, marginTop: { xs: 3, sm: 4, lg: 5 }, marginBottom: { xs: 3, sm: 4, lg: 5 } }}>
                <controls.Divider sx={{ flexGrow: 1, height: 1.1, backgroundColor: { xs: '#FFFFFF', sm: 'black' }, marginRight: { xs: 3, sm: 5 } }} />
                <controls.Typography sx={{ fontSize: { xs: '1.3rem', sm: '2rem', lg: '3rem' }, color: { xs: '#FFFFFF', sm: '#6534AC' }, fontWeight: { xs: 550, sm: 600, lg: '700' }, fontFamily: 'Fredoka One', letterSpacing: '2px' }}>CUSTOMISABLE</controls.Typography>
                <controls.Divider sx={{ flexGrow: 1, height: 1.1, backgroundColor: { xs: '#FFFFFF', sm: 'black' }, marginLeft: { xs: 3, sm: 5 } }} />
            </controls.Grid>
            <controls.Grid container sx={{ justifyContent: 'center' }}>
                <controls.Grid container item sx={{ width: '90%' }} spacing={2}>
                    {images.map((item, index) => (
                        <controls.Grid item key={index} xs={index === 2 ? 12 : 6} sm={4}>
                            <controls.Typography sx={{ display: { xs: 'block', sm: 'none' }, textAlign: 'center', backgroundColor: "#6534AC" }} >{item.name}</controls.Typography>
                            <Imagewithzoom src={item.imageurl} alt={'not found'} />
                        </controls.Grid>
                    ))}
                </controls.Grid>
            </controls.Grid>
        </controls.Grid>
    );
};

export default Homecustomable;
