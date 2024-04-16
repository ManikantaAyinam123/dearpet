import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Homeshop = () => {
  const images = [
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/logo_orijen_2c994c0b-4e9c-4202-89e8-850577be8a49_300x_crop_center.png?v=1620019006',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/logo_kong_b28b90ea-a368-496b-a81d-1895212f7161_300x_crop_center.png?v=1620019006',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/logo_ruffwear_300x_crop_center.png?v=1620018262',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/logo_tropiclean_b6df3ece-9f71-4a26-8281-977f505ddfa3_300x_crop_center.jpg?v=1620019006',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/logo_jer-high_38e254db-68d9-45cc-8267-59de056bef61_300x_crop_center.jpg?v=1620019006',
    },
  ];

  return (
    <Grid container sx={{backgroundColor:'#FFFFFF'}}>
      <Grid container justifyContent={'center'}>
        <Typography sx={{ color: '#6A4EA4', fontSize: { xs: '18px', sm: '25px', md: '28px', lg: '30px' }, fontWeight: { xs: 700 }, letterSpacing: '0.1em', marginTop: { xs: '20px', }, }}>SHOP FROM 40+ BRANDS </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item width="95%">
          <Swiper
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 3 },
              576: { slidesPerView: 3.5 },
              768: { slidesPerView: 3.8 },
              1024: { slidesPerView: 4.3 },
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <Grid container sx={{ display: { xs: 'block', lg: 'none' } }}>
                  <Grid item xs={12} sx={{ padding: { xs: '10px', sm: '28px' } }}>
                    <img height="auto" width="100%" src={item.imgurl} alt="Slide" />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Grid container item width="95%" justifyContent={'center'}>
          {images.map((item) => (
            <Grid item lg={2} sx={{ marginLeft: { lg: '0px' }, padding: { lg: '50px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img height="auto" width="100%" src={item.imgurl} alt={item.imgname} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Homeshop;
