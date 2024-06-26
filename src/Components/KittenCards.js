import React from 'react'
import controls from './Import'
import LinearProgress from '@mui/material/LinearProgress';
import '../App.css';

const KittenCards = () => {
    const [hoveredImage, setHoveredImage] = controls.useState(null);
    const [drawerOpen, setDrawerOpen] = controls.useState();
    const [selectImage, setSelectImage] = controls.useState();
    const handleAddImage = (index) => {
        setSelectImage(images[index]);

        const displayImg = images[index].imgurl

        localStorage.setItem('imgDisplay', displayImg);
        console.log("localstorage img", localStorage.getItem('imgDisplay'))
        localStorage.setItem('name', images[index].productName);
        localStorage.setItem('price', images[index].price);
        console.log('name', localStorage.getItem('name'));
         setDrawerOpen(true);

    }

    const images = [
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/1_d92fa4b7-75a5-44c9-99c4-abe1e70f5913.jpg?v=1624271491',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/1_fc75ed2e-1d14-4930-846d-22d1b0dee955.jpg?v=1624271491',
            offer: '-20%',
            productName: 'Dear Pet Micro-Fiber Towel For Pets',
            price: '399',
            offerPrice: '500',
            size: 'M',
            extraContent: 'Standard'


        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/Untitleddesign_1_d1610a7c-a5ee-482a-88b2-dbdb9bfe0c80.jpg?v=1614152935',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/Untitleddesign_6ee9ec27-8a57-470b-be63-99d2981e81c2.jpg?v=1614152935',
            offer: '-40%',
            productName: 'GiGwi Roll-Tailed Mouse With Catnip Bag Cat Toy ',
            price: '399',
            offerPrice: '500',
            size: 'Standard',
            extraContent: 'M'
        },
        {
            imgurl: 'https://dearpet.in/cdn/shop/products/Untitleddesign_01b2dda2-40e7-4b55-9bf4-5fd85360fa02.jpg?v=1614167446',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/Untitleddesign_1_1fdc825a-ca65-4156-885d-e99bf3d2143c.jpg?v=1614167458',
            productName: 'GiGwi Cat Wand Feather Teaser With Mouse Cat Toy ',
            offer: '-40%',
            price: '399',
            offerPrice: '500',
            size: 'Standard',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1_096e0360-11d6-4d2e-8185-2d94dc07b28f.jpg?v=1624012816',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/1_f348a9ce-24f1-4a20-ab1e-a39b0598f56d.jpg?v=1624013138',
            offer: '-40%',
            productName: 'Dear Pet Bunny Printed Micro-Fibre Towels',
            price: '299',
            offerPrice: '400',
            size: 's',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1609915452wc6111000x1000jpg.jpg?v=1612535473',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/KongWubbaBirdAssortedToy1.jpg?v=1613193715',
            offer: '-30%',
            productName: 'Kong Wubba Bird Assorted Cat Toy  ',
            price: '159',
            offerPrice: '300',
            size: 'Standard',
            extraContent: 'Pink'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1609915800wc621-20190103190250-20190103190300-1000x1000jpg.jpg?v=1612535476',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/KongWubbaBugAssortedToy1.jpg?v=1613193753',
            offer: '-20%',
            productName: 'Kong Wubba Bug Assorted Cat Toy',
            price: '399',
            offerPrice: '500',
            size: 'M',
            extraContent: 'Standard'
        },
        {

            imgurl: 'https://dearpet.in/cdn/shop/products/1604737493kongcatwobblerjpg.jpg?v=1612535270',
            hoverImageUrl: 'https://dearpet.in/cdn/shop/products/KongCatwobbler.jpg?v=1613193087',
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
        <controls.Grid container justifyContent="center" marginTop={4}>
            <controls.Grid container item width="90%">
                <controls.Grid item md={2} sx={{ height: '300px', display: { xs: 'none', lg: 'block' } }}>
                    <controls.Typography sx={{ fontSize: '20px', backgroundColor: '#EEEEEE', width: '100%', height: '30px', color: '#333333', padding: '3px 3px' }}>Filter by:</controls.Typography>
                    {sidebarContent.map((item, index) => (
                        <controls.Grid key={index}>
                            <controls.Box sx={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                                <controls.Typography sx={{ fontSize: '13px', color: '#333333', fontWeight: 'bold', letterSpacing: '0.1em' }}>{item.name}</controls.Typography>
                                <controls.Icon icon="codicon:dash" width="24" height="24" style={{ color: 'black' }} />
                            </controls.Box>
                            {Object.keys(item).map((key, i) => {
                                if (key.startsWith('content')) {
                                    return (
                                        <controls.Box key={key} sx={{ display: 'flex', marginLeft: '0px', marginTop: i === 0 ? '8px' : '5px' }}>
                                            <controls.Icon icon="ri:checkbox-blank-line" width="20" height="20" style={{ color: 'grey' }} />
                                            <controls.Typography sx={{ fontSize: '14px', color: '#333333', marginLeft: '10px' }}>{item[key]}</controls.Typography>
                                        </controls.Box>
                                    );
                                }
                                return null;
                            })}
                            <controls.Divider sx={{ width: '100%', marginTop: '10px', backgroundColor: '#333333' }} />
                        </controls.Grid>
                    ))}
               </controls.Grid>
                <controls.Grid container item lg={10} style={{ display: 'flex' }}>
                    {images.map((item, index) => (
                        <React.Fragment key={index}>
                            <controls.Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: { xs: 'flex', sm: 'block' } }}>

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
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554', marginTop: { xs: '3px', sm: '0px' } }} />
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <controls.Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <controls.Icon icon="clarity:half-star-solid" width="18" height="18" style={{ color: '#FFD554' }} />
                                    </controls.Box>
                                    <controls.Typography sx={{ fontSize: '14px', color: '#333333', marginTop: '3px' }}>Size: {item.size}</controls.Typography>
                                    <controls.Typography sx={{ padding: '2px' }}>
                                        <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>{item.extraContent}</span>
                                    </controls.Typography>
                                    <controls.Grid sx={{ marginTop: '10px', display: 'flex' }}>
                                        <controls.Button sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, border: '1px solid black', width: '45%', padding: '3px', color: '#333333', '&:hover': { color: 'black' }, textTransform: 'none' }}>Quick View</controls.Button>
                                        <controls.Button onClick={() => { handleAddImage(index) }} sx={{ border: '1px solid black', width: { xs: '100%', sm: '100%', md: '45%' }, padding: '3px', color: '#FFFFFF', backgroundColor: '#676172', '&:hover': { color: 'black' }, textTransform: 'none', marginLeft: { xs: '0px', sm: '0px', md: '10px' } }}>Add To Bag</controls.Button>
                                    </controls.Grid>
                                </controls.Grid>
                            </controls.Grid>
                            <controls.Divider sx={{ marginBottom: '8px', display: { sm: 'none' }, width: '100%', height: '5px', backgroundColor: '#eaeaea' }} />
                            <controls.Drawer
                                anchor='right'
                                open={drawerOpen}
                                onClose={() => { setDrawerOpen(false) }}
                                ModalProps={{ BackdropProps: { invisible: true, style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } } }}
                            >
                                <controls.Grid width="450px" backgroundColor="#EEEEEE">
                                    <controls.Box sx={{ display: 'flex', backgroundColor: '#6534AC', padding: '5px', textAlign: 'center' }}>
                                        <controls.IconButton onClick={() => { setDrawerOpen(false) }}><controls.Icon icon="formkit:caretleft" width="20" height="20" style={{ color: '#FFFFFF' }} /></controls.IconButton>
                                        <controls.Typography sx={{ color: '#FFFFFF', fontSize: '15px', marginLeft: '130px', marginTop: '8px' }}>My shopping bag(1)</controls.Typography>

                                    </controls.Box>

                                    <LinearProgress sx={{ position: 'relative', marginTop: '20px', height: '16px', margin: '15px', borderRadius: '5px', backgroundColor: '#6534AC' }} variant="determinate" value={0} />
                                    <controls.Typography sx={{ position: 'absolute', top: '56px', left: '200px', color: '#FFFFFF' }}>100%</controls.Typography>

                                    <controls.Grid container sx={{ display: 'flex', height: '120px', backgroundColor: '#FFFFFF', padding: '10px', margin: '5px' }} >
                                        <controls.Grid item xs={4} sx={{ padding: '10px' }} >
                                            <img width='90px' height='90px' src={localStorage.getItem('imgDisplay')}></img>
                                        </controls.Grid>
                                        <controls.Grid item xs={8} sx={{}} >
                                            <controls.Typography sx={{ fontSize: '12px', color: '4C4C4C', letterSpacing: '0.2px', marginTop: '5px' }}>{localStorage.getItem('name')}</controls.Typography>
                                            <controls.Grid sx={{ display: 'flex', marginTop: '3px' }} gap={2}>
                                                <controls.Typography sx={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.3px' }}>Standard</controls.Typography>
                                                <controls.Icon icon="fluent:text-bullet-list-square-edit-24-filled" width="20" height="20" style={{ color: '#676172' }} />
                                            </controls.Grid>
                                            <controls.Grid sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '3px' }}>
                                                <controls.Typography sx={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.3px' }}>Rs {localStorage.getItem('price')}.00</controls.Typography>
                                                <controls.Icon icon="material-symbols-light:delete-outline" width="20" height="20" style={{ color: '#676172' }} />
                                            </controls.Grid>
                                            <controls.Grid sx={{ display: 'flex', justifyContent: 'space-around', height: '20px', width: '65px', border: '1px solid #6534AC', alignItems: 'center', marginTop: '3px' }}>
                                                <controls.Typography>-</controls.Typography>
                                                <controls.Typography>1</controls.Typography>
                                                <controls.Typography>+</controls.Typography>

                                            </controls.Grid>

                                        </controls.Grid>

                                    </controls.Grid>
                                    <controls.Grid sx={{ marginTop: '400px' }} >
                                        <controls.Button href="/CheckoutPage" sx={{ backgroundColor: '#6534AC', color: '#FFFFFF', justifyContent: 'center', width: '100%', letterSpacing: '0.3', borderRadius: '0px', '&:hover': { backgroundColor: '#6534AC', color: '#FFFFFF', } }}>Proceed to checkout</controls.Button>
                                    </controls.Grid>

                                </controls.Grid>
                            </controls.Drawer>


                        </React.Fragment>
                    ))}
                </controls.Grid>
            </controls.Grid>
        </controls.Grid>


    )
}

export default KittenCards
