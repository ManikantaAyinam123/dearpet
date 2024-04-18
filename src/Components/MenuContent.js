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

export default function MenuContent() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleClick = () => {
        setDrawerOpen(true);
    };
    const handleClose = () => {
        setDrawerOpen(false);
    };
    return (
        <React.Fragment>
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
                    <Link to="/SignInMobilePage" style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontSize: '13px', textDecoration: 'none !important',color:'black' }}>
                                Sign In
                            </Typography>
                        </Link>
                    </Grid>

                </Grid>
                <Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                    <Grid item >
                        <Link to="/CreateAccountPage" style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontSize: '13px', textDecoration: 'none !important',color:'black' }}>
                                Create an account
                            </Typography>
                        </Link>
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
        </React.Fragment>
    );
}
