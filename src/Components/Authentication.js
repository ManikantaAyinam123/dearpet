import { Divider, Grid, Typography, Box, TextField, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";

const Authentication = () => {
    const [formClose, setFormClose] = useState(false);
    useEffect(() => {
        if (formClose) {
            
            window.location.reload();
        }
    }, [formClose]);

    return (
        <>
            {!formClose &&
                <Grid sx={{ minWidth: 400, padding: '15px 30px 100px 30px', border: '2px solid black', position: 'relative' }}>
                    <Box sx={{ display: 'flex', position: 'absolute', top: '20px', right: '30px', marginBottom: '50px', fontWeight: 700 }}> <IconButton onClick={() => { setFormClose(true) }}> <Icon icon="iconoir:cancel" width="18" height="18" /><Typography sx={{ fontSize: '12px', fontWeight: 500, ml: '2px' }}>
                        CLOSE</Typography></IconButton></Box>
                    <Box sx={{ mt: '50px' }}> <Typography sx={{ fontSize: '13px', fontWeight: 700, }}>CUSTOMER LOGIN:</Typography></Box>
                    <Divider sx={{ mt: 2 }} />
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid item sx={{ mt: 3 }}>
                            <Typography>
                                Email Address <Box component="span" sx={{ color: '#F1152F' }}>*</Box>
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 1 }}>
                            <TextField
                                placeholder="Email Adress"
                                type="text"
                                inputProps={{ style: { height: '10px', width: '384px' } }}
                                sx={{ marginBottom: '10px' }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography>Password<Box component="span" sx={{ color: '#F1152F' }}>*</Box></Typography>
                        </Grid>
                        <Grid item sx={{ mt: 1 }}>
                            <TextField
                                placeholder="Password"
                                type="password"
                                inputProps={{ style: { height: '10px', width: '384px' } }}
                                sx={{ marginBottom: '10px' }}
                            />
                        </Grid>
                        <Grid sx={{ mt: 2 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '409px',
                                    height: '34px',
                                    backgroundColor: '#FFFFFF',
                                    color: '#000000',
                                    border: '1px solid #000000',
                                    fontWeight: 550
                                }}
                            >
                                LOGIN
                            </Button>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}> <Typography>Forget your password?</Typography></Box>
                        </Grid>
                        <Grid sx={{ mt: 2 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '409px',
                                    height: '34px',
                                    backgroundColor: '#232323',
                                    color: '#FFFFFF',
                                    border: '1px solid #000000',
                                }}
                            >
                                CREATE AN Account
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            }
        </>
    )
}

export default Authentication
