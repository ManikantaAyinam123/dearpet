import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { Icon } from "@iconify/react";
import { SelectChangeEvent } from '@mui/material/Select';

const Checkout = () => {
    const [country, setCountry] = React.useState('');


    return (
        <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
            <Grid container item sx={{ width: '80%', height: '500px' }}>
                <Grid xs={12} md={6} sx={{}}>
                    <Box>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '21px', color: '#000000' }}>Contact</Typography>
                            <Typography><a>Login</a></Typography>
                        </Grid>
                        <TextField sx={{ width: '100%',marginTop:'10px' }} id="outlined-textarea" placeholder="Email or mobile phone number" size="small" />
                        <Grid sx={{ display: 'flex', marginTop: '5px', textAlign: 'center' }}>
                            <Icon icon="fluent:checkbox-unchecked-20-regular" width="20" height="20" style={{ color: '#EEEEEE' }} />
                            <Typography sx={{ fontSize: '13px', color: '#00000', marginLeft: '5px', letterSpacing: '0.2px' }}>Email me with news and offers</Typography>
                        </Grid>
                        <Typography sx={{ fontSize: '21px', color: '#000000', marginTop: '20px' }}>Delivery</Typography>
                        <FormControl sx={{ minWidth: '100%',marginTop:'10px' }} size="small">
                            <InputLabel id="country-select-label">Country</InputLabel>
                            <Select
                                labelId="country-select-label"
                                id="country-select"
                                value={country}
                                label="Country"
                               
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid gap={2} sx={{ marginTop: '10px', display: 'flex' }}>
                            <Grid xs={12} md={6} >
                                <TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="First name" size="small" />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="Last name" size="small" />
                            </Grid>

                        </Grid>
                        <TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-textarea" placeholder="Adress" size="small" />
                        <TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-textarea" placeholder="Apartment, suite, etc. (optional)" size="small" />
                        <Grid gap={1} sx={{ marginTop: '10px', display: 'flex' }}>
                            <Grid xs={12} md={4}>
                                <TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="City" size="small" />
                            </Grid>
                            <Grid xs={12} md={4}>
                                <TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="State" size="small" />
                            </Grid>
                            <Grid xs={12} md={4}>
                                <TextField sx={{ width: '100%' }} id="outlined-textarea" placeholder="Pincode" size="small" />
                            </Grid>

                        </Grid>
                        <TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-textarea" placeholder="Phone number" size="small" />
                        <Grid sx={{ display: 'flex', marginTop: '5px', textAlign: 'center' }}>
                            <Icon icon="fluent:checkbox-unchecked-20-regular" width="20" height="20" style={{ color: '#EEEEEE' }} />
                            <Typography sx={{ fontSize: '13px', color: '#000000', marginLeft: '5px', letterSpacing: '0.2px' }}>Save this information for next time</Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} sx={{}}>
                <Grid container sx={{ display: 'flex' ,backgroundColor:'#FFFFFF', margin:'20px'}} >
                                        <Grid item  sx={{border:'1px solid grey',display:'flex' }} >
                                        <img width='80px' height='80px' src={localStorage.getItem('imgDisplay')}></img>
                                        </Grid>
                                        <Grid item sx={{marginTop:'15px',marginLeft:'10px' }} >
                                            <Typography sx={{fontSize:'15px',color:'4C4C4C',letterSpacing:'0.2px',marginTop:'5px'}}>{localStorage.getItem('name')}</Typography>
                                            <Grid sx={{display:'flex',textAlign:'center'}} gap={2}>
                                            <Typography sx={{fontSize:'12px',fontWeight:'bold',letterSpacing:'0.3px'}}>Standard</Typography>
                                            <Icon icon="fluent:text-bullet-list-square-edit-24-filled" width="20" height="20"  style={{color: '#676172'}} />
                                            </Grid>
                                           
                            
                                        </Grid>
                                        <Typography sx={{marginTop:'24px',marginLeft:'30px'}} >Rs {localStorage.getItem('price')}.00</Typography>

                                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Checkout
