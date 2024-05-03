import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import { Icon } from "@iconify/react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function MenuContent() {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [drawerClose, setDrawerClose] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dogAccessoriesDrawerOpen, setDogAccessoriesDrawerOpen] = useState(false);
    const handleClick = () => {
        setDrawerOpen(true);
    };
    const handleClose = () => {
        setDrawerOpen(false);
    };
    const handleDogAccessoriesDrawerOpen = () => {
        setDogAccessoriesDrawerOpen(true);
    };
    const handleDogAccessoriesDrawerClose = () => {
        setDogAccessoriesDrawerOpen(false);
    };


    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        setDrawerClose(true);
    }
    useEffect(() => {
        if (drawerClose) {

            window.location.reload();
        }
    }, [drawerClose]);

    return (
        <>
            {!drawerClose && (

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>DOG</Typography>
                        </Grid>
                        <Grid item >

                            <IconButton onClick={handleClick} size="small">
                                {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                                <Icon icon="eva:arrow-ios-forward-outline" width="22" height="22" />
                            </IconButton>

                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>CAT</Typography>
                        </Grid>
                        <Grid item >

                            <IconButton onClick={handleClick} size="small">
                                {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                                <Icon icon="eva:arrow-ios-forward-outline" width="22" height="22" />
                            </IconButton>

                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>GROMMING</Typography>
                        </Grid>

                    </Grid>
                    <Divider />
                    <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>BLOG</Typography>
                        </Grid>
                        <Divider />
                    </Grid>
                    <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            {!token ? (
                                <Link to="/SignInMobilePage" style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                        Sign In
                                    </Typography>
                                </Link>
                            ) : (<Button onClick={handleSignOut} sx={{ color: 'black', fontSize: '12px', paddingLeft: '0px' }}>Log Out</Button>)}

                        </Grid>

                    </Grid>
                    <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            {!token ? (<Link to="/CreateAccountPage" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                    Create an account
                                </Typography>
                            </Link>) : (<Link to="/CreateAccountPage" style={{ textDecoration: 'none' }}> <Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                My Account
                            </Typography></Link>)}
                        </Grid>

                    </Grid>

                    <Drawer
                        open={drawerOpen}
                        onClose={handleClose}
                    >
                        <Grid container justifyContent={'center'}>
                            <Grid item width='280px' height='1000px'>
                                <Box sx={{ display: 'flex', padding: '10px 10px', backgroundColor: '#F8F8F8', }}>
                                    <Icon onClick={handleClose} icon="uil:angle-left-b" width="20" height="20" style={{ color: 'black' }} />
                                    <Typography sx={{ marginLeft: '87px', fontSize: '15px', fontWeight: '700' }}>DOG</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography sx={{ fontSize: '12px' }}>ALL DOG</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography sx={{ fontSize: '12px', }}>DOG FOOD</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '5px 20px 5px 25px', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DOG ACCESSORIES</Typography>
                                    <IconButton onClick={handleDogAccessoriesDrawerOpen} size="small" >
                                        <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                    </IconButton>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DOG BEDS&CRATES</Typography>
                                    <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography sx={{ fontSize: '12px', }}>DOG BOWLS</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography sx={{ fontSize: '12px', }}>DOG TOYS</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DOG GROMMING</Typography>
                                    <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>HYGIENE & CARE</Typography>
                                    <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography sx={{ fontSize: '12px', }}>TRAVEL & UTILITIES</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DEAR PET FAV'S</Typography>
                                    <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DEAR PET COLLECTIONS</Typography>
                                    <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>WINTER COLLECTIONS</Typography>
                                    <Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </Box>
                                <Divider />



                            </Grid>
                        </Grid>
                    </Drawer>
                    <Drawer

                        open={dogAccessoriesDrawerOpen}
                        onClose={handleDogAccessoriesDrawerClose}
                    >
                        <Grid container>
                            <Grid item width={'280px'}>
                                <Box sx={{ display: 'flex', padding: '10px 10px', backgroundColor: '#F8F8F8', }}>
                                    <Icon onClick={handleDogAccessoriesDrawerClose} icon="uil:angle-left-b" width="20" height="20" style={{ color: 'black' }} />
                                    <Typography sx={{ marginLeft: '50px', fontSize: '15px', fontWeight: '700' }}>DOG ACCESSORIES</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography onClick={()=> {navigate('/DogTabsPage/dogaccessories')}} sx={{ fontSize: '12px', }}>All Dog Accessories</Typography>
                                </Box>
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography onClick={()=> {navigate('/DogTabsPage/collar,leash&harness')}} sx={{ fontSize: '12px', }}>Collar, Leash & Harness</Typography>
                                </Box>
                                <Box sx={{ padding: '10px 25px' }}  >
                                    <Typography sx={{ fontSize: '12px', }}>Bow Tie</Typography>
                                </Box>
                              

                            </Grid>

                        </Grid>
                    </Drawer>
                </Box>

            )}
        </>
    );
}
