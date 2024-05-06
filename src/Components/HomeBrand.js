import React from 'react'
import controls from './Import'

const HomeBrand = () => {
  return (
    <controls.Grid container justifyContent={'center'} sx={{backgroundColor:'#FFFFFF'}}>
      <controls.Grid>
        <controls.Typography sx={{ color: '#6A4EA4', fontSize: { xs: '20px', sm: "25px", md: '28px', lg: '30px' }, fontWeight: { xs: 750 }, marginTop: { xs: '10px', sm: '15px' }, marginBottom: { xs: '10px', sm: '15px' } }}>Brand Values</controls.Typography>
      </controls.Grid>
      <controls.Grid container item width="90%" justifyContent={'center'}  >
        <controls.Grid item xs={3} sm={4} md={3} lg={2.3} sx={{ padding: { sm: '0px 60px 0px 10px ', md: '0px 70px 0px 10px', lg: '0px 70px 0px 10px' } }}><img src="https://dearpet.in/cdn/shop/files/icon-quality_4d9dffe2-7377-4f4e-9c29-f0467df80aa2_200x.png?v=1618405837" height='auto' width="100%" /></controls.Grid>
        <controls.Grid item xs={3} sm={4} md={3} lg={2.3} sx={{ padding: { sm: '0px 60px 0px 10px ', md: '0px 70px 0px 10px', lg: '0px 70px 0px 10px' } }}><img src="https://dearpet.in/cdn/shop/files/icon-trustworthy_c3bc0da3-5be0-4c05-9078-bdedf9547a41_200x.png?v=1618405837" height='auto' width="100%" /></controls.Grid>
        <controls.Grid item xs={3} sm={4} md={3} lg={2.3} sx={{ padding: { sm: '0px 60px 0px 10px ', md: '0px 70px 0px 10px', lg: '0px 70px 0px 10px' } }}><img src="https://dearpet.in/cdn/shop/files/icon-pet-suppport_02dc56f4-ab84-47e0-83c5-f52ed02084c3_200x.png?v=1618405837" height='auto' width="100%" /></controls.Grid>
        <controls.Grid item xs={3} sm={4} md={3} lg={2.3} sx={{ padding: { sm: '0px 60px 0px 10px ', md: '0px 70px 0px 10px', lg: '0px 70px 0px 10px' } }}><img src="https://dearpet.in/cdn/shop/files/icon-delivery_ce270c75-e77d-4e5f-b068-ddaa97d44565_200x.png?v=1618405837" height='auto' width="100%" /></controls.Grid>
        <controls.Grid item xs={3} sm={4} md={3} lg={2.3} sx={{ padding: { sm: '0px 60px 0px 10px ', md: '0px 70px 0px 10px', lg: '0px 50px 0px 30px' } }}><img src="https://dearpet.in/cdn/shop/files/one-stop_200x.jpg?v=1618748963" height='auto' width="100%" /></controls.Grid>
      </controls.Grid>
    </controls.Grid>


  )
}

export default HomeBrand
