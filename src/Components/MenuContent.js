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
import { useState,useEffect } from 'react';

export default function MenuContent() {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [drawerClose,setDrawerClose]= useState(false);
    const [drawerOpen, setDrawerOpen] =useState(false);
    const handleClick = () => {
        setDrawerOpen(true);
    };
    const handleClose = () => {
        setDrawerOpen(false);
    };

    const handleSignOut=() =>{
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
        { !drawerClose &&(
      
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                    <Grid item >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>DOG</Typography>
                    </Grid>
                    <Grid item >
                        <Tooltip title="Account settings">
                            <IconButton onClick={handleClick} size="small">
                                {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                                <Icon icon="eva:arrow-ios-forward-outline" width="22" height="22" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Divider />
                <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                    <Grid item >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>CAT</Typography>
                    </Grid>
                    <Grid item >
                        <Tooltip title="Account settings">
                            <IconButton onClick={handleClick} size="small">
                                {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                                <Icon icon="eva:arrow-ios-forward-outline" width="22" height="22" />
                            </IconButton>
                        </Tooltip>
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
                        ) : (<Button onClick={handleSignOut} sx={{color:'black',fontSize:'12px',paddingLeft:'0px'}}>Log Out</Button>)}

                    </Grid>

                </Grid>
                <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                    <Grid item >
                        {!token ? (<Link to="/CreateAccountPage" style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                Create an account
                            </Typography>
                        </Link>):(<Link to="/CreateAccountPage"style={{ textDecoration: 'none' }}> <Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                               My Account
                            </Typography></Link>)}
                    </Grid>

                </Grid>

                <Drawer
                    open={drawerOpen}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Drawer>
            </Box>
       
    )}
    </>
    );
}
