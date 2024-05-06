import React from 'react'
import controls from './Import'

const PuppyCare = () => {
    return (
        <controls.Grid container justifyContent={'center'}>
            <controls.Grid container item width={'85%'} sx={{ display: 'flex' }} spacing={3} >
                <controls.Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <controls.Typography sx={{ fontSize: { xs: '17px', sm: '20px', md: '26px' }, fontWeight: '700', marginBottom: '10px', marginTop: { xs: '20px' } }}>Know More About Puppy Care</controls.Typography>
                </controls.Grid>
                <controls.Grid item xs={12} sm={6} md={6}>
                    <img style={{ maxWidth: '100%', height: 'auto' }} src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/blog_1.png?v=1627904505"></img>
                    <controls.Typography sx={{ fontSize: { xs: '13px', sm: '14px', md: '15px' }, fontWeight: '700', marginTop: { xs: '5px', sm: '10px', md: '15px' }, }}>Puppy - Adult - Senior Some interesting traits in each life stage</controls.Typography>
                    <controls.Typography sx={{ fontSize: { xs: '14px', sm: '15px', md: '16px' }, lineHeight: '1.4', marginTop: { xs: '10px' }, textAlign: 'justify' }}>What makes a furry distinctive is all about growing up. Enhancing oneself is a part of the change & evolution is what happens in the process. Dogs are adorable beings, from how expressive they are to how capable they can be in the next stage of their life ......</controls.Typography>
                </controls.Grid>
                <controls.Grid item xs={12} sm={6} md={6}>
                    <img style={{ maxWidth: '100%', height: 'auto' }} src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/blog_1.png?v=1627904505"></img>
                    <controls.Typography sx={{ fontSize: { xs: '13px', sm: '14px', md: '15px' }, fontWeight: '700', marginTop: { xs: '5px', sm: '10px', md: '15px' }, }}>Chewing to Nipping – How to Keep My Pup Away From it?</controls.Typography>
                    <controls.Typography sx={{ fontSize: { xs: '14px', sm: '15px', md: '16px' }, lineHeight: '1.4', marginTop: { xs: '10px' }, textAlign: 'justify' }}>Let me take a bite! Oh, wasn’t I supposed to? I didn’t know. But it does look different. Is this chewable? Oh, wait, my hoomans pet me when I chew. Maybe they want me to chew .....</controls.Typography>
                </controls.Grid>



            </controls.Grid>

        </controls.Grid>
    )
}

export default PuppyCare
