import { ThemeOptions } from '@material-ui/core';

const materialUiCustomerStyle: ThemeOptions = {
  overrides: {
    MuiSlider: {
      valueLabel: {
        fontSize: '1.5rem',
      },
    },
    MuiTypography: {
      subtitle1: {
        fontSize: '1.25rem',
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '1.25rem',
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: '2.5rem',
      },
    },

    MuiFormLabel: {
      root: {
        fontSize: '2rem',
        paddingBottom: '5px',
        marginBottom: '1rem',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '75px',
        fontSize: '1.25rem',
        padding: '1.2rem 2.4rem 1.2rem 2.4rem',
        margin: '1rem 0.5rem 1rem 0.5rem',
      },
      contained: {
        borderRadius: '75px',
        fontSize: '1.25rem',
        padding: '1.2rem 2.4rem 1.2rem 2.4rem',
        margin: '1rem 0.5rem 1rem 0.5rem',
      },
      outlined: {
        borderRadius: '75px',
        fontSize: '1.25rem',
        padding: '1.2rem 2.4rem 1.2rem 2.4rem',
        margin: '1rem 0.5rem 1rem 0.5rem',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '1.4rem',
      },
    },
    MuiStepIcon: {
      root: {
        fontSize: '3rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#f91942',
    },
    secondary: {
      main: '#b3d4fc',
    },
  },
  typography: {
    fontFamily: ['Railway', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
      ',',
    ),
  },
};

export { materialUiCustomerStyle };
