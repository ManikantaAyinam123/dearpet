import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import controls from './Import'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Homecollections() {
  const images = [
    {
      imgurl: "https://dearpet.in/cdn/shop/files/unicorn-collection_3da5430b-d38c-458b-9637-9246c27898e7.jpg?v=1618311113",
      sidecontent: "DEAR PET COLLECTIONS",
      color: '#6534Ac',
      sidecontent2: "MAJESTIC UNICORN",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/busy-bee_9031c4d2-8a8e-4310-9311-848b227c3833.jpg?v=1618311113",
      sidecontent: "DEAR PET COLLECTIONS",
      color: '#6534Ac',
      sidecontent2: "BUSY BEE",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/dancing-pearls_80626762-ef28-4050-a8c0-67b42e0304b9.jpg?v=1618311113",
      sidecontent: "DEAR PET COLLECTIONS",
      color: '#6534Ac',
      sidecontent2: "DANCING PEARLS",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/floral-collection_1293f48d-d2a9-463d-a0cd-d1b38663b84b.jpg?v=1618311113",
      sidecontent: "DEAR PET COLLECTIONS",
      color: '#FFE27C',
      sidecontent2: "FLORAL",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/paw-n-bones_28ed9938-46b8-4a1a-a1f2-0ab82d6638d6.jpg?v=1618311113",
      sidecontent: "DEAR PET COLLECTIONS",
      color: '#6534Ac',
      sidecontent2: "WOOF",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/something-fishy_982af770-175c-4477-99fa-836eb7625125.jpg?v=1618311113",
      sidecontent: "DEAR PET COLLECTIONS",
      color: '#FFE27C',
      sidecontent2: "SOMETHING FISHY",
    },
  ];

  return (



    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide >
            <controls.Grid container justifyContent={'center'} sx={{backgroundColor:'#FFFFFF'}}>
              <controls.Grid item container sx={{ display: 'flex', width: { xs: '90%', sm: '95%', md: '100%' }, justifyContent: 'center', marginTop: '20px' }} >
                <controls.Grid item xs={12} sm={4} md={5} sx={{ backgroundColor: item.color, textAlign: { xs: 'center', sm: 'center', md: 'start' }, alignContent: 'center', justifyContent: 'center', padding: { xs: '10px', sm: '45px', md: '0' }, position: { sm: 'absolute', md: 'static' }, zIndex: 1, top: '30%', right: '490px' }}>
                  <controls.Typography sx={{ fontSize: { xs: '15px', sm: '11px', md: '20px', lg: '35px' }, marginBottom: { md: '5px' }, color: '#FFFFFF', fontWeight: { sm: 'bold' } }}>{item.sidecontent}</controls.Typography>
                  <controls.Divider sx={{ backgroundColor: '#FFFFFF', height: { xs: '1px' }, display: { xs: 'none', sm: 'none', md: 'block' } }} />

                  <controls.Typography sx={{ fontSize: { xs: '13px', sm: '16px', lg: '20px' }, marginBottom: '0.5px', marginTop: { xs: '4px', sm: '10px' }, color: '#FFFFFF', textDecoration: { xs: 'underline', sm: 'none' } }}>{item.sidecontent2}</controls.Typography>

                </controls.Grid>
                <controls.Grid item xs={12} sm={12} md={7} sx={{ marginBottom: { xs: '0px' } }}>
                  <img height="auto" width="100%" src={item.imgurl} />
                </controls.Grid>
              </controls.Grid>
            </controls.Grid>

          </SwiperSlide>
        ))}
      </Swiper>
    </>




  );
}
