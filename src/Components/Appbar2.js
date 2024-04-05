import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Icon } from "@iconify/react";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container display="flex" border="1px solid red" direction="row" marginTop='50px' boxShadow={3} padding={'5px'}>
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
        <Grid border="1px solid red" item sx={{ marginLeft: 'auto', marginRight: '20px' }} >
          <Icon icon="gridicons:search" width="25" height="25"> </Icon>
          <Icon sx={{marginRight:'5px'}} icon="flowbite:shopping-bag-outline" width="25" height="25" />
          <Icon marginRight='30px' icon="grommet-icons:menu" width="25" height="25" />

        </Grid>
      </Grid>

    </>
  );
}

