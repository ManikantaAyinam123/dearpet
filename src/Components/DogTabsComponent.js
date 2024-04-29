import React, { useEffect, useState } from 'react';
import { Typography,Box,Divider,Grid,Button } from '@mui/material';
import {  useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/action';
import { Icon } from "@iconify/react";

const DogTabsComponent = () => {
  const navigate=useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);
  console.log("bbd", data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const params = useParams();
  const router = params.id;

  const handleDetailsPage = (Data) => {
    console.log("handleDetailsPage Data",Data)
    localStorage.setItem('magnifierData', JSON.stringify(Data));
    console.log("handleDetailsPage Data localStorage",localStorage.getItem('magnifierData'));
    // navigate('/DetailsPage');

  }
  console.log("router",router);

  const original = data && data.filter((item) => item.status === router)
  console.log("original",original);
  
  const sidebarContent = [
    { name: 'Product Type', content1: 'Towels and Wipes for cats & dogs', content2: 'Dog Grooming', content3: 'Cat Grooming', content4: 'Puppy Grooming', content5: 'Kitten Grooming' },
    { name: 'Price', content1: 'Rs.100 - Rs.500', content2: 'Rs.501 - Rs.1000', content3: 'Rs.1001 - Rs.2500' }, { name: 'Brands', content1: 'Dear Pet', content2: 'Kong', content3: 'Gigwi' }, { name: 'LifeStages', content1: 'Puppy', },
];

  return (
    <>
      {/* { original && original.map((item) => (
        <div >
          <Typography>Status: {item.status}</Typography>
          <Typography onClick={() => handlepress(item.aboutcard)}>Name: {item.name}</Typography>
          <img src={item.imgurl} height={'auto'} width={'100%'}></img>
        </div>
      ))} */}
           <Grid container justifyContent="center" marginTop={4}>
            <Grid container item width="90%">
                <Grid item md={2} sx={{ height: '300px', display: { xs: 'none', lg: 'block' } }}>
                    <Typography sx={{ fontSize: '20px', backgroundColor: '#EEEEEE', width: '100%', height: '30px', color: '#333333', padding: '3px 3px' }}>Filter by:</Typography>
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
              
                <Grid container item lg={10} >
                  <Grid container xs={12} sx={{justifyContent:'space-between',padding:'0px 50px',fontSize:'22px',color:'2F2E2E',marginBottom:'15px'}}>
                    <Grid item>
                    {router === 'dogaccessories' ? 'Dog Accessories' : 'Dog Collar, Leash & Harness'}
                    </Grid >
                    <Grid item sx={{display:'flex',alignItems:'center',padding:'5px 10px',backgroundColor:'#EEEEEE'}}>
                    
                      <Typography sx={{fontSize:'18px'}}>Sort by</Typography>
                      <Typography sx={{marginLeft:'40px',marginRight:'20px',fontSize:'15px'}}>Best Selling</Typography>
                      <Icon icon="ri:arrow-drop-down-line" width="20" height="20"  style={{color:'#00000'}} />
                
                    </Grid>

                  </Grid>
                    { original && original.map((item,index)  => (
                        <React.Fragment key={index}>
                            <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: { xs: 'flex', sm: 'block' } }}>

                                <Grid xs={5} sm={12} sx={{ padding: { xs: '10px', sm: '5px'},margin:{sm:'0px 50px',lg:'0px 50px'}, position: 'relative' }}>
                                    <img
                                        height="auto"
                                        width="100%"
                                        onMouseEnter={() => setHoveredImage(index)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                        src={hoveredImage === index ? item.innerImages[0].allImages[0].imgurl : item.imgurl}
                                      
                                        onClick={handleDetailsPage(item)}
                                      
                                        alt="Slide"
                                    />
                                    
                                    <Typography sx={{ fontSize: '13px', position: 'absolute', color: '#FFFFFF', top: { xs: '0', sm: '0' }, left: { xs: '0', sm: 'auto' }, right: { xs: 'auto', sm: 0 }, padding: '1px 2px', backgroundColor: '#6A48A8' }}>50%</Typography>
                                </Grid>
                                <Grid xs={7} sm={12} sx={{ padding: { xs: '10px', sm: '28px' } }}>
                                    <Divider sx={{ display: { xs: 'none', sm: 'block' }, width: '100%', height: '3px', backgroundColor: '#eaeaea' }} />
                                    <Typography sx={{ fontSize: '14px', color: '#333333', fontFamily: 'Source Sans Pro', marginTop: '10px' }}>Dear Pet Micro Fiber Towel</Typography>
                                    <Box sx={{ display: { sm: 'flex' }, marginTop: '3px' }}>
                                        <Typography sx={{ fontSize: { xs: '13px', sm: '13px' }, fontWeight: '700' }}>Rs 450.00</Typography>
                                        <Typography sx={{ fontSize: { xs: '13px', sm: '13px' }, marginLeft: { xs: '0px', sm: '10px' }, marginRight: { sm: '80px', md: '40px' }, fontWeight: '700', color: '#969696' }}>Rs <strike>799</strike></Typography>
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554', marginTop: { xs: '3px', sm: '0px' } }} />
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <Icon icon="carbon:star-filled" width="18" height="18" style={{ color: '#FFD554' }} />
                                        <Icon icon="clarity:half-star-solid" width="18" height="18" style={{ color: '#FFD554' }} />
                                    </Box>
                                    <Typography sx={{ fontSize: '14px', color: '#333333', marginTop: '3px' }}>Size:M</Typography>
                                    <Typography sx={{ padding: '2px' }}>
                                        <span style={{ backgroundColor: '#EFEDED', padding: '8px', borderRadius: '50px', color: '#969696', fontSize: '13px' }}>Standard</span>
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


    </>
  );
}

export default DogTabsComponent;
