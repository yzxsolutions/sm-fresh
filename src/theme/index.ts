import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '61px',
      fontWeight: 800,
      color: 'rgba(76, 76, 76, 0.65)',
      fontFamily: 'Montserrat, sans-serif'
    },
    h2: {
      fontSize: '60px',
      fontWeight: 800,
      color: 'rgba(76, 76, 76, 0.65)',
      fontFamily: 'Montserrat, sans-serif'
    },
    h3: {
      fontSize: '45px',
      fontWeight: 800,
      color: 'rgba(76, 76, 76, 0.65)',
      fontFamily: 'Montserrat, sans-serif'
    },
    h4: {
      fontSize: '44px',
      fontWeight: 800,
      color: 'rgba(76, 76, 76, 0.65)',
      fontFamily: 'Montserrat, sans-serif'
    },
    h5: {
      fontSize: '40px',
      fontWeight: 800,
      color: 'rgba(76, 76, 76, 0.65)',
      fontFamily: 'Montserrat, sans-serif'
    },
    h6: {
      fontSize: '39px',
      fontWeight: 800,
      color: 'rgba(76, 76, 76, 0.65)',
      fontFamily: 'Montserrat, sans-serif'
    },
    subtitle1: {
      fontSize: '26px',
      fontWeight: 500,
      fontFamily: 'Montserrat, sans-serif'
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'Montserrat, sans-serif'
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      fontFamily: 'Inter, sans-serif',
      color: '#2d2e2e'
    },
    body2: {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: 'Inter, sans-serif',
      color: '#2d2e2e'
    }
  },
  palette: {
    text: {
      primary: '#2d2e2e',
      secondary: '#2d2e2e'
    }
  },
  shape: {
    borderRadius: 25
  }
});

export default theme;