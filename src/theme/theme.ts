import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22c55e', // Keep existing green
    },
    secondary: {
      main: '#e03c00', // Orange/red from the Fresh text
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    text: {
      primary: '#000000',
      secondary: '#000000'
    }
  },
  typography: {
    fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: 'Smooch, cursive',
      fontSize: '442px',
      fontWeight: 400,
      letterSpacing: '48.62px',
      color: '#e03c00'
    },
    h2: {
      fontFamily: 'SF Pro, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
      fontSize: '21px',
      fontWeight: 860,
      letterSpacing: '2.31px'
    },
    body1: {
      fontFamily: 'SF Pro, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
      fontSize: '17px',
      fontWeight: 860,
      letterSpacing: '1.87px'
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '16px',
      fontWeight: 800,
      textTransform: 'none'
    }
  }
});

export default theme;