import controls from './Import'
import React from 'react'
const DogCards = () => {
    const [hoveredImage, setHoveredImage] = controls.useState(null);
    const [visibleImages, SetVisibleImages] = controls.useState(7);
    const handleShowMore = ()=>{
        SetVisibleImages(prevVisibleImages => prevVisibleImages + 8);
    }
    const images = [
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/petflix-1_01fda86d-697a-4a4f-b3a7-7822543b6c5e.jpg?v=1613032828',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/petflix-3_aad281d7-ff1e-46bb-b737-e44f0de0409a.jpg?v=1613032828',
            offer: '-20%',
            productName: 'Dear Pet Micro-Fiber Towel For Pets',
            price: '399',
            offerPrice: '500',
            size: 'M',
            extraContent: 'Standard'


        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/files/RedEarMuff.png?v=1698055287',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/files/BlackearMufffi_1.png?v=1698055286',
            offer: '-40%',
            productName: 'GiGwi Roll-Tailed Mouse With Bag Cat Toy ',
            price: '399',
            offerPrice: '500',
            size: 'Standard',
            extraContent: 'M'
        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/1_891b6e98-e46a-457e-9274-af52c25ca399.jpg?v=1628921604',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_f2707bc7-da12-4271-b977-ac88fe59bd98.jpg?v=1628921612',
            productName: 'GiGwi Cat Wand Feather  With Mouse Cat Toy ',
            offer: '-40%',
            price: '399',
            offerPrice: '500',
            size: 'Standard',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1607921975unicornbedangle1jpg.jpg?v=1613027239',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/unicornangle2.jpg?v=1613028099',
            offer: '-40%',
            productName: 'Dear Pet Bunny Printed Micro-Fibre Towels',
            price: '299',
            offerPrice: '400',
            size: 's',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1_398bff90-bf93-4f0f-9f56-0918eb538b31.jpg?v=1613125490',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_08c6bf08-3724-486e-b180-edc3aa62c801.jpg?v=1613125490',
            offer: '-30%',
            productName: 'Kong Wubba Bird Assorted Cat Toy  ',
            price: '159',
            offerPrice: '300',
            size: 'Standard',
            extraContent: 'Pink'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1604733037kongclassicjpg.jpg?v=1612535236',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/Red2.jpg?v=1613193291',
            offer: '-20%',
            productName: 'Kong Wubba Bug Assorted Cat Toy',
            price: '399',
            offerPrice: '500',
            size: 'M',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/pearls-1.jpg?v=1613031475',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/pearls-2.jpg?v=1613031475',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/ASFB1_1_1000x1000_50821a34-ba0b-4a73-82b0-2fd8d6c7cd26.jpg?v=1613721736',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/ASFB1_2_1000x1000_f9736211-37bd-43e0-97d3-f698eb39d6b1.jpg?v=1613721736',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1_407c9d2e-e65e-47f9-9a42-def484c11339.jpg?v=1623491201',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_4b5cfc86-fe9b-4dae-9053-ebce4c6aba85_compact.jpg?v=1623491201',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/woof-1.jpg?v=1613032467',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/woof-2.jpg?v=1613032467',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1_aff72563-05b0-40fd-a132-6e1ec1eea723.jpg?v=1613125498',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_3e9090eb-51cb-47f4-acb4-693d846eae93.jpg?v=1613125498',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1_2d47a87e-ac14-4969-9b67-265363071872.jpg?v=1613125603',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_960084fc-f052-4c98-8e2b-e3652ac183fa.jpg?v=1613125603',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/dogshirt_0018_image6copy1.jpg?v=1679899009',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/dogshirt_0018_image6copy2.jpg?v=1679899009',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/floral-1.jpg?v=1613032342',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/floral-2.jpg?v=1613032342',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        ,
        {
            imgurl: 'https://dearpet.in/cdn/shop/files/RedEarMuff.png?v=1698055287',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/files/BlackearMufffi_1.png?v=1698055286',
            offer: '-40%',
            productName: 'GiGwi Roll-Tailed Mouse With Bag Cat Toy ',
            price: '399',
            offerPrice: '500',
            size: 'Standard',
            extraContent: 'M'
        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/1_891b6e98-e46a-457e-9274-af52c25ca399.jpg?v=1628921604',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_f2707bc7-da12-4271-b977-ac88fe59bd98.jpg?v=1628921612',
            productName: 'GiGwi Cat Wand Feather  With Mouse Cat Toy ',
            offer: '-40%',
            price: '399',
            offerPrice: '500',
            size: 'Standard',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1607921975unicornbedangle1jpg.jpg?v=1613027239',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/unicornangle2.jpg?v=1613028099',
            offer: '-40%',
            productName: 'Dear Pet Bunny Printed Micro-Fibre Towels',
            price: '299',
            offerPrice: '400',
            size: 's',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1_398bff90-bf93-4f0f-9f56-0918eb538b31.jpg?v=1613125490',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/2_08c6bf08-3724-486e-b180-edc3aa62c801.jpg?v=1613125490',
            offer: '-30%',
            productName: 'Kong Wubba Bird Assorted Cat Toy  ',
            price: '159',
            offerPrice: '300',
            size: 'Standard',
            extraContent: 'Pink'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1604733037kongclassicjpg.jpg?v=1612535236',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/Red2.jpg?v=1613193291',
            offer: '-20%',
            productName: 'Kong Wubba Bug Assorted Cat Toy',
            price: '399',
            offerPrice: '500',
            size: 'M',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/pearls-1.jpg?v=1613031475',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/pearls-2.jpg?v=1613031475',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/ASFB1_1_1000x1000_50821a34-ba0b-4a73-82b0-2fd8d6c7cd26.jpg?v=1613721736',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/ASFB1_2_1000x1000_f9736211-37bd-43e0-97d3-f698eb39d6b1.jpg?v=1613721736',
            offer: '-50%',
            productName: 'Kong Wobbler Interactive - Cat Toy ',
            price: '299',
            offerPrice: '499',
            size: 'S',
            extraContent: 'S'
        },

    ];
    const sidebarContent = [
        { name: 'Product Type', content1: 'Towels and Wipes for cats & dogs', content2: 'Dog Grooming', content3: 'Cat Grooming', content4: 'Puppy Grooming', content5: 'Kitten Grooming' },
        { name: 'Price', content1: 'Rs.100 - Rs.500', content2: 'Rs.501 - Rs.1000', content3: 'Rs.1001 - Rs.2500' }, { name: 'Brands', content1: 'Dear Pet', content2: 'Kong', content3: 'Gigwi' }, { name: 'LifeStages', content1: 'Puppy', },
    ];

  return (
    <controls.Grid container sx={{justifyContent:{xs:'center',sm:'start',lg:'center'}}}>
         <controls.Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'23px'},color:'#070112',fontWeight:'bolder',marginTop:{xs:'30px',sm:'20px',md:'20px',lg:'20px'},marginLeft:{xs:'30px',sm:'20px',md:'20px',lg:'0px'},letterSpacing:'0.5px'}}>YOUR SEARCH FOR  "DOG"  REVEALED THE FOLLOWING:</controls.Typography>
    <controls.Grid  container item  sx={{width:{xs:'96%',sm:'99%',md:'98%',lg:'90%'}, display: 'flex',marginTop:'30px' }}>
       
    {images.slice(0, visibleImages).map((item, index) => (
        <React.Fragment key={index}>
            <controls.Grid item  xs={12} sm={4} md={3} lg={3} sx={{ display: { xs: 'flex', sm: 'block' } }}>

                <controls.Grid xs={5} sm={12} sx={{ padding: { xs: '10px', sm: '5px' }, position: 'relative' }}>
                    <img
                        height="auto"
                        width="100%"
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                        src={hoveredImage === index ? item.hoverImageUrl : item.imgurl}
                        alt="Slide"
                    />
                    <controls.Typography sx={{ fontSize: '13px', position: 'absolute', color: '#FFFFFF', top: { xs: '0', sm: '0' }, left: { xs: '0', sm: 'auto' }, right: { xs: 'auto', sm: 0 }, padding: '1px 2px', backgroundColor: '#6A48A8' }}>{item.offer}</controls.Typography>
                </controls.Grid>
                <controls.Grid xs={7} sm={12} sx={{ padding: { xs: '10px', sm: '28px' } }}>
                    <controls.Divider sx={{ display: { xs: 'none', sm: 'block' }, width: '100%', height: '3px', backgroundColor: '#eaeaea' }} />
                    <controls.Typography sx={{ fontSize: '14px', color: '#333333', fontFamily: 'Source Sans Pro', marginTop: '10px' }}>{item.productName}</controls.Typography>
                    <controls.Box sx={{ display: { sm: 'flex' }, marginTop: '3px' }}>
                        <controls.Typography sx={{ fontSize: { xs: '13px', sm: '13px' }, fontWeight: '700' }}>Rs {item.price}.00</controls.Typography>
                        <controls.Typography sx={{ fontSize: { xs: '13px', sm: '13px' }, marginLeft: { xs: '0px', sm: '10px' }, marginRight: { sm: '80px', md: '40px' }, fontWeight: '700', color: '#969696' }}>Rs <strike>{item.offerPrice}</strike></controls.Typography>
                       
                    </controls.Box>
                    <controls.Typography sx={{ fontSize: '14px', color: '#333333', marginTop: '3px' }}>Size: {item.size}</controls.Typography>
                    <controls.Typography sx={{ padding: '2px' }}>
                        <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>{item.extraContent}</span>
                    </controls.Typography>
                    <controls.Grid sx={{ marginTop:{xs:'10px',lg:'15px'}, display: 'flex' }}>

                        <controls.Button sx={{ border: '1px solid black', width: { xs: '100%', sm: '100%'}, padding: '3px', color: '#FFFFFF', backgroundColor: '#676172', '&:hover': { color: 'black' }, textTransform: 'none', marginLeft: { xs: '0px', sm: '0px', md: '10px' } }}>Add To Bag</controls.Button>
                    </controls.Grid>
                </controls.Grid>
         </controls.Grid>
            <controls.Divider sx={{ marginBottom: '8px', display: { sm: 'none' }, width: '100%', height: '5px', backgroundColor: '#eaeaea' }} />
        </React.Fragment>
    ))}
    
    <controls.Grid container justifyContent="center" sx={{ marginTop: '20px' }}> 
                {visibleImages < images.length && (
                    <controls.Button sx={{ marginBottom:'20px', fontSize: '18px', backgroundColor: '#6534Ac', color: '#FFFFFF', '&:hover': { color: 'black',border: '1px solid black', },padding:'2px 40px' }} onClick={handleShowMore}>Show More</controls.Button>
                )}
            </controls.Grid>
  
</controls.Grid>
   
</controls.Grid>
    
   
  )
}

export default DogCards
