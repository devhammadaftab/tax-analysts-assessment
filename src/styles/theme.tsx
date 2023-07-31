import { createTheme } from '@mui/material';

export const ColorPalette = {
  fontDark: '#1A1A1A',
  fontLight: '#F5F5F5',
  black: '#000000',
};

export const MuiTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },

  palette: {
    primary: {
      main: ColorPalette.black,
    },
    error: {
      main: '#ff3131',
    },
  },
});
