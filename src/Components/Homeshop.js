import React from 'react';
import controls from './Import'
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
    <controls.Grid container sx={{backgroundColor:'#FFFFFF'}}>
      <controls.Grid container justifyContent={'center'}>
        <controls.Typography sx={{ color: '#6A4EA4', fontSize: { xs: '18px', sm: '25px', md: '28px', lg: '30px' }, fontWeight: { xs: 700 }, letterSpacing: '0.1em', marginTop: { xs: '20px', }, }}>SHOP FROM 40+ BRANDS </controls.Typography>
      </controls.Grid>
      <controls.Grid container justifyContent="center">
        <controls.Grid item width="95%">
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
                <controls.Grid container sx={{ display: { xs: 'block', lg: 'none' } }}>
                  <controls.Grid item xs={12} sx={{ padding: { xs: '10px', sm: '28px' } }}>
                    <img height="auto" width="100%" src={item.imgurl} alt="Slide" />
                  </controls.Grid>
                </controls.Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </controls.Grid>
      </controls.Grid>
      <controls.Grid container justifyContent={'center'} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <controls.Grid container item width="95%" justifyContent={'center'}>
          {images.map((item) => (
            <controls.Grid item lg={2} sx={{ marginLeft: { lg: '0px' }, padding: { lg: '50px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img height="auto" width="100%" src={item.imgurl} alt={item.imgname} />
            </controls.Grid>
          ))}
        </controls.Grid>
      </controls.Grid>
    </controls.Grid>
  )
}

export default Homeshop;
