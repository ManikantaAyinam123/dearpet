import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Homecarousel1() {
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
        <SwiperSlide><img height="auto"width="100%"src="https://dearpet.in/cdn/shop/files/Desktop_website_Food_2.png?v=1712405263">
        </img></SwiperSlide>
        <SwiperSlide><img height="auto"width="100%"src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_7.png?v=1709379440">
        </img></SwiperSlide>
        <SwiperSlide><img height="auto"width="100%" src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_END_OF_SALE.png?v=1705562724">
        </img></SwiperSlide>
        <SwiperSlide><img height="auto"width="100%"src="https://dearpet.in/cdn/shop/files/Desktop_Website_Banner_Shampoo.png?v=1698487563">
        </img></SwiperSlide>
        <SwiperSlide><img height="auto"width="100%" src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_ear_muffs.png?v=1698489161">
        </img></SwiperSlide>
        <SwiperSlide><img  height="auto"width="100%"src="https://dearpet.in/cdn/shop/files/Website_Banner_Desktop.png?v=1699439468">
        </img></SwiperSlide>
        <SwiperSlide><img height="auto"width="100%" src="https://dearpet.in/cdn/shop/files/4.gif?v=1629206953">
        </img></SwiperSlide>
       
       
      </Swiper>
    </>
  );
}
