import ReactImageMagnify from 'react-image-magnify';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';
import controls from './Import'





const DetailsMagnifier = () => {
  const magnifierData = JSON.parse(localStorage.getItem('magnifierData'));
  const [magnifierImage, setMagnifierImage] = controls.useState(magnifierData.imgurl);
  const [activeIndex, setActiveIndex] = controls.useState(0);



  const handleSetImage = (val) => {
    console.log("clicked", val);
    if (val === '') {
      setMagnifierImage(magnifierData.imgurl);
      setActiveIndex(0);
      console.log(activeIndex)


    } else {
      setMagnifierImage(magnifierData.innerImages[0].allImages[val].imgurl);
      setActiveIndex(val);
      console.log(activeIndex);

    }
  }


  return (
    <controls.Grid container sx={{ justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
      <controls.Grid item container sx={{ width: { xs: '95%', md: '85%' } }}>
        <controls.Grid item xs={12} md={6} sx={{}}>
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
          <controls.Grid sx={{ display: 'flex', }}>
            <Swiper
              modules={[Virtual, Navigation, Pagination]}
              spaceBetween={0}
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 5.5 },
              }}
              navigation={true}
              className="custom-swiper"
            >
              {magnifierData.innerImages[0].allImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    onClick={() => { handleSetImage(index) }}
                    height='100px'
                    width={'100px'}
                    src={image.imgurl}
                    style={{ opacity: activeIndex === index ? 0.5 : 1 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </controls.Grid>
        </controls.Grid>
        <controls.Grid item xs={12} md={6} sx={{ padding: { xs: '5px 0px 5px 15px', sm: '10px 0px 5px 50px' } }}>
          <controls.Typography sx={{ fontSize: '22px', color: '#000000', fontWeight: '700' }}>Dear Pet Brocade Bow in Maroon for Dogs</controls.Typography>
          <controls.Box sx={{ display: { sm: 'flex' }, marginTop: '8px' }}>


            <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554', marginTop: { xs: '3px', sm: '0px' } }} />
            <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
            <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
            <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
            <vIcon icon="clarity:half-star-solid" width="18" height="18" style={{ color: '#FFD554' }} />
            <controls.Typography sx={{ marginLeft: '5px', fontSize: '14px' }}>6 reviews</controls.Typography>
          </controls.Box>
          <controls.Box sx={{ display: 'flex', marginTop: '8px' }}>
            <controls.Typography sx={{ fontSize: { xs: '13px', sm: '21px' }, fontWeight: '700', color: '#6A48A8' }}>Rs450.00</controls.Typography>
            <controls.Typography sx={{ fontSize: { xs: '13px', sm: '21px' }, marginLeft: { xs: '0px', sm: '10px' }, marginRight: { sm: '80px', md: '40px' }, fontWeight: '700', color: '#969696' }}>Rs<strike>799.00</strike></controls.Typography>
          </controls.Box>
          <controls.Typography sx={{ fontSize: '15px', color: '#070112', marginTop: '10px', letterSpacing: '0.5px', fontWeight: '500' }}>Size</controls.Typography>
          <controls.Box sx={{ display: 'flex' }}>
            <controls.Typography sx={{ padding: '2px' }}>
              <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>S</span>
            </controls.Typography>
            <controls.Typography sx={{ padding: '2px' }}>
              <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>M</span>
            </controls.Typography>
            <controls.Typography sx={{ padding: '2px' }}>
              <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>L</span>
            </controls.Typography>
            <controls.Typography sx={{ padding: '2px' }}>
              <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>XL</span>
            </controls.Typography>
            <controls.Typography sx={{ padding: '2px' }}>
              <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>XXL</span>
            </controls.Typography>
          </controls.Box>
          <controls.Typography sx={{ fontSize: '15px', color: '#070112', marginTop: '10px', letterSpacing: '0.5px', fontWeight: '500', marginRight: { sm: '10px' } }}>Color</controls.Typography>
          <controls.Box sx={{ display: 'flex' }}>

            <controls.Box sx={{ display: 'flex', marginRight: { sm: '80px', md: '40px' } }}>
              <controls.Typography sx={{ padding: '2px' }}>
                <span style={{ backgroundColor: '#EFEDED', padding: '10px', borderRadius: '50%', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ backgroundColor: 'red', padding: '8px', borderRadius: '50%', color: '#FFFFFF', fontSize: '10px' }}> </span>
                </span>
              </controls.Typography>
              <controls.Typography sx={{ padding: '2px' }}>
                <span style={{ backgroundColor: '#EFEDED', padding: '10px', borderRadius: '50%', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ backgroundColor: 'blue', padding: '8px', borderRadius: '50%', color: '#FFFFFF', fontSize: '10px' }}> </span>
                </span>
              </controls.Typography>
              <controls.Typography sx={{ padding: '2px' }}>
                <span style={{ backgroundColor: '#EFEDED', padding: '10px', borderRadius: '50%', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ backgroundColor: 'black', padding: '8px', borderRadius: '50%', color: '#FFFFFF', fontSize: '10px' }}> </span>
                </span>
              </controls.Typography>
              <controls.Typography sx={{ padding: '2px' }}>
                <span style={{ backgroundColor: '#EFEDED', padding: '10px', borderRadius: '50%', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ backgroundColor: 'green', padding: '8px', borderRadius: '50%', color: '#FFFFFF', fontSize: '10px' }}> </span>
                </span>
              </controls.Typography>
            </controls.Box>
          </controls.Box>


          <controls.Box component="Select" defaultValue="" sx={{ width: { xs: '90%', sm: '90%', md: '90%' }, marginTop: { xs: '20px', sm: '30px', md: '40px' }, borderRadius: 'none', padding: '8px' }}>
            <option value="" disabled selected hidden>Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </controls.Box>
          <controls.Box component="button" sx={{ border: '1px solid black', marginTop: '25px', padding: '8px', width: { xs: '90%', sm: '90%', md: '90%' }, color: '#FFFFFF', backgroundColor: '#676172', '&:hover': { color: 'black' }, textTransform: 'none', borderRadius: '10px' }}>Add To Bag</controls.Box>
          <controls.Box component="button" sx={{ marginTop: '20px', width: { xs: '90%', sm: '90%', md: '90%' }, padding: '8px', color: '#6A4EA4', backgroundColor: '#D0C9DD', '&:hover': { color: 'black', border: '1px solid black' }, textTransform: 'none', borderRadius: '10px' }}>Buy It Now</controls.Box>



          <controls.Grid container sx={{ height: { md: '100px' }, justifyContent: { xs: 'center', sm: 'unset' } }}>
            <controls.Grid><img height={'100px'} width={'120px'} src="https://i.postimg.cc/T1QhySpL/secure-payment.png" /></controls.Grid>
            <controls.Grid><img height={'100px'} width={'120px'} src="https://i.postimg.cc/T1QhySpL/secure-payment.png" /></controls.Grid>
            <controls.Grid><img height={'100px'} width={'130px'} src="https://i.postimg.cc/26Q1Y3Yx/easy_return_&amp;_exchange.png" /></controls.Grid>
          </controls.Grid>

        </controls.Grid>

      </controls.Grid>
    </controls.Grid>
  )
}

export default DetailsMagnifier;
