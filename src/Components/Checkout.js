import React from 'react'
import controls from './Import'


const Checkout = () => {
    const [country, setCountry] = controls.useState('');


    return (
        <controls.Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
            <controls.Grid container item sx={{ width: '80%', height: '500px' }}>
                <controls.Grid xs={12} md={6} sx={{}}>
                    <controls.Box>
                        <controls.Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <controls.Typography sx={{ fontSize: '21px', color: '#000000' }}>Contact</controls.Typography>
                            <controls.Typography><a>Login</a></controls.Typography>
                        </controls.Grid>
                        <controls.TextField sx={{ width: '100%',marginTop:'10px' }} id="outlined-textarea" placeholder="Email or mobile phone number" size="small" />
                        <controls.Grid sx={{ display: 'flex', marginTop: '5px', textAlign: 'center' }}>
                            <controls.Icon icon="fluent:checkbox-unchecked-20-regular" width="20" height="20" style={{ color: '#EEEEEE' }} />
                            <controls.Typography sx={{ fontSize: '13px', color: '#00000', marginLeft: '5px', letterSpacing: '0.2px' }}>Email me with news and offers</controls.Typography>
                        </controls.Grid>
                        <controls.Typography sx={{ fontSize: '21px', color: '#000000', marginTop: '20px' }}>Delivery</controls.Typography>
                        <controls.FormControl sx={{ minWidth: '100%',marginTop:'10px' }} size="small">
                            <controls.InputLabel id="country-select-label">Country</controls.InputLabel>
                            <controls.Select
                                labelId="country-select-label"
                                id="country-select"
                                value={country}
                                label="Country"
                               
                            >
                                <controls.MenuItem value="">
                                    <em>None</em>
                                </controls.MenuItem>
                                <controls.MenuItem value={10}>Ten</controls.MenuItem>
                                <controls.MenuItem value={20}>Twenty</controls.MenuItem>
                                <controls.MenuItem value={30}>Thirty</controls.MenuItem>
                            </controls.Select>
                        </controls.FormControl>
                        <controls.Grid gap={2} sx={{ marginTop: '10px', display: 'flex' }}>
                            <controls.Grid xs={12} md={6} >
                                <controls.TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="First name" size="small" />
                            </controls.Grid>
                            <controls.Grid xs={12} md={6}>
                                <controls.TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="Last name" size="small" />
                            </controls.Grid>

                        </controls.Grid>
                        <controls.TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-textarea" placeholder="Adress" size="small" />
                        <controls.TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-textarea" placeholder="Apartment, suite, etc. (optional)" size="small" />
                        <controls.Grid gap={1} sx={{ marginTop: '10px', display: 'flex' }}>
                            <controls.Grid xs={12} md={4}>
                                <controls.TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="City" size="small" />
                            </controls.Grid>
                            <controls.Grid xs={12} md={4}>
                                <controls.TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="State" size="small" />
                            </controls.Grid>
                            <controls.Grid xs={12} md={4}>
                                <controls.TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="Pincode" size="small" />
                            </controls.Grid>

                        </controls.Grid>
                        <controls.TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-textarea" placeholder="Phone number" size="small" />
                        <controls.Grid sx={{ display: 'flex', marginTop: '5px', textAlign: 'center' }}>
                            <controls.Icon icon="fluent:checkbox-unchecked-20-regular" width="20" height="20" style={{ color: '#EEEEEE' }} />
                            <controls.Typography sx={{ fontSize: '13px', color: '#000000', marginLeft: '5px', letterSpacing: '0.2px' }}>Save this information for next time</controls.Typography>
                        </controls.Grid>
                    </controls.Box>
                </controls.Grid>
                <controls.Grid xs={12} md={6} sx={{}}>
                <controls.Grid container sx={{ display: 'flex' ,backgroundColor:'#FFFFFF', margin:'20px'}} >
                                        <controls.Grid item  sx={{border:'1px solid grey',display:'flex' }} >
                                        <img width='80px' height='80px' src={localStorage.getItem('imgDisplay')}></img>
                                        </controls.Grid>
                                        <controls.Grid item sx={{marginTop:'15px',marginLeft:'10px' }} >
                                            <controls.Typography sx={{fontSize:'15px',color:'4C4C4C',letterSpacing:'0.2px',marginTop:'5px'}}>{localStorage.getItem('name')}</controls.Typography>
                                            <controls.Grid sx={{display:'flex',textAlign:'center'}} gap={2}>
                                            <controls.Typography sx={{fontSize:'12px',fontWeight:'bold',letterSpacing:'0.3px'}}>Standard</controls.Typography>
                                            <controls.Icon icon="fluent:text-bullet-list-square-edit-24-filled" width="20" height="20"  style={{color: '#676172'}} />
                                            </controls.Grid>
                                           
                            
                                        </controls.Grid>
                                        <controls.Typography sx={{marginTop:'24px',marginLeft:'30px'}} >Rs {localStorage.getItem('price')}.00</controls.Typography>

                                    </controls.Grid>
                </controls.Grid>
            </controls.Grid>
        </controls.Grid>
    )
}

export default Checkout
