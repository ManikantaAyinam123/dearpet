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
import DummyMenuContent from './DummyMenuContent';


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


  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;

  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>
      <Grid container marginTop={'50px'} display="flex" border="1px solid red" direction="row" boxShadow={3} padding={'5px'}>
        <Grid border="1px solid red" item sx={{ marginLeft: { xs: 3 } }}>
          <Box component="img" src="https://dearpet.in/cdn/shop/files/logo.png?v=1617976255" sx={{ width: { xs: 30, lg: 45 }, height: { xs: 30, lg: 45 }, marginRight: 0 }} alt="logo" />
        </Grid>


        <Grid border="1px solid red" item sx={{ marginLeft: 50, display: { xs: 'none', lg: 'block' } }} >
          <Box sx={{}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={-1} aria-label="basic tabs example"> 
                <Tab label="DOG" onMouseOver={() => handleTabMouseOver(0)} onMouseOut={handleTabMouseOut} />
                <Tab label="CAT" onMouseOver={() => handleTabMouseOver(1)} onMouseOut={handleTabMouseOut} />
                <Tab label="GROMMING" onMouseOver={() => handleTabMouseOver(2)} onMouseOut={handleTabMouseOut} />
                <Tab label="BLOG" onMouseOver={() => handleTabMouseOver(3)} onMouseOut={handleTabMouseOut} />
              </Tabs>
            </Box>
          </Box>
        </Grid>

       
        <Grid item>
          {hoveredTab !== -1 && (
            <Box
              sx={{
                position: 'absolute',
                top: 'calc(100% + 5px)', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                backgroundColor: 'white',
                border: '1px solid #ccc',
                padding: '10px',
                zIndex: 1, 
              }}
            >
          
              {hoveredTab === 0 && <Typography>Item One</Typography>}
              {hoveredTab === 1 && <Typography>Item Two</Typography>}
              {hoveredTab === 2 && <Typography>Item Three</Typography>}
              {hoveredTab === 3 && <Typography>Item Four</Typography>}
            </Box>
          )}
        </Grid>


        <Grid border="1px solid red" item sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }} >
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
