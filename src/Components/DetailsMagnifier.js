import { Opacity, VisibilityOff } from '@mui/icons-material';
import { Grid, Typography, Box, Button, FormControl, InputLabel, FilledInput, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import ReactImageMagnify from 'react-image-magnify';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';





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
            <Swiper
              modules={[Virtual, Navigation, Pagination]}

              // slidesPerView={3.8}
              breakpoints={{

                320: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },

                768: {
                  slidesPerView: 3.8,
                },

                1024: {
                  slidesPerView: 3.8,
                },
              }}
              navigation={true}
              className="custom-swiper"
            >



              {magnifierData.innerImages[0].allImages.map((image, index) => (
                <SwiperSlide >

                  <img key={index} onClick={() => { handleSetImage(index) }} height='100px' width={'100px'}
                    src={image.imgurl}
                    style={{ opacity: activeIndex === index ? 0.5 : 1 }}
                  ></img>
                </SwiperSlide>

              ))}


            </Swiper>

          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ border: '1px solid red', padding: '0px 0px 0px 20px' }}>
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
          <Typography sx={{ fontSize: '15px', color: '#070112', marginTop: '10px', letterSpacing: '0.5px', fontWeight: '500' }}>Size</Typography>
          <Box sx={{ display: 'flex' }}>
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


          <Box component="Select" defaultValue="" sx={{ width: {xs:'90%',sm:'90%', md: '90%' }, marginTop: {xs:'20px',sm:'30px', md: '40px' }, borderRadius: 'none',padding:'8px' }}>
            <option value="" disabled selected hidden>Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Box>
          <Box component="button" sx={{ border: '1px solid black', marginTop: '25px', padding: '8px', width: {xs:'90%',sm:'90%', md: '90%' }, color: '#FFFFFF', backgroundColor: '#676172', '&:hover': { color: 'black' }, textTransform: 'none', borderRadius: '10px' }}>Add To Bag</Box>
          <Box component="button" sx={{ marginTop: '20px',width: {xs:'90%',sm:'90%', md: '90%' }, padding: '8px', color: '#6A4EA4', backgroundColor: '#D0C9DD', '&:hover': { color: 'black', border: '1px solid black' }, textTransform: 'none', borderRadius: '10px' }}>Buy It Now</Box>

          
         
          <Grid container sx={{ display: 'flex', marginLeft: '10px',height:{xs:'60px',md:'100px'},justifyContent:'center',width:'90%' }}>

            <Grid><img height={'100px'} width={'120px'} src="https://i.postimg.cc/T1QhySpL/secure-payment.png"></img></Grid>
            <Grid><img height={'100px'} width={'120px'} src="https://i.postimg.cc/T1QhySpL/secure-payment.png"></img></Grid>
            <Grid><img height={'100px'} width={'130px'} src="https://i.postimg.cc/26Q1Y3Yx/easy_return_&amp;_exchange.png"></img></Grid>


          </Grid>

        </Grid>

      </Grid>
    </Grid>
  )
}

export default DetailsMagnifier;
