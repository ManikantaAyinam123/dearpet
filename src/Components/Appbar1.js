import React from 'react'
import controls from './Import'


const Appbar1 = () => {
    return (
        <controls.Box sx={{ backgroundColor: "#6434a4",color:'white', padding: '8px 70px 8px 5px' }}>
            <controls.Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <controls.Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <controls.Grid container spacing={0.3}>
                        <controls.Grid item><controls.Icon icon="ic:baseline-whatsapp" fontSize={'16px'} /></controls.Grid>
                        <controls.Grid item><controls.Icon icon="ic:round-phone" fontSize={'14px'} /></controls.Grid>
                        <controls.Grid item><controls.Typography sx={{ fontSize: '12px', fontFamily: 'sans-serif', marginTop: '3px' }}>+919111888111</controls.Typography></controls.Grid>
                    </controls.Grid>
                </controls.Grid>
                <controls.Grid item xs={12} md="auto" sx={{ textAlign: 'center', m: 'auto', paddingTop: { xs: '0px', md: '0px' } }}>
                    <controls.Typography sx={{ marginLeft: '30px', letterSpacing: '0.2em', fontSize: '9px', fontFamily: 'sans-serif', lineHeight: "140%" }}>GET UPTO 10% OFF MINIMUM CART VALUE RS799 ONLY!</controls.Typography>
                </controls.Grid>
            </controls.Grid>
        </controls.Box>


    )
}

export default Appbar1
