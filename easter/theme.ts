'use client';
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { Themes } from 'jrgcomponents/types/Theming';
const baseTheme = {
  //Components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          fontSize: '14px',
          fontFamily: 'Encode Sans Semi Expanded, Arial, sans-serif',
          textTransform: 'capitalize' as const
        }
      }
    }
  },
  // Anything that you override from here https://mui.com/material-ui/customization/dark-mode/ needs to also be overridden in dark or it won't be applied.
  palette: {
    colorblind: false,
    primary: {
      light: '#F2EBFF',
      main: '#e0cdff',
      dark: '#751FFF'
    },
    secondary: {
      light: '#E8FBC6',
      main: '#dcf9a8',
      dark: '##588609'
    },
    error: {
      light: '#F6998D',
      main: '#F15946',
      dark: '#E42A11'
    },
    info: {
      light: '#D9F6FD',
      main: '#c1f0fb',
      dark: '#0C9FC0'
    },
    warning: {
      light: '#FFF0C2',
      main: '#ffebaf',
      dark: '#E0A800'
    },
    success: {
      light: '#E8FBC6',
      main: '#dcf9a8',
      dark: '#436436'
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '1rem',
      fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '1.5rem'
      }
    },
    body1: {
      fontSize: '0.75rem'
    },
    button: {
      fontWeight: 'bold',
      fontSize: '14px'
    }
  }
};
const darkOverrides = {
  palette: {
    mode: 'dark'
  }
};
const colorblindPalette = {
  light: '#CCC',
  main: '#999',
  dark: '#333'
};
const colorblindOverrides = {
  palette: {
    colorblind: true,
    primary: {
      ...colorblindPalette
    },
    secondary: {
      ...colorblindPalette
    },
    error: {
      ...colorblindPalette
    },
    success: {
      ...colorblindPalette
    },
    info: {
      ...colorblindPalette
    }
  }
};
export const themeLight = createTheme(baseTheme);
export const themeDark = createTheme(deepmerge(baseTheme, darkOverrides));
export const themeLightColorblind = createTheme(deepmerge(baseTheme, colorblindOverrides));
export const themeDarkColorblind = createTheme(deepmerge(deepmerge(baseTheme, darkOverrides), colorblindOverrides));
const themes = {
  light: themeLight,
  dark: themeDark,
  lightColorblind: themeLightColorblind,
  darkColorblind: themeDarkColorblind
} as Themes;
export default themes;
