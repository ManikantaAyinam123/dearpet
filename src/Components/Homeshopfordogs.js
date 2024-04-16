import React from 'react'
import { Grid, Typography } from '@mui/material';
import Imagewithzoom from './ImageWithZoom';


const Homeshopfordogs = () => {
  const images = [
    {

      imgPath:
        'https://dearpet.in/cdn/shop/files/Frame_1_14_370x_crop_center.png?v=1709634703',
      name:
        'Food',

    },
    {

      imgPath:
        'https://dearpet.in/cdn/shop/files/SRI08736-copy_1_370x_crop_center.png?v=1617716949',
      name:
        'Leash & Harness',
    },
    {

      imgPath:
        'https://dearpet.in/cdn/shop/files/Frame_162_1_370x_crop_center.png?v=1703830846',
      name:
        'Gromming',
    },
    {

      imgPath:
        'https://dearpet.in/cdn/shop/files/1K1A2117-copy_1_cbae514f-d493-4183-8b01-98d4e5ec560d_370x_crop_center.png?v=1617716939',
      name:
        'Bedding',
    },
    {

      imgPath:
        'https://dearpet.in/cdn/shop/files/LIFESTYLE_1_370x_crop_center.png?v=1617716360',
      name:
        'Clothing & Accesories',
    },
    {

      imgPath:
        'https://dearpet.in/cdn/shop/files/toy_1_53df26be-88ed-47f0-ac5e-ce1afdac0ad2_370x_crop_center.png?v=1617716328',
      name:
        'Toys',
    },

  ];

  return (
    <Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF' }}>

      <Grid container item sx={{ width: "90%" }} spacing={2}>
        <Grid item xs={12} > <Typography sx={{ color: "#585858", textAlign: 'center', fontWeight: 700, fontSize: { xs: '18px', sm: '20px', md: '30px' }, mt: 3 }}>SHOP FOR DOGS</Typography></Grid>

        {images.map((item) => (
          <Grid item xs={6} sm={6} md={4} >

            <Imagewithzoom src={item.imgPath} alt={item.name} />
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' }, fontWeight: 400, marginTop: { xs: 0.5, sm: 1, md: 1.5 } }}>{item.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Homeshopfordogs
