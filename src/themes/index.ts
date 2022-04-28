import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { layoutVariables } from '@/constants/variables';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up(600)]: {
            minHeight: layoutVariables.headerHeight,
          },
        }),
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
