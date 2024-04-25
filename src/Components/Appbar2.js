import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icon } from "@iconify/react";
import Drawer from '@mui/material/Drawer';
import Authentication from './Authentication';
import MenuContent from './MenuContent';
import Dog from './Dog';
import Cat from './Cat';
import UserExists from './UserExists';
import '../App.css';
import { Link } from 'react-router-dom';

const Appbar2 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleShowDrawer = (value) => {
    setDrawerOpen(value);
  };

  const toggleUserDrawer = (value) => {
    setUserDrawerOpen(value);
  };

  const toggleUserExistsDrawer = (value) => {
    setUserExists(value);
  };

  const handleDrawer = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      toggleUserExistsDrawer(true);
    } else {
      toggleUserDrawer(true);
    }
  };

  const handleTabMouseOver = (index) => {
    setHoveredTab(index);
  };

  const handleTabMouseOut = () => {
    setHoveredTab(-1);
  };

  return (
    <div>
      <AppBar position="static" className={isSticky ? 'sticky-appbar1' : 'static-appbar1'}>
        
      </AppBar>
      <AppBar position={isSticky ? "fixed" : "static"} className={isSticky ? 'sticky-appbar2' : 'static-appbar2'}>
        <Grid container backgroundColor={'#FFFFFF'} display="flex" direction="row" padding={'5px'}>
          <Grid item sx={{ marginLeft: { xs: 4, lg: 10 } }}>
            <Link to="/">
            <Box component="img" src="https://dearpet.in/cdn/shop/files/logo.png?v=1617976255" sx={{ width: { xs: 30, lg: 45 }, height: { xs: 30, lg: 45 }, marginRight: 0 }} alt="logo" />
            </Link>
          </Grid>

          <Grid item sx={{ marginLeft: 45, display: { xs: 'none', lg: 'block' }, padding: 0 }} onMouseLeave={handleTabMouseOut}>
            <Box sx={{ position: 'relative', }}>
              <Box>
                <Tabs value={-1} aria-label="basic tabs example">
                  <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="DOG" href="/DogPage" onMouseOver={() => handleTabMouseOver(0)} />
                  <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="CAT" onMouseOver={() => handleTabMouseOver(1)} />
                  <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="GROOMING" onMouseOver={() => handleTabMouseOver(2)} />
                  <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="BLOG" onMouseOver={() => handleTabMouseOver(3)} />
                </Tabs>
              </Box>
              {(hoveredTab === 0 || hoveredTab === 1) && (
                <Box
                  sx={{
                    position: 'fixed',
                    
                    left: 0,
                    width: '100%',
                    color: 'black',
                    backgroundColor: '#EEEEEE',
                    padding: '30px',
                    zIndex: 9999,
                  }}
                >
                  {hoveredTab === 0 && <Dog />}
                  {hoveredTab === 1 && <Cat />}
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }} >
            <Box sx={{ marginRight: '15px' }}>
              <IconButton sx={{ color: 'black' }}><Icon icon="gridicons:search" width="27" height="27" /></IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'block', marginRight: '15px' } }}>
              <IconButton onClick={handleDrawer} sx={{ color: 'black' }}> <Icon icon="pajamas:user" width="23" height="23" /> </IconButton>
            </Box>
            
            <Drawer
              anchor="right"
              open={userDrawerOpen}
              onClose={() => toggleUserDrawer(false)}
            >
              <Authentication />
            </Drawer>
            <Drawer
              anchor="right"
              open={userExists}
              onClose={() => toggleUserExistsDrawer(false)}
            >
              <UserExists />
            </Drawer>
            <Box sx={{ marginRight: { xs: '13px', lg: '100px' } }}>
              <IconButton sx={{ color: 'black' }}><Icon icon="flowbite:shopping-bag-outline" width="27" height="27" /></IconButton>
            </Box>
            <Box sx={{ marginRight: { xs: '18px' }, display: { lg: 'none' }, }}>
              <IconButton onClick={() => toggleShowDrawer(true)} sx={{ color: 'black' }} > <Icon icon="iconoir:menu" width="27" height="27" /></IconButton>
            </Box>
            <Drawer open={drawerOpen} onClose={() => toggleShowDrawer(false)}>
              <MenuContent />
            </Drawer>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Appbar2;
