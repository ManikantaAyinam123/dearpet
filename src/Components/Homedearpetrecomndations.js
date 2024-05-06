import React from 'react';
import Imagewithzoom from './ImageWithZoom';
import controls from './Import'

const Homedearpetrecomndations = () => {
  return (
    <controls.Grid container sx={{ backgroundColor: '#FFFFFF' }}>

      <controls.Grid container justifyContent={'center'} >
        <controls.Grid>
          <controls.Typography sx={{ color: '#6A4EA4', fontSize: { xs: '20px', sm: "25px", md: '28px', lg: '30px' }, fontWeight: { xs: 750 }, marginTop: { xs: '15px', sm: '35px' }, marginBottom: { xs: '13px', sm: '20px' } }}>Dear Pet Recomondations</controls.Typography>
        </controls.Grid>
        <controls.Grid container item width={'90%'} spacing={2}>
          <controls.Grid item xs={12} sm={6} >
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/1_7a7f3023-333a-4830-853e-4ccbf4bd7156_1024x1024_crop_center.jpg?v=1622546165" alt="not found" />

            <controls.Typography sx={{ marginTop: '5px', fontSize: { xs: '15px', sm: '17px', md: '20px' } }}>Dear Pet Chick'n Bikis</controls.Typography>
          </controls.Grid>
          <controls.Grid container item xs={12} sm={6} display={'flex'} spacing={2} >
            <controls.Grid item xs={6} sm={6} >
              <Imagewithzoom src="https://dearpet.in/cdn/shop/files/2_1024x1024_crop_center.jpg?v=1622546165" alt="not found" />

              <controls.Typography sx={{ marginTop: '5px', fontSize: { xs: '15px', sm: '17px', md: '20px' } }}>Customisation</controls.Typography>
            </controls.Grid>
            <controls.Grid item xs={6} sm={6}>
              <Imagewithzoom src="https://dearpet.in/cdn/shop/files/3_efaec787-49e1-4801-a550-c9c95249058b_1024x1024_crop_center.jpg?v=1622546165" alt="not found" />

              <controls.Typography sx={{ marginTop: '5px', fontSize: { xs: '15px', sm: '17px', md: '20px' } }}>Bedding</controls.Typography>
            </controls.Grid>
          </controls.Grid>

        </controls.Grid>

      </controls.Grid>
      <controls.Grid container justifyContent={'center'} sx={{ marginTop: { xs: '10px', sm: '15px', md: '20px' } }}>

        <controls.Grid container item width={'90%'} spacing={2}>

          <controls.Grid container item xs={12} sm={6} display={'flex'} spacing={2} >
            <controls.Grid item xs={6} sm={6} >
              <Imagewithzoom src="https://dearpet.in/cdn/shop/files/4_b85b6d0e-60f4-4fec-abd1-30017987081d_1024x1024_crop_center.jpg?v=1622546165" alt="not found" />

              <controls.Typography sx={{ marginTop: '5px', fontSize: { xs: '15px', sm: '17px', md: '20px' } }}>Dog Shampoo</controls.Typography>
            </controls.Grid>
            <controls.Grid item xs={6} sm={6}>
              <Imagewithzoom src="https://dearpet.in/cdn/shop/files/5_5bac69ca-e50c-46ff-bd61-fca1767f90e4_1024x1024_crop_center.jpg?v=1622546165" alt="not found" />

              <controls.Typography sx={{ marginTop: '5px', fontSize: { xs: '15px', sm: '17px', md: '20px' } }}>Cat Shampoo</controls.Typography>
            </controls.Grid>
          </controls.Grid>
          <controls.Grid item xs={12} sm={6} >
            <Imagewithzoom src="https://dearpet.in/cdn/shop/files/6_c92e03b5-9382-4e3f-b14c-376639ca98de_1024x1024_crop_center.jpg?v=1622546165" alt="not found" />

            <controls.Typography sx={{ marginTop: '5px', fontSize: { xs: '15px', sm: '17px', md: '20px' } }}>Dear Pet Treats</controls.Typography>
          </controls.Grid>

        </controls.Grid>

      </controls.Grid>
    </controls.Grid>
  )
}

export default Homedearpetrecomndations
