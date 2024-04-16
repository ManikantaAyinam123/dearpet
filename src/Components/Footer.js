import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Icon } from "@iconify/react";

const Footer = () => {
  const Aboutdearpet = [
    { data: 'Our Story' },
    {
      data: `Our dreams are alike in terms of adorning our four-legged family. To take it further, we envision an approach that's paw-some in its own ways. Happiness, comfort & support, these are our royalties, our pillars on which we stand to be there for our pet's every need. We feel paw-sitive to be able to build a society for our pets and create the world a better place for them.`
    },
    {
      data: 'Blog'
    },
    {
      data: 'Careers'
    }
  ];
  const support = [{ data: 'FAQ' }, { data: 'Contact us' }, { data: 'Return & Refund Policy' }, { data: 'Privacy Policy' }, { data: 'Shipping Information' }, { data: 'Payment Options' }, { data: 'Terms and Conditions' }, { data: 'Become a Groomer' },]
  return (
    <>

      <Grid container sx={{ backgroundColor: '#EEEEEE', justifyContent: 'center', height: { md: '300px' } }}>
        <Grid container item width={'100%'} sx={{ justifyContent: 'space-around', height: '30px', backgroundColor: '#6534Ac', marginTop: { xs: '20px', sm: '25px', md: '30px' }, color: '#FFFFFF', marginBottom: { md: '20px' } }}>
          <Typography sx={{ alignItems: 'center', display: 'flex', fontSize: { xs: '12px', sm: '15px', md: '16px' } }}>
            <Icon icon="ic:round-phone" sx={{ fontSize: { xs: '17px', sm: '20px' } }} />+91 9111 888 111
          </Typography>
          <Typography sx={{ alignItems: 'center', display: 'flex', fontSize: { xs: '12px', sm: '15px', md: '16px' } }}>
            <Icon icon="ic:baseline-whatsapp" sx={{ fontSize: { xs: '17px', sm: '20px' } }} />+91 9111 888 111
          </Typography>
          <Typography sx={{ alignItems: 'center', display: { xs: 'none', sm: 'flex', fontSize: { xs: '12px', sm: '15px', md: '16px' } } }}>
            <Icon icon="material-symbols-light:mail" sx={{ fontSize: { xs: '17px', sm: '20px' } }} />support@dearpet.in
          </Typography>
        </Grid>



        <Grid container item sx={{ width: { xs: '85%', sm: '90%' }, margin: { xs: 'auto', md: 'auto' }, gap: { md: '40px' }, flexWrap: { md: 'nowrap' }, textAlign: 'justify', marginBottom: { md: '80px' } }}>
          <Grid item sx={{ borderBottom: '1px solid black', display: { xs: 'flex', sm: 'none' }, padding: '0px 0px 10px 0px', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '15px' }}>
            <Typography>About Dear Pet</Typography>
            <Icon icon="solar:alt-arrow-down-line-duotone" />
          </Grid>
          <Grid item sx={{ borderBottom: '1px solid black', display: { xs: 'flex', sm: 'none' }, padding: '0px 0px 10px 0px', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '15px', marginBottom: '15px' }}>
            <Typography>Support</Typography>
            <Icon icon="solar:alt-arrow-down-line-duotone" />
          </Grid>
          <Grid item sm={12} md={5} sx={{ marginTop: { sm: '15px', md: '0px' }, display: { xs: 'none', sm: 'block' } }} >
            <Typography sx={{ fontSize: { sm: '15px', md: '18px' } }}> About Dear Pet</Typography>
            {Aboutdearpet.map((item) => (
              <Typography sx={{ fontSize: { sm: '12px', md: '12px' }, marginTop: { sm: '5px', md: '5px' } }}>{item.data}</Typography>
            ))}


          </Grid>
          <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }} >
            <Typography sx={{ fontSize: { md: '18px' } }}>Support</Typography>
            {support.map((item) => (
              <Typography sx={{ fontSize: { md: '12px' }, marginTop: { md: '5px' } }}>{item.data}</Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4} sx={{ marginTop: { sm: '15px', md: '0px' } }}>
            <Typography sx={{ fontSize: { xs: '17px', sm: '15px', md: '18px' } }}>Keep in touch</Typography>
            <Box sx={{ display: 'flex', marginTop: { xs: '7px', sm: '5px', md: '10px' } }}>
              <TextField
                InputProps={{
                  sx: { width: '30ch', height: '40px', backgroundColor: '#DDDDDD', borderRadius: 0, },
                }}
                placeholder="Enter your email"

              />
              <Button variant='contained' sx={{ borderRadius: '0', backgroundColor: '#9A9999', width: '12ch', height: '40px', }}>submit</Button>
            </Box>
            <Typography sx={{ fontSize: { xs: '12px', sm: '12px', md: '12px' }, marginTop: { xs: '7px', sm: '5px', md: '10px' } }}>Sign up to receive updates, special offers, program communications and other information from Dear pet.</Typography>
            <Box sx={{ display: 'flex', marginTop: { xs: '8px', sm: '5px', md: '15px' }, marginBottom: { xs: '10px', sm: '10px', md: '0px' } }} gap={'10px'} >
              <Icon icon="grommet-icons:facebook" width="33" height="33" style={{ color: '#9A9999' }} />
              <Icon icon="vaadin:twitter-square" width="33" height="33" style={{ color: '#9A9999' }} />
              <Icon icon="el:linkedin" width="33" height="33" style={{ color: '#9A9999' }} />
              <Icon icon="vaadin:youtube-square" width="33" height="33" style={{ color: '#9A9999' }} />

            </Box>

          </Grid>
        </Grid>
      </Grid>
      <Grid container item width="100%" sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#DDDDDD', height: { xs: '35px', sm: '38px' }, border: '0px', }}>
        <Typography fontSize={'12px'}> © 2023 BARK BUDDIES PRIVATE LIMITED. all rights reserved</Typography>
      </Grid>
    </>
  );
};

export default Footer;
