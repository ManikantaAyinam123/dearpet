import React from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import controls from './Import'


const Homecustomerfavouries = () => {
  const images = [
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/kong-toys_300x_crop_center.png?v=1619612782',
      imgname:'Kong Toys',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/dog-accessories_300x_crop_center.png?v=1619612782',
      imgname:'Dog Accessories',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/cat-accessories_300x_crop_center.png?v=1619612782',
      imgname:'Cat Accessories',
    },
    {
      imgurl: 'https://dearpet.in/cdn/shop/files/litter_300x_crop_center.png?v=1619612782',
      imgname:'Petkins',
    },
  ];
  return (
    <controls.Grid container sx={{backgroundColor:'#FFFFFF'}}>
     <controls.Grid container justifyContent={'center'}>
    <controls.Typography sx={{color:'#6A4EA4',fontSize:{xs:'20px',sm:"25px",md:'28px',lg:'30px'},fontWeight:{xs:700},letterSpacing:'0.1em',marginTop:{xs:'15px',sm:'35px'},marginBottom:{xs:'13px',sm:'20px'}}}>Customer Favourites</controls.Typography>
    </controls.Grid>
     <controls.Grid container  justifyContent="center">
      <controls.Grid item width="95%">
        <Swiper
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2.3,
            },
            576:{
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.3,
            },
          }}
        >
         
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <controls.Box sx={{display:{xs:'block',md:'none'}}}>
                <controls.Grid  item  backgroundColor={'#F5ECFF'}sx={{marginLeft:{xs:'18px',sm:'25px'},}}>
                  <img  height="auto" width="100%" src={item.imgurl} alt="Slide" />
                  
                  
                </controls.Grid>
                <controls.Typography sx={{marginTop:'5px',marginLeft:{xs:'17px',sm:'24px'},fontSize:{xs:'15px',sm:'17px'}}}>{item.imgname}</controls.Typography>
                </controls.Box>
              </SwiperSlide>
              
            ))}
          
            
        
        </Swiper>
      </controls.Grid>
    </controls.Grid>
    <controls.Grid container justifyContent={'center'}>
  <controls.Grid container item width="95%" justifyContent={'center'} spacing={2}>
    {images.map((item, index) => (
      <controls.Grid item key={index} md={2.7} sx={{marginLeft: { md: '24px' },display:{xs:'none',md:'block'}}}>
        <controls.Grid style={{ backgroundColor: '#F5ECFF' }}>
          <img height="auto" width="100%" src={item.imgurl} alt={item.imgname} />
        
        </controls.Grid>
        <controls.Typography sx={{marginTop:'5px',fontSize:{md:'19px'}}}>{item.imgname}</controls.Typography>
      </controls.Grid>
    ))}
  </controls.Grid>
</controls.Grid>



   
    </controls.Grid>
  )
}

export default Homecustomerfavouries
