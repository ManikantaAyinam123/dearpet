import React from 'react'
import Imagewithzoom from './ImageWithZoom'
import controls from './Import'

const Homecustomisable2 = () => {
    const images = [
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/nawab-collar1_370x_crop_center.png?v=1618820401',
            name: 'Customised Collar',

        },
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/nawab_harness1_370x_crop_center.png?v=1618820385',
            name: 'Customised Harness',

        },
        {
            imageurl: 'https://dearpet.in/cdn/shop/files/lifestyle-leash1_370x_crop_center.png?v=1618820432',
            name: 'Customised Leash',

        },
    ];

    return (
        <controls.Grid container sx={{ backgroundColor: '#FFFFFF' }}>
            <controls.Grid container sx={{ display: 'flex', alignItems: 'center', backgroundColor: { xs: '#6534AC', sm: '#FFFFFF' }, height: { xs: '50px' }, marginTop: { xs: 3, sm: 4, lg: 5 }, marginBottom: { xs: 3, sm: 4, lg: 5 } }}>
                <controls.Divider sx={{ flexGrow: 1, height: 1.1, backgroundColor: { xs: '#FFFFFF', sm: 'black' }, marginRight: { xs: 3, sm: 5 } }} />
                <controls.Typography sx={{ fontSize: { xs: '1.3rem', sm: '2rem', lg: '3rem' }, color: { xs: '#FFFFFF', sm: '#6534AC' }, fontWeight: { xs: 550, sm: 600, lg: '700' }, fontFamily: 'Fredoka One', letterSpacing: '2px' }}>CUSTOMISABLE</controls.Typography>
                <controls.Divider sx={{ flexGrow: 1, height: 1.1, backgroundColor: { xs: '#FFFFFF', sm: 'black' }, marginLeft: { xs: 3, sm: 5 } }} />
            </controls.Grid>
            <controls.Grid container sx={{ justifyContent: 'center', display: { xs: 'flex', sm: 'none' } }}>
                <controls.Grid container item sx={{ width: '90%' }} spacing={2}>
                    {images.map((item, index) => (
                        <controls.Grid item key={index} xs={index === 2 ? 12 : 6} >
                            <controls.Typography sx={{ display: { xs: 'block', sm: 'none' }, textAlign: 'center', backgroundColor: "#6534AC" }} >{item.name}</controls.Typography>
                            <Imagewithzoom src={item.imageurl} alt={'not found'} />
                        </controls.Grid>
                    ))}
                </controls.Grid>
            </controls.Grid>

            <controls.Grid container sx={{ justifyContent: 'center', display: { xs: 'none', sm: 'flex' }, }}>
                <controls.Grid item sx={{ width: '100%', height: { sm: '180px', md: '250px', lg: '300px' }, backgroundColor: '#6534AC', position: 'absolute' }}>

                </controls.Grid>
                <controls.Grid container item sx={{ position: 'relative', width: '90%', marginTop: { sm: '5px' } }} spacing={7}>
                    {images.map((item, index) => (
                        <controls.Grid item sm={4} key={index}>
                            <controls.Typography sx={{ textAlign: 'center', color: "#FFFFFF", mb: 0.5, fontSize: { sm: '15px', md: '20px', lg: '20px' } }} >{item.name}</controls.Typography>
                            <controls.Grid sx={{ border: '5px solid White' }}>
                                <Imagewithzoom src={item.imageurl} alt={'not found'} />
                            </controls.Grid>
                        </controls.Grid>
                    ))}
                </controls.Grid>

            </controls.Grid>


        </controls.Grid>
    )
}

export default Homecustomisable2
