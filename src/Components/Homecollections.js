import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Box, Typography,Divider } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Homecollections() {
  const images = [
    {
      imgurl: "https://dearpet.in/cdn/shop/files/unicorn-collection_3da5430b-d38c-458b-9637-9246c27898e7.jpg?v=1618311113",
      sidecontent:"DEAR PET COLLECTIONS",
      color:'#6534Ac',
      sidecontent2:"MAJESTIC UNICORN",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/busy-bee_9031c4d2-8a8e-4310-9311-848b227c3833.jpg?v=1618311113",
      sidecontent:"DEAR PET COLLECTIONS",
      color:'#6534Ac',
      sidecontent2:"BUSY BEE",
    },
    {
      imgurl: "https://dearpet.in/cdn/shop/files/dancing-pearls_80626762-ef28-4050-a8c0-67b42e0304b9.jpg?v=1618311113",
      sidecontent:"DEAR PET COLLECTIONS",
      color:'#6534Ac',
      sidecontent2:"DANCING PEARLS",
    },
    {
        imgurl: "https://dearpet.in/cdn/shop/files/floral-collection_1293f48d-d2a9-463d-a0cd-d1b38663b84b.jpg?v=1618311113",
        sidecontent:"DEAR PET COLLECTIONS",
        color:'#FFE27C',
        sidecontent2:"FLORAL",
      },
      {
        imgurl: "https://dearpet.in/cdn/shop/files/paw-n-bones_28ed9938-46b8-4a1a-a1f2-0ab82d6638d6.jpg?v=1618311113",
        sidecontent:"DEAR PET COLLECTIONS",
        color:'#6534Ac',
        sidecontent2:"WOOF",
      },
      {
        imgurl: "https://dearpet.in/cdn/shop/files/something-fishy_982af770-175c-4477-99fa-836eb7625125.jpg?v=1618311113",
        sidecontent:"DEAR PET COLLECTIONS",
        color:'#FFE27C',
        sidecontent2:"SOMETHING FISHY",
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
                 <Grid container display={'flex'}>
                <Grid item xs={5} sx={{backgroundColor:item.color,alignContent:'center'} }>
                 <Typography  sx={{fontSize:{xs:'40px'},color:'#FFFFFF',fontWeight:{xs:700},letterSpacing:'0.1em'}}>{item.sidecontent}</Typography>
                 <Divider sx={{  backgroundColor: '#FFFFFF', height: '2px' }} />

                 <Typography  sx={{ fontSize:{xs:'20px'},marginTop:{xs:'5px'},color:'#FFFFFF'}}>{item.sidecontent2}</Typography>
                </Grid>
                <Grid item xs={7}>
                <img height="auto" width="100%" src={item.imgurl}  />
                </Grid>
                </Grid>
                
              </SwiperSlide>
            ))}
          </Swiper>
          </>
         
       
     
   
  );
}
