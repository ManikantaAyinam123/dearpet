import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Icon } from "@iconify/react";
import { useState } from 'react';

const Appbar2 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleShowDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

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
        <Grid border="1px solid red" item sx={{ marginLeft: 50, display: { xs: 'none' } }} >
          <Box sx={{}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="DOG" {...a11yProps(0)} />
                <Tab label="CAT" {...a11yProps(1)} />
                <Tab label="GROMMING" {...a11yProps(2)} />
                <Tab label="BLOG" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
        </Grid>
        <Grid border="1px solid red" item sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }} >
          <Box sx={{ marginRight: '18px' }}>
            <Icon icon="gridicons:search" width="27" height="27" />
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'block', marginRight: '18px' } }}>
            <Icon icon="pajamas:user" width="23" height="23" />
          </Box>
          <Box sx={{ marginRight: { xs: '18px', lg: '100px' } }}>
            <Icon icon="flowbite:shopping-bag-outline" width="27" height="27" />
          </Box>
          <Box sx={{ marginRight: { xs: '20px' }, display: { lg: 'none' } }}>
            <Icon icon="iconoir:menu" width="27" height="27" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Appbar2;
