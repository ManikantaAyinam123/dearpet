import React from 'react';
import Imagewithzoom from './ImageWithZoom';
import controls from './Import'

const Homeshopessentials = () => {
    const images = [
        {
            imageurl: "https://dearpet.in/cdn/shop/files/puppy_phone_view_1024x1024_crop_center.jpg?v=1623695625",
            link: "/PuppyPage",
        },
        {
            imageurl: "https://dearpet.in/cdn/shop/files/kitten_phone_view_1024x1024_crop_center.jpg?v=1623695639",
            link: "/KittenPage", 
        },
    ];

    return (
        <>
            <controls.Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
                <controls.Grid container item width="90%" >
                    <controls.Grid item xs={12}>
                        <controls.Typography sx={{ color: '#6A4EA4', letterSpacing: '0.1em', fontSize: { xs: '20px', sm: '25px', lg: '30px', textAlign: 'center' }, fontWeight: { xs: 550, sm: 600, lg: 700 }, marginTop: { xs: '5px' }, marginBottom: { xs: '5px' } }}>
                            Shop For Essentials
                        </controls.Typography>
                    </controls.Grid>
                    <controls.Grid container sx={{ justifyContent: 'center' }}>
                        {images.map((item, index) => (
                            <controls.Grid item xs={12} sm={5.5} key={index} sx={{ margin: { sm: '0px 10px', md: '0px 15px', lg: '0px 25px' } }}>
                                <controls.Link to={item.link}> 
                                    <Imagewithzoom src={item.imageurl} alt="image not found" />
                                </controls.Link>
                            </controls.Grid>
                        ))}
                    </controls.Grid>
                </controls.Grid>
            </controls.Grid>
        </>
    );
}

export default Homeshopessentials;
