import { Opacity } from '@mui/icons-material';
import { Grid, Typography, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import ReactImageMagnify from 'react-image-magnify';

const DetailsMagnifier = () => {
  const magnifierData = JSON.parse(localStorage.getItem('magnifierData'));
  const [magnifierImage, setMagnifierImage] = useState(magnifierData.imgurl);
  const [activeIndex, setActiveIndex] = useState(null);


  const handleSetImage = (val) => {
    console.log("clicked", val);
    if (val === '') {
      setMagnifierImage(magnifierData.imgurl);
      setActiveIndex(null);
      console.log(activeIndex)


    } else {
      setMagnifierImage(magnifierData.innerImages[0].allImages[val].imgurl);
      setActiveIndex(val);
      console.log(activeIndex);

    }
  }

  return (
    <Grid container sx={{ justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
      <Grid item container width={'80%'}>
        <Grid item xs={12} md={6} sx={{ border: '1px solid black' }}>
          {console.log("maginifier page", magnifierData.imgurl)}
          {/* <img height='auto' width={'100%'} src={magnifierImage}></img> */}
          <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: magnifierImage
    },
    largeImage: {
        src: magnifierImage,
        width: 1200,
        height: 1800
    }
}} />
          <Grid sx={{ display: 'flex', border: '1px solid yellow' }}>
            
            <img onClick={() => { handleSetImage('') }} height='100px' width={'100px'} src={magnifierData.imgurl}
              style={{ opacity: activeIndex === null ? 0.5 : 1 }}
            ></img>
            {magnifierData.innerImages[0].allImages.map((image, index) => (
              <img key={index} onClick={() => { handleSetImage(index) }} height='100px' width={'100px'}
                src={image.imgurl}
                style={{ opacity: activeIndex === index ? 0.5 : 1 }}
              ></img>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ border: '1px solid red',padding:'10px 25px' }}>
          <Typography sx={{ fontSize: '22px', color: '#000000', fontWeight: '700' }}>Dear Pet Brocade Bow in Maroon for Dogs</Typography>
          <Box sx={{ display: { sm: 'flex' }, marginTop: '8px' }}>


            <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554', marginTop: { xs: '3px', sm: '0px' } }} />
            <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
            <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
            <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
            <Icon icon="clarity:half-star-solid" width="18" height="18" style={{ color: '#FFD554' }} />
            <Typography sx={{ marginLeft: '5px', fontSize: '14px' }}>6 reviews</Typography>
          </Box>
          <Box sx={{ display: 'flex', marginTop: '8px' }}>
            <Typography sx={{ fontSize: { xs: '13px', sm: '21px' }, fontWeight: '700', color: '#6A48A8' }}>Rs450.00</Typography>
            <Typography sx={{ fontSize: { xs: '13px', sm: '21px' }, marginLeft: { xs: '0px', sm: '10px' }, marginRight: { sm: '80px', md: '40px' }, fontWeight: '700', color: '#969696' }}>Rs<strike>799.00</strike></Typography>
          </Box>
          <Typography sx={{ fontSize: '18px', color: '#070112', marginTop: '10px', letterSpacing: '0.5px', fontWeight: '500' }}>Size</Typography>
          <Box sx={{display:'flex'}}>
          <Typography sx={{ padding: '2px' }}>
            <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>S</span>
          </Typography>
          <Typography sx={{ padding: '2px' }}>
            <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>M</span>
          </Typography>
          <Typography sx={{ padding: '2px' }}>
            <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>L</span>
          </Typography>
          <Typography sx={{ padding: '2px' }}>
            <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>XL</span>
          </Typography>
          <Typography sx={{ padding: '2px' }}>
            <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>XXL</span>
          </Typography>
          </Box>
          
          
          <Button sx={{ border: '1px solid black',marginTop:'25px', width: { xs: '100%', sm: '90%'}, padding: '8px', color: '#FFFFFF', backgroundColor: '#676172', '&:hover': { color: 'black' }, textTransform: 'none', marginLeft: { xs: '0px', sm: '0px', md: '10px' } }}>Add To Bag</Button>
          <Button sx={{ marginTop:'20px', width: { xs: '100%', sm: '90%'}, padding: '8px', color: '#6A4EA4', backgroundColor: '#D0C9DD', '&:hover': { color: 'black' }, textTransform: 'none', marginLeft: { xs: '0px', sm: '0px', md: '10px' } }}>Add To Bag</Button>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default DetailsMagnifier;
