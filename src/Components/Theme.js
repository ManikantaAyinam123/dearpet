import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          top: 0,
          backgroundColor: '#000000',
          bottom: 'unset'
        }
      }
    }
  }
});

export default theme;