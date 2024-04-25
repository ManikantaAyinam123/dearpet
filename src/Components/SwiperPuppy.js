import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

export default function SwiperPuppy() {
  const [swiperRef, setSwiperRef] = useState(null);
  const images = [
    'https://dearpet.in/cdn/shop/products/Untitleddesign_ccf08033-1678-4a18-8080-0964bc47bd82.jpg?v=1614155861',
    'https://dearpet.in/cdn/shop/products/Untitleddesign_ccf08033-1678-4a18-8080-0964bc47bd82.jpg?v=1614155861',
    'https://dearpet.in/cdn/shop/products/Untitleddesign_ccf08033-1678-4a18-8080-0964bc47bd82.jpg?v=1614155861',
    // Add more image URLs as needed
  ];

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        className="custom-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img height={'auto'} width={'100%'} src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
