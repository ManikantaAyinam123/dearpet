import controls from './Import'
import { useMediaQuery } from '@mui/material'
import React from 'react'

const PuppyCart = () => {
    const data = [
        {
            imgUrl: 'https://cdn.shopify.com/s/files/1/0531/2475/9744/files/food.png?v=1627904505',
            heading: 'Food is all-time happiness for pets.',
            content: 'However, since they are in the starting stage of development, they will require balanced nutrition and light as a mother`s milk. These are specially made to boost their overall health. Our Puppy Food are balanced with the digestible protein to boost their digestibility.',
            bottomcontent: 'Explore More +'
        },
        {
            imgUrl: 'https://cdn.shopify.com/s/files/1/0531/2475/9744/files/treats.png?v=1627904505',
            heading: 'Treats are an essential part of a dog`s life.',
            content: 'Treats are an essential part of a dog`s life. These are a friend, a source of fun, a motivation for training & fulfil their cravings at any time of the day. These are not to be treated as an alternative to their regular meals, just like snacks cannot replace breakfast, lunch or dinner.',
            bottomcontent: 'Explore More +'
        },
        {
            imgUrl: 'https://cdn.shopify.com/s/files/1/0531/2475/9744/files/grooming.png?v=1627904505',
            heading: 'Grooming is important part of a pup`s development.',
            content: 'All our grooming products, counting shampoos & conditioners, combs, wipes, brushes, towels and more help keeping them fragrant & free from bacterias causing itching. However, grooming them isn`t an easy task to perform; it calls for patience.',
            bottomcontent: 'Explore More +'
        },
        {
            imgUrl: 'https://cdn.shopify.com/s/files/1/0531/2475/9744/files/toys.png?v=1627904505',
            heading: 'Are you buying the first toy for your pup?',
            content: 'Let them bedazzle you with their unique ways so that even you can feel cheered. Well, toys play an essential role in keeping them mentally balanced. These help them during teething and are the best companions for them.',
            bottomcontent: 'Explore More +'
        }
    ]
    const isXsScreen = useMediaQuery('(max-width:600px)');
    return (
        <>
            <controls.Grid container justifyContent={'center'}>
                <controls.Grid item width={'85%'} sx={{ textAlign: 'center' }}>
                    <controls.Typography sx={{ fontSize: { xs: '20px', sm: '30px', md: '36px' },fontWeight:'bolder', fontWeight: '700', color: '#333333', lineHeight: '100%', marginTop: '20px' }}>Explore the Puppy Cart</controls.Typography>
                    <controls.Grid container sx={{ display: 'flex', marginTop: '10px' }}>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                {(isXsScreen || index % 2 === 0) ? (
                                    <>
                                        <controls.Grid item xs={12} sm={6} md={6}>
                                            <img style={{ maxWidth: '100%', height: 'auto' }} src={item.imgUrl} alt="Puppy Food" />
                                        </controls.Grid>
                                        <controls.Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: '#FFD140', textAlign: 'start', padding: '25px', borderRadius: '20px', margin: { xs: '0', sm: '30px 0px', md: '60px 0px' } }}>
                                            <controls.Typography sx={{ fontSize: { xs: '14px',sm:'15px', md: '16px' }, fontWeight: '600', lineHeight: '1.4' }}>{item.heading}</controls.Typography>
                                            <controls.Typography sx={{
                                                marginTop: '15px',
                                                fontSize: { xs: '13px', md: '15px' },
                                                overflow: 'hidden',
                                                display: { xs: '-webkit-box' },
                                                WebkitLineClamp: '6',
                                                WebkitBoxOrient: 'vertical',
                                                textOverflow: 'ellipsis' 
                                            }}>{item.content}</controls.Typography>
                                            <controls.Grid sx={{ marginTop: { xs: '30px',sm:'30px',md:'50px',lg:'70px' } }}>
                                                <controls.Typography sx={{ textAlign: 'right', fontSize: { xs: '20px', md: '20px' }, fontWeight: '700' }}>{item.bottomcontent}</controls.Typography>
                                            </controls.Grid>
                                        </controls.Grid>
                                    </>
                                ) : (
                                    <>
                                        <controls.Grid item xs={12} sm={6} md={6} sx={{ backgroundColor: '#FFD140', textAlign: 'start', padding: '25px', borderRadius: '20px', margin: { xs: '0', sm: '30px 0px', md: '60px 0px' } }}>
                                            <controls.Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: '600', lineHeight: '1.4' }}>{item.heading}</controls.Typography>
                                            <controls.Typography sx={{ marginTop: '15px', fontSize: { xs: '13px', md: '15px' } }}>{item.content}</controls.Typography>
                                            <controls.Grid sx={{ marginTop: { xs: '30px',sm:'30px',md:'50px',lg:'70px' } }}>
                                                <controls.Typography sx={{ textAlign: 'right', fontSize: { xs: '20px', md: '20px' }, fontWeight: '700' }}>{item.bottomcontent}</controls.Typography>
                                            </controls.Grid>
                                        </controls.Grid>
                                        <controls.Grid item xs={12} sm={6} md={6}>
                                            <img style={{ maxWidth: '100%', height: 'auto' }} src={item.imgUrl} alt="Puppy Food" />
                                        </controls.Grid>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </controls.Grid>
                </controls.Grid>
            </controls.Grid>
        </>
    )
}

export default PuppyCart
