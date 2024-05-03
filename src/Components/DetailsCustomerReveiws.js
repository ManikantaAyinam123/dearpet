import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          top: 0,
          bottom: 'unset'
        }
      }
    }
  }
});

const DetailsCustomerReviews = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
          centered
        >
          <Tab sx={{border:'1px solid black'}} label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        {/* Content for each tab */}
        {value === 0 && (
          <Typography component="div" sx={{ p: 3 }}>
            Content for Item One
          </Typography>
        )}
        {value === 1 && (
          <Typography component="div" sx={{ p: 3 }}>
            Content for Item Two
          </Typography>
        )}
        {value === 2 && (
          <Typography component="div" sx={{ p: 3 }}>
            Content for Item Three
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default DetailsCustomerReviews;
