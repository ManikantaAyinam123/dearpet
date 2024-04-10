import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Drawer, Grid, Menu } from '@mui/material';
import { Icon } from "@iconify/react";
import { useState } from 'react';
import Authentication from './Authentication';
import MenuContent from './MenuContent';
import Dog from './Dog';
import Cat from './Cat';
import '../App.css';



const Appbar2 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(-1);
  const toggleShowDrawer = (value: boolean) => {
    setDrawerOpen(value);
  }
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const toggleUserDrawer = (value2: boolean) => {
    setUserDrawerOpen(value2);
  }
  const handleTabMouseOver = (index: number) => {
    setHoveredTab(index);
  };

  const handleTabMouseOut = () => {
    setHoveredTab(-1);
  };







  return (
    <>
      <Grid container backgroundColor={'#FFFFFF'} display="flex" direction="row" boxShadow={3} padding={'5px'} sx={{ marginTop: { xs: '40px', sm: '30px', md: '40px' } }}  >
        <Grid item sx={{ marginLeft: { xs: 4, lg: 10 } }}   >
          <Box component="img" src="https://dearpet.in/cdn/shop/files/logo.png?v=1617976255" sx={{ width: { xs: 30, lg: 45 }, height: { xs: 30, lg: 45 }, marginRight: 0 }} alt="logo" />
        </Grid>


        <Grid item sx={{ marginLeft: 45, display: { xs: 'none', lg: 'block' }, padding: 0 }} onMouseLeave={handleTabMouseOut}  >
          <Box sx={{ position: 'relative', }}  >
            <Box >
              <Tabs value={-1} aria-label="basic tabs example" >
                <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="DOG" onMouseOver={() => handleTabMouseOver(0)} />
                <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="CAT" onMouseOver={() => handleTabMouseOver(1)} />
                <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="GROOMING" onMouseOver={() => handleTabMouseOver(2)} />
                <Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="BLOG" onMouseOver={() => handleTabMouseOver(3)} />
              </Tabs>
            </Box>
            {(hoveredTab === 0 || hoveredTab === 1) && (
              <Box
                sx={{
                  position: 'fixed',
                  top: '110px',
                  left: 0,
                  width: '100%',
                  backgroundColor: 'white',
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
          <Box sx={{ marginRight: '18px' }}>
            <Icon icon="gridicons:search" width="27" height="27" />
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'block', marginRight: '18px' } }}>
            <Button onClick={() => toggleUserDrawer(true)}> <Icon icon="pajamas:user" width="23" height="23" /> </Button>
          </Box>
          <Drawer anchor="right" open={userDrawerOpen} onClose={() => toggleUserDrawer(false)}>

            <Authentication />
          </Drawer>
          <Box sx={{ marginRight: { xs: '18px', lg: '100px' } }}>
            <Icon icon="flowbite:shopping-bag-outline" width="27" height="27" />
          </Box>
          <Box sx={{ marginRight: { xs: '20px' }, display: { lg: 'none' } }}>

            <Button onClick={() => toggleShowDrawer(true)}><Icon icon="iconoir:menu" width="27" height="27" /></Button>

          </Box>
          <Drawer open={drawerOpen} onClose={() => toggleShowDrawer(false)}>
            <MenuContent />
          </Drawer>

        </Grid>
      </Grid>
    </>
  );
}

export default Appbar2;
