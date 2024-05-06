import controls from './Import'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../App.css';

const PuppyMoreProducts = () => {
    const[hoveredImage,setHoveredImage]=controls.useState(null);
    const images = [
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/chickn-bikis-1.jpg?v=1614769019',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/chickn-bikis-2_360x.jpg?v=1614769019',
            productName: 'Dear pet Chickn`s Bikis Adult dog biscuits ',
            offer: '-50%',
            price:'249',
            offerPrice:'500',
            size:'pack of 2'


        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/DSC02466copy_360x.jpg?v=1613219818',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/DSC02468copy.jpg?v=1613219818',
            offer: '-40%',
            productName: 'Dear pet Thin Rubber Bone Toy for Dogs ',
            price:'399',
            offerPrice:'500',
            size:'pack of 1',
        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/3536_360x.jpg?v=1613391014',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/3536_360x.jpg?v=1613391014',
            productName: 'Trixie Chicken Latex  ',
            offer: '-40%',
            price:'399',
            offerPrice:'500',
            size:'pack of 1'
        },
        {
            
            imgurl: 'https://dearpet.in/cdn/shop/products/1604737208kongsportsballjpg.jpg?v=1612535266',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/KongSportBall1_360x.jpg?v=1613192396',
            offer: '-40%',
            productName: 'Kong Sports Ball Dog-Toy',
            price:'299',
            offerPrice:'400',
            size:'pack of 2'
        },
        {
            
            imgurl: 'https://dearpet.in/cdn/shop/products/DSC02344copy.jpg?v=1613219320',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/DSC02340copy.jpg?v=1613219320',
            offer: '-30%',
            productName: 'Dear pet Rubber Star Toy For Dogs  ',
            price:'159',
            offerPrice:'300',
            size:'pack of 1'
        },
        {
            
            imgurl: 'https://dearpet.in/cdn/shop/products/1604733037kongclassicjpg.jpg?v=1612535236',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/Red2.jpg?v=1613193291',
            offer: '-20%',
            productName: 'Kong Classic Chew Dog-Toy ',
            price:'399',
            offerPrice:'500',
            size:'pack of 2'
        },
        {
            
            imgurl: 'https://dearpet.in/cdn/shop/files/Bottle500ml.png?v=1697873170',
            hoverImageUrl:'https://dearpet.in/cdn/shop/files/Bottle500ml2.png?v=1697873169',
            offer: '-50%',
            productName: 'Dear pet Coat Whitening Sampo ',
            price:'299',
            offerPrice:'499',
            size:'pack of 1'
        },
        {
            
            imgurl: 'https://dearpet.in/cdn/shop/products/1_d92fa4b7-75a5-44c9-99c4-abe1e70f5913.jpg?v=1624271491',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/1_fc75ed2e-1d14-4930-846d-22d1b0dee955.jpg?v=1624271491',
            offer: '-20%',
            productName: 'Dear Pet Micro-Fiber Towel For Pets',
            price:'399',
            offerPrice:'500',
            size:'pack of 1'
            
        },
        {
            
            imgurl: 'https://dearpet.in/cdn/shop/products/Untitleddesign_ccf08033-1678-4a18-8080-0964bc47bd82.jpg?v=1614155861',
            hoverImageUrl:'https://dearpet.in/cdn/shop/products/Untitleddesign_1_0c2cec3b-9458-492d-bee2-4de45241e770.jpg?v=1614155861',
            offer: '-30%',
            productName: 'GiGwi Yellow Gladiator With SQueaker',
            price:'299',
            offerPrice:'300',
            size:'pack of 2'
            
        },
    ];

    return (
       <>
            <controls.Grid container justifyContent={'center'} >
                <controls.Typography sx={{ fontSize: { xs: '18px', sm: '25px', md: '28px', lg: '30px' }, fontWeight: { xs: 700 }, marginTop: { xs: '20px', },marginBottom:{xs:'20px'} }}>More products to choose from</controls.Typography>
            </controls.Grid>
            <controls.Grid container justifyContent="center">
                <controls.Grid item width="85%">
                    <Swiper
                        className="custom-swiper"
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                       
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        
                      
                    >
                           <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>    
                        {images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <controls.Grid container sx={{}}>
                                    <controls.Grid item xs={12} sx={{ padding: { xs: '10px', sm: '28px' } }}>
                                        <img height="auto" width="100%"
                                        onMouseEnter={()=> setHoveredImage(index)}
                                        onMouseLeave={()=> setHoveredImage(null) }
                                        src={hoveredImage===index ? item.hoverImageUrl: item.imgurl}
                                        alt="Slide" />
                                        <controls.Typography sx={{ fontSize: '13px', position: 'absolute', color: '#FFFFFF', top: 0, right: 0, padding: '1px 2px', backgroundColor: '#6A48A8' }}>{item.offer}</controls.Typography>
                                        <controls.Typography sx={{ fontSize: '13px' }}>{item.productName}</controls.Typography>
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18"  style={{color:'#FFD554' }} />
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18"  style={{color:'#FFD554' }} />
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18"  style={{color:'#FFD554' }} />
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18"  style={{color:'#FFD554' }} />
                                        <controls.Icon icon="clarity:half-star-solid" width="18" height="18"  style={{color: '#FFD554'}} />
                                        <controls.Box sx={{display:'flex',marginTop:'3px'}}>
                                        <controls.Typography sx={{fontSize:'13px',fontWeight:'700'}}>Rs {item.price}.00</controls.Typography>
                                        <controls.Typography sx={{fontSize:'13px',marginLeft:'5px',fontWeight:'700',color:'#969696'}}>Rs <strike> {item.offerPrice}</strike></controls.Typography>
                                        </controls.Box>
                                        <controls.Typography sx={{fontSize:'13px',color:'#333333',marginTop:'3px'}}>Size:{item.size}</controls.Typography>
                                        <controls.Button sx={{border:'1px solid black',width:'100%',padding:'3px',color:'#FFFFFF',backgroundColor:'#676172',marginTop:'5px','&:hover':{color:'black'},textTransform:'none'}}>Add To Bag</controls.Button>
                                    </controls.Grid>
                                    
                                </controls.Grid>
                            </SwiperSlide>
                            
                        ))}
                       
                    </Swiper>
                </controls.Grid>
            </controls.Grid>

            </>
    )
}

export default PuppyMoreProducts;