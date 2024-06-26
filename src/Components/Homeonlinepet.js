import React from 'react';
import controls from './Import'

const Homeonlinepet = () => {
  const [expanded, setExpanded] = controls.useState(false);
 const handleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <controls.Grid container sx={{ backgroundColor: '#FFFFFF' }}>
      <controls.Grid container justifyContent={'center'} marginTop={'40px'}>
        <controls.Grid container item width='90%'>
          <controls.Grid item md={6} sx={{ padding: { sm: '0px 80px 0px 50px', md: '0px 0px 0px 0px', lg: '0px 100px 0px 0px' } }}>
            <img src="https://dearpet.in/cdn/shop/files/small_1024x1024_crop_center.jpg?v=1622709511" width={'100%'} height={'auto'} alt="Product Image" />
          </controls.Grid>
          <controls.Grid item md={6} sx={{ padding: { md: '5px 0px 0px 20px' } }}>
            <controls.Typography variant='h5' sx={{ color: '#6a48a8', fontSize: { xs: '22px', md: '30px' }, fontWeight: { xs: '700', md: 700 }, marginTop: { xs: '10px' } }}>DEAR PET:</controls.Typography>
            <controls.Typography variant='h5' sx={{ color: '#6a48a8', fontSize: { xs: '22px', md: '30px' }, fontWeight: { xs: '700', md: 700 }, marginBottom: { xs: '10px', md: '20px' } }}>ONLINE PET STORE INDIA</controls.Typography>
            <controls.Typography
              sx={{
              
                maxWidth: '100%',
                wordWrap: 'break-word',
                textAlign: 'justify',
                fontSize: { md: '18px' }
              }}
            >
              {expanded ? (
                <>
                  Dear Pet is the name that visions to comfort pets and pet parents by catering the market of pet essentials. We aim to reach at every doorstep around the globe & serve our cuddle buddies the best quality products. Our supplies range from all kinds of Food to Grooming, Clothing, Accessories, Utilities, Travel Gears & Innovative Toys. We aim to deliver what our pets crave for rather than what we want to serve. So, we make sure that our pet supplies fulfil all the standards of quality checks and protocols so that there’s no stop to joy in our little one’s life.
                  <br />
                  <br />
                  At Dear Pet - Online Pet Store India, you will find a flawless experience in searching for the right product for your pets. We are confident that your online shopping experience for your pets will be much easier than before.
                </>
              ) : (
                <>
                  Dear Pet is the name that visions to comfort pets and pet parents by catering the market of pet essentials. We aim to reach at every doorstep around the globe & serve our cuddle buddies the best quality products.
                  <controls.Button onClick={handleShowMore} sx={{ marginTop: '8px' }}>Show More</controls.Button>
                </>
              )}
            </controls.Typography>
          </controls.Grid>
        </controls.Grid>
      </controls.Grid>
    </controls.Grid>
  );
};

export default Homeonlinepet;
