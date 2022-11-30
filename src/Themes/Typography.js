/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { createTheme } from '@mui/material/styles';

import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat';
// Create a theme instance.
const PALETTE = {
    PRIMARY: "#f8f9fa",
    SECONDARY: "#935FB0",
    TERITIARY: "#F5f5f5",
};
const FONT = {
  FAMILY: {
    ASSISTANT: 'Montserrat Alternates',
    INTER: 'Montserrat ',
  },
  SIZES: {
    12: '0.75rem',
    14: '0.9rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    22: '1.375rem',
    24: '1.5rem',
    44: '2.75rem',
    64: '4rem',
  },
  WEIGHT: {
    BOLD: 900,
    SEMI_BOLD: 700,
    DEMI_BOLD: 600,
    MEDIUM: 500,
    REGULAR: 400,
    LIGHT: 300,
  },
};

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat Alternates',
    },
    h1: {
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[64],
      color: PALETTE.BLACK_SHADE_1,
    },
    h2: {
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[44],
      color: PALETTE.SENARY,
      marginBottom: '30px',
    },
    h3: {
      fontWeight: FONT.WEIGHT.SEMI_BOLD,
      fontSize: FONT.SIZES[24],
      color: PALETTE.SENARY,
      textTransform: 'capitalize',
    },
    h4: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[24],
      color: PALETTE.SENARY,
    },
    h5: {
      fontWeight: FONT.WEIGHT.REGULAR,
      fontSize: FONT.SIZES[22],
      color: PALETTE.SENARY,
    },
    h6: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[16],
      fontFamily: FONT.FAMILY.INTER,
      marginBottom: '10px',
    },
    body: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[20],
    },

    body1: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[12],
      fontFamily: FONT.FAMILY.INTER,
    },
    link: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[20],
      lineHeight: '145%',
      color: '#178290',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  palette: {
    primary: {
      main: '##fdfdfd08',
      contrastText: '#000',
    },
    secondary: {
      main: '#485ec4',
    },
    color1: {
      main: '#74788D',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            '&:hover': {
              boxShadow:
                '3px 6px 0px -4px rgb(24 12 12 / 99%), 3px 2px 2px 0px rgb(0 0 0 / 98%), 3px 3px 0px 0px rgb(0 0 0 / 95%)',
            },
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[12],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
          },
        },
      ],
    },
  },
});
export default theme;
