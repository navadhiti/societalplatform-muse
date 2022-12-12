/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { createTheme } from '@mui/material/styles';

import PALETTE from './Palette';
import FONT from './Font';

// import Divider from '../Assets/Images/Divider.png'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: FONT.FAMILY.ASSISTANT,
    },
    h1: {
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[48],
      color: PALETTE.BLACK_SHADE_1,
    },
    h2: {
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[40],
      color: PALETTE.SENARY,
      marginBottom: '30px',
    },
    h3: {
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[30],
      color: PALETTE.SENARY,
      textTransform: 'capitalize',
    },
    h4: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontFamily: FONT.FAMILY.MEDIUM,
      fontSize: FONT.SIZES[24],
      color: PALETTE.SENARY,
    },
    h5: {
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.REGULAR,
      fontSize: FONT.SIZES[18],
      color: PALETTE.SENARY,
    },
    h6: {
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[16],
      fontFamily: FONT.FAMILY.INTER,
      marginBottom: '10px',
    },
    body: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[18],
      fontFamily: FONT.FAMILY.INTER,
    },

    body1: {
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[14],
      fontFamily: FONT.FAMILY.INTER,
      // background:` url(${Divider}) bottom no-repeat`,paddingBottom:'20px',backgroundSize: 'contain',
    },
    body2: {
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[12],
      fontFamily: FONT.FAMILY.INTER,
      // background:` url(${Divider}) bottom no-repeat`,paddingBottom:'20px',backgroundSize: 'contain',
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

            borderRadius: '25px',
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        // props:{classes:"AppBorder"},
        root: {
          // borderBottom: '1px solid black',
          paddingTop: '1rem',
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { classes: 'values' },
          style: {
            '&:hover': {
              boxShadow:
                '3px 6px 0px -4px rgb(24 12 12 / 99%), 3px 2px 2px 0px rgb(0 0 0 / 98%), 3px 3px 0px 0px rgb(0 0 0 / 95%)',
            },
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[16],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            boxShadow:
              '0px 6px 0px -4px rgb(24 12 12 / 99%), 0px 2px 2px 0px rgb(0 0 0 / 98%), 0px 8px 0px 0px rgb(0 0 0 / 95%)',
            borderRadius: '10px',
            minHeight: '12rem',
            alignItems: 'center',
            padding: '4.5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            // margin:'2.8rem'
          },
        },
        {
          props: { classes: 'values1' },
          style: {
            '&:hover': {
              boxShadow:
                '3px 6px 0px -4px rgb(24 12 12 / 99%), 3px 2px 2px 0px rgb(0 0 0 / 98%), 3px 3px 0px 0px rgb(0 0 0 / 95%)',
            },
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[14],
            fontWeight: FONT.WEIGHT.MEDIUM,
            boxShadow:
              '0px 6px 0px -4px rgb(24 12 12 / 99%), 0px 2px 2px 0px rgb(0 0 0 / 98%), 0px 8px 0px 0px rgb(0 0 0 / 95%)',
            borderRadius: '10px',
            minHeight: '12rem',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#ECE4EF',
            cursor: 'pointer',
            // margin:'2.8rem'
          },
        },
      ],
    },
    MuiBadge: {
      variants: [
        {
          props: { variant: 'tag' },
          style: {
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[10],
            fontWeight: FONT.WEIGHT.MEDIUM,
            backgroundColor: PALETTE.PRIMARY,
            padding: '0.3rem',
            margin: '0 0.5rem',
          },
        },
      ],
    },
    MuiSpeedDial: {
      styleOverrides: {
        // props:{classes:"AppBorder"},
        root: {
          backgroundColor: 'transpent',
          boxShadow: 'none',
          //    border:'1px solid',
        },
      },
    },
    MuiTab: {
      variants: [
        {
          props: { classes: 'values' },
          style: {
            backgroundColor: '#542385',
            borderRadius: '0 100% 100% 0',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            color: '#fdfdfd',
            // margin:'2.8rem'
          },
        },
      ],
    },
    MuiTabs: {
      label: [
        {
          props: { variant: 'scrollable' },
          style: {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            // margin:'2.8rem'
          },
        },
      ],
    },
  },
});
export default theme;
