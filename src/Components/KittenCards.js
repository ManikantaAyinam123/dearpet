import { Box, Button, Card, CardContent, Checkbox, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { Check } from '@mui/icons-material';

const KittenCards = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
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
        <Grid container justifyContent="center" marginTop={4}>
            <Grid container item width="90%">
                <Grid item md={2} sx={{ height: '300px', display: { xs: 'none', lg: 'block' } }}>
                    <Typography sx={{ fontSize: '20px', backgroundColor: '#EEEEEE', width: '100%', height: '30px', color: '#333333',padding:'3px 3px' }}>Filter by:</Typography>
                    {sidebarContent.map((item, index) => (
                        <Grid key={index}>
                            <Box sx={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: '13px', color: '#333333', fontWeight: 'bold', letterSpacing: '0.1em' }}>{item.name}</Typography>
                                <Icon icon="codicon:dash" width="24" height="24" style={{ color: 'black' }} />
                            </Box>
                            {Object.keys(item).map((key, i) => {
                                if (key.startsWith('content')) {
                                    return (
                                        <Box key={key} sx={{ display: 'flex', marginLeft: '0px', marginTop: i === 0 ? '8px' : '5px' }}>
                                            <Icon icon="ri:checkbox-blank-line" width="20" height="20" style={{ color: 'grey' }} />
                                            <Typography sx={{ fontSize: '14px', color: '#333333', marginLeft: '10px' }}>{item[key]}</Typography>
                                        </Box>
                                    );
                                }
                                return null;
                            })}
                            <Divider sx={{ width: '100%', marginTop: '10px', backgroundColor: '#333333' }} />
                        </Grid>
                    ))}





                </Grid>
                <Grid container item lg={10} style={{ display: 'flex' }}>
                    {images.map((item, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: { xs: 'flex', sm: 'block' } }}>

                                <Grid xs={5} sm={12} sx={{ padding: { xs: '10px', sm: '5px' }, position: 'relative' }}>
                                    <img
                                        height="auto"
                                        width="100%"
                                        onMouseEnter={() => setHoveredImage(index)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                        src={hoveredImage === index ? item.hoverImageUrl : item.imgurl}
                                        alt="Slide"
                                    />
                                    <Typography sx={{ fontSize: '13px', position: 'absolute', color: '#FFFFFF', top: { xs: '0', sm: '0' }, left: { xs: '0', sm: 'auto' }, right: { xs: 'auto', sm: 0 }, padding: '1px 2px', backgroundColor: '#6A48A8' }}>{item.offer}</Typography>
                                </Grid>
                                <Grid xs={7} sm={12} sx={{ padding: { xs: '10px', sm: '28px' } }}>
                                    <Divider sx={{ display: { xs: 'none', sm: 'block' }, width: '100%', height: '3px', backgroundColor: '#eaeaea' }} />
                                    <Typography sx={{ fontSize: '14px', color: '#333333', fontFamily: 'Source Sans Pro', marginTop: '10px' }}>{item.productName}</Typography>
                                    <Box sx={{ display: { sm: 'flex' }, marginTop: '3px' }}>
                                        <Typography sx={{ fontSize: { xs: '13px', sm: '13px' }, fontWeight: '700' }}>Rs {item.price}.00</Typography>
                                        <Typography sx={{ fontSize: { xs: '13px', sm: '13px' }, marginLeft: { xs: '0px', sm: '10px' }, marginRight: { sm: '80px', md: '40px' }, fontWeight: '700', color: '#969696' }}>Rs <strike>{item.offerPrice}</strike></Typography>
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554', marginTop: { xs: '3px', sm: '0px' } }} />
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <Icon icon="clarity:half-star-solid" width="18" height="18" style={{ color: '#FFD554' }} />
                                    </Box>
                                    <Typography sx={{ fontSize: '14px', color: '#333333', marginTop: '3px' }}>Size: {item.size}</Typography>
                                    <Typography sx={{ padding: '2px' }}>
                                        <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>{item.extraContent}</span>
                                    </Typography>
                                    <Grid sx={{ marginTop: '10px', display: 'flex' }}>
                                        <Button sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, border: '1px solid black', width: '45%', padding: '3px', color: '#333333', '&:hover': { color: 'black' }, textTransform: 'none' }}>Quick View</Button>
                                        <Button sx={{ border: '1px solid black', width: { xs: '100%', sm: '100%', md: '45%' }, padding: '3px', color: '#FFFFFF', backgroundColor: '#676172', '&:hover': { color: 'black' }, textTransform: 'none', marginLeft: { xs: '0px', sm: '0px', md: '10px' } }}>Add To Bag</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider sx={{ marginBottom: '8px', display: { sm: 'none' }, width: '100%', height: '5px', backgroundColor: '#eaeaea' }} />
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>
        </Grid>


    )
}

export default KittenCards
