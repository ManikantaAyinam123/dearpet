import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const PuppyLifeStages = () => {
    return (
        <Grid container justifyContent={'center'} marginTop={'20px'} marginBottom={'50px'}>
            <Grid   item sx={{width:{xs:'90%',sm:'85%'}}}  justifyContent={'center'} textAlign={'center'}>
                <Typography sx={{ fontSize: {xs:'25px',sm:'30px', md: '36px' }, fontWeight: '700', color: '#333333', lineHeight: '100%',marginTop:'20px' }}>Life Stages</Typography>
                <Grid container sx={{ display: 'flex',marginTop:'20px'  }}>
                    <Grid xs={12} sm={4} md={4} >
                        <img src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/lifestage_0-2.png?v=1627904505" width="100%" height='auto'></img>
                        <Box sx={{padding:'0px 15px 0px 15px',textAlign:'justify',borderLeft:'4px solid #FF9446'}}>
                            <Typography sx={{fontSize:{xs:'20px',sm:'26px',md:'28px'}}}>0-2 Months</Typography>
                            <Typography sx={{fontSize:{xs:'14px',sm:'15px',md:'16px'}}}>This puppy stage demands mother's milk to fulfil their nutrition. But if they are alone or rescued, you can start their weaning process. Again, opt for the starter food options for them and avoid giving them solid food.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={4} md={4} >
                        <img src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/lifestage_3-4.png?v=1627904505" width="100%" height='auto'></img>
                        <Box sx={{padding:'0px 15px 0px 15px',textAlign:'justify',borderLeft:'4px solid #FF9446'}}>
                        <Typography sx={{fontSize:{xs:'20px',sm:'26px',md:'28px'}}}>3-4 Months</Typography>
                            <Typography sx={{fontSize:{xs:'14px',sm:'15px',md:'16px'}}}>If the puppies haven't yet started weaning, this is your queue. Start by increasing the percentage of food and intervals of feeding as per the vet's advice. Practice it for 3-4 weeks and gradually increase their feedings.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={4 } md={4} >
                        <img src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/lifestage_5-6.png?v=1627904505" width="100%" height='auto'></img>
                         
                        <Box sx={{padding:'0px 15px 0px 15px',textAlign:'justify',borderLeft:'4px solid #FF9446'}}>
                        <Typography sx={{fontSize:{xs:'20px',sm:'26px',md:'28px'}}}>5-6 Months</Typography>
                            <Typography  sx={{fontSize:{xs:'14px',sm:'15px',md:'16px'}}}>Since puppies have become more active than before, there is a need to increase the intervals of feeding parallel to the solid food intake so that you can compensate for the high energy expenditure from their rigorous hopping and running.</Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default PuppyLifeStages