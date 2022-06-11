// import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';
// import { layoutVariables } from '@/constants/variables';

// // Create a theme instance.
// const theme = createTheme({
//   components: {
//     MuiToolbar: {
//       styleOverrides: {
//         root: ({ theme }) => ({
//           [theme.breakpoints.up(600)]: {
//             minHeight: layoutVariables.headerHeight,
//           },
//         }),
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// export default theme;
import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material'

import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'

const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { mode, themeColor } = settings

  const themeConfig = {
    palette: palette(mode, themeColor),
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    shadows: shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 64
      }
    }
  }

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette[themeColor]
      }
    }
  })
}

export default themeOptions
