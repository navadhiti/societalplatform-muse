/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { createTheme } from '@mui/material/styles';

import PALETTE from './Palette';
import FONT from './Font';

import Line from '../Assets/Images/Vector 6.png';
import UnderLine from '../Assets/Images/Vector 12.png';
import ArrowImage from '../Assets/Images/RightArrow.png';
import Campgain from '../Assets/fonts/CampaignMedium.woff';
// import Campgain from '../Assets/fonts/Campaign-Normal.ttf';
//

const theme = createTheme({
  typography: {
    fontFamily: FONT.FAMILY.ASSISTANT,
    h1: {
      fontFamily: FONT.FAMILY.CAMPAIGN,
      // fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[48],
      color: PALETTE.BLACK_SHADE_1,

      '@media (min-width: 320px) and (max-width:550px)': {
        fontSize: FONT.SIZES[32],
      },
    },
    h2: {
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontWeight: FONT.WEIGHT.BOLD,
      fontSize: FONT.SIZES[40],
      color: PALETTE.BLACK,
      marginBottom: '30px',
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[24],
        lineHeight: '25.2px',
      },
    },
    h3: {
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[32],
      color: PALETTE.BLACK,
      // textTransform: 'capitalize',
      lineHeight: '48px',
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[18],
        lineHeight: '25.2px',
      },
    },
    h4: {
      fontWeight: FONT.WEIGHT.REGULAR,
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontSize: FONT.SIZES[24],
      color: '#241C15',
      letterSpacing: '1px',

      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[14],
        // lineHeight: "25.2px",
      },
    },
    h5: {
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.REGULAR,
      fontSize: FONT.SIZES[18],
      color: PALETTE.BLACK,
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[12],
        lineHeight: '18px',
      },
    },
    h6: {
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[16],
      fontFamily: FONT.FAMILY.ASSISTANT,
      marginBottom: '10px',
    },
    body: {
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[18],
      fontFamily: FONT.FAMILY.ASSISTANT,
      lineHeight: '27px',
      letterSpacing: '1px',

      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[12],
        lineHeight: '18px',
      },
    },

    body1: {
      // fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[14],
      fontFamily: FONT.FAMILY.ASSISTANT,
      color: '#000',
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[10],
        lineHeight: '18px',
      },
    },
    body2: {
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[12],
      fontFamily: FONT.FAMILY.ASSISTANT,
    },
    link: {
      background: ` url(${Line}) bottom no-repeat`,
      fontSize: FONT.SIZES[32],
      fontFamily: FONT.FAMILY.CAMPAIGN,
      lineHeight: '48px',
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[18],
        background: ` url(${UnderLine}) bottom no-repeat,`,
        backgroundSize: 'contain',

        lineHeight: '25.2px',
      },
    },
    subtitle1: {
      '&:hover': {
        background: ` url(${Line}) bottom no-repeat,`,
        cursor: 'pointer',
      },
      fontWeight: FONT.WEIGHT.REGULAR,
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontSize: FONT.SIZES[24],
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[18],
        background: ` url(${UnderLine}) bottom no-repeat,`,
        backgroundSize: 'contain',
        lineHeight: '25.2px',
      },
    },
    caption: {
      '&.ActiveClass': {
        background: ` url(${ArrowImage}) bottom right no-repeat,url(${UnderLine}) bottom no-repeat`,
        opacity: 1,
        cursor: 'pointer',
      },

      fontWeight: FONT.WEIGHT.REGULAR,
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontSize: FONT.SIZES[24],
      opacity: 0.2,
      '@media (max-width:990px)': {
        '&.ActiveClass': {
          background: ` none`,
          opacity: 1,
          cursor: 'pointer',
        },
        opacity: 1,
      },
      '@media (max-width:550px)': {
        '&.ActiveClass': {
          background: ` none`,
          opacity: 1,
          cursor: 'pointer',
        },
        opacity: 1,
        fontSize: FONT.SIZES[18],
        lineHeight: '25.2px',
      },
    },
    subtitle2: {
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontWeight: FONT.WEIGHT.REGULAR,

      fontSize: FONT.SIZES[20],
      color: '#241C15',
      '@media (max-width:550px)': {
        fontSize: FONT.SIZES[16],
        // lineHeight: "25.2px",
      },
    },
    overline: {
      // '&:hover': {
      //   background: ` url(${ArrowImage}) bottom right no-repeat`,
      //   backgroundSize: "contain",
      // },
      fontWeight: FONT.WEIGHT.REGULAR,
      fontFamily: FONT.FAMILY.CAMPAIGN,
      fontSize: FONT.SIZES[16],
      letterSpacing: '4px',
    },
  },
  palette: {
    primary: {
      main: '#fdfdfd',
      contrastText: '#000',
    },
    secondary: {
      main: '#000',
    },
    success: {
      main: '#935fb0',
    },
    action: {
      main: '#E5E5E5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Campaign',
          src: `url(${Campgain}) format("truetype")`,
        },
        body: {
          color: '#241C15',
        },
      },
    },
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
        {
          props: { variant: 'Menu-btn' },
          style: {
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontWeight: FONT.WEIGHT.REGULAR,
            fontSize: FONT.SIZES[18],
            color: ' #241c15',
            border: '1px solid black',
            borderRadius: '50px 0px 0px 50px',
            textAlign: 'center',
          },
        },
        {
          props: { variant: 'audio-btn' },
          style: {
            fontFamily: FONT.FAMILY.ASSISTANT,
            fontWeight: 600,
            fontSize: FONT.SIZES[16],
            width: '9.25rem',
            height: '3rem',
            border: '1.5px solid #241C15',
            borderRadius: '100px',
          },
        },
        {
          props: { variant: 'icon-btn' },
          style: {
            border: '1.5px solid #241C15',
            borderRadius: '50%',
            width: '3.7rem',
            height: '3.7rem',
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
          paddingBottom: '1.1rem',
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { classes: 'value_card' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            minHeight: '17rem',
            alignItems: 'center',
            padding: '5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '@media (max-width:550px)': {
              minHeight: '12rem',
              marginTop: '10px',
            },
          },
        },

        {
          props: { classes: 'values' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(-4deg)',
            // margin:'2.8rem'
            '@media (max-width:550px)': {
              minHeight: '12rem',
              transform: 'rotate(-3deg)',
              marginTop: '10px',
            },
          },
        },
        {
          props: { classes: 'values_flip' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[14],
            fontWeight: FONT.WEIGHT.MEDIUM,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(-4deg)',

            // margin:'2.8rem'
          },
        },
        {
          props: { classes: 'values1' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            borderRadius: '20px 20px 120px 120px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(7deg)',

            '@media (max-width:550px)': {
              minHeight: '12rem',
              transform: 'rotate(-3deg)',
              marginTop: '10px',
            },
          },
        },
        {
          props: { classes: 'values1_flip' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[14],
            fontWeight: FONT.WEIGHT.MEDIUM,
            borderRadius: '20px 20px 120px 120px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(7deg)',
            '@media (max-width:550px)': {
              // minHeight: "12rem",
              transform: 'rotate(3deg)',
              marginTop: '10px',
            },
          },
        },
        {
          props: { classes: 'values2' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(4deg)',

            // margin:'2.8rem'
            '@media (max-width:550px)': {
              minHeight: '12rem',
              marginTop: '10px',
              transform: 'rotate(3deg)',
            },
          },
        },
        {
          props: { classes: 'values2_flip' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[14],
            fontWeight: FONT.WEIGHT.MEDIUM,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(4deg)',
            // margin:'2.8rem'
            '@media (max-width:550px)': {
              minHeight: '12rem',
              marginTop: '10px',
              transform: 'rotate(-3deg)',
            },
          },
        },
        {
          props: { classes: 'values3' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            borderRadius: '20px 20px 120px 120px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(-6deg)',
            // marginTop: "10rem",
            // margin:'2.8rem'
            '@media (max-width:550px)': {
              minHeight: '12rem',
              marginTop: '10px',
            },
          },
        },
        {
          props: { classes: 'values3_flip' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[14],
            fontWeight: FONT.WEIGHT.MEDIUM,
            borderRadius: '20px 20px 120px 120px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(-6deg)',
            // marginTop: "12rem",

            // margin:'2.8rem'
            '@media (max-width:550px)': {
              minHeight: '12rem',
              marginTop: '10px',
            },
          },
        },
        {
          props: { classes: 'values4' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '17rem',
            disply: 'flex !important',
            justifyContent: 'center !important',
            alignItems: 'center !important',
            verticalAlign: 'center',
            padding: '5rem 0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '@media (max-width:550px)': {
              minHeight: '12rem',
              marginTop: '10px',
            },
          },
        },
        {
          props: { classes: 'values4_flip' },
          style: {
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[14],
            fontWeight: FONT.WEIGHT.MEDIUM,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '17rem',
            alignItems: 'center',
            padding: '1.3rem 1rem',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            // margin:'2.8rem'
            '@media (max-width:550px)': {
              minHeight: '10rem',
              marginTop: '10px',
            },
          },
        },
      ],
    },
    MuiCardContent: {
      variants: [
        {
          props: { variant: 'card_content1' },
          style: {
            transform: 'rotate(3deg)',
          },
        },
        {
          props: { variant: 'card_content_flip1' },
          style: {
            transform: 'rotate(0deg)',
          },
        },
        {
          props: { variant: 'card_content2' },
          style: {
            transform: 'rotate(-5deg)',
          },
        },
        {
          props: { variant: 'card_content_flip2' },
          style: {
            transform: 'rotate(-5deg)',
          },
        },
        {
          props: { variant: 'card_content3' },
          style: {
            transform: 'rotate(-4deg)',
          },
        },
        {
          props: { variant: 'card_content_flip3' },
          style: {
            transform: 'rotate(-10deg)',
          },
        },
        {
          props: { variant: 'card_content4' },
          style: {
            transform: 'rotate(5deg)',
          },
        },
        {
          props: { variant: 'card_content_flip4' },
          style: {
            transform: 'rotate(5deg)',
          },
        },
        {
          props: { variant: 'card_content5' },
          style: {
            transform: 'rotate(0deg)',
          },
        },
        {
          props: { variant: 'card_content_flip1' },
          style: {
            transform: 'rotate(10deg)',
          },
        },
      ],
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

              // border: "1px solid black",
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[12],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              padding: '20px',
              borderRadius: '25px',
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[12],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              borderRadius: '25px',
              color: '#000',
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
      MuiLink: {
        variants: [
          {
            props: { classes: 'Link' },
            style: {
              borderBottom: '1px solid black',
              paddingTop: '1rem',
              backgroundColor: 'red',
            },
          },
        ],
      },
      MuiCard: {
        variants: [
          {
            props: { classes: 'values' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[24],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              borderRadius: '120px 120px 20px 20px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '5rem 0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(-10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values_flip' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[14],
              fontWeight: FONT.WEIGHT.MEDIUM,
              borderRadius: '120px 120px 20px 20px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(-10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values1' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[24],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              borderRadius: '20px 20px 120px 120px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '5rem 0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values1_flip' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[14],
              fontWeight: FONT.WEIGHT.MEDIUM,
              borderRadius: '20px 20px 120px 120px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values2' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[24],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              borderRadius: '120px 120px 20px 20px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '5rem 0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values2_flip' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[14],
              fontWeight: FONT.WEIGHT.MEDIUM,
              borderRadius: '120px 120px 20px 20px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values3' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[24],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              borderRadius: '20px 20px 120px 120px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '5rem 0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(-10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values3_flip' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[14],
              fontWeight: FONT.WEIGHT.MEDIUM,
              borderRadius: '20px 20px 120px 120px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transform: 'rotate(-10deg)',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values4' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[24],
              fontWeight: FONT.WEIGHT.SEMI_BOLD,
              borderRadius: '120px 120px 20px 20px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '5rem 0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              // margin:'2.8rem'
            },
          },
          {
            props: { classes: 'values4_flip' },
            style: {
              border: '1px solid black',
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[14],
              fontWeight: FONT.WEIGHT.MEDIUM,
              borderRadius: '120px 120px 20px 20px',
              minHeight: '20rem',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              // margin:'2.8rem'
            },
          },
        ],
      },
      MuiCardContent: {
        variants: [
          {
            props: { variant: 'card_content' },
            style: {
              transform: 'rotate(12deg)',
            },
          },
          {
            props: { variant: 'card_content1' },
            style: {
              transform: 'rotate(-7deg)',
            },
          },
          {
            props: { variant: 'card_content2' },
            style: {
              transform: 'rotate(-10deg)',
            },
          },
          {
            props: { variant: 'card_content3' },
            style: {
              transform: 'rotate(12deg)',
            },
          },
          {
            props: { variant: 'card_content4' },
            style: {
              transform: 'rotate(0deg)',
            },
          },
        ],
      },
      MuiChip: {
        variants: [
          {
            props: { variant: 'tag' },
            style: {
              fontFamily: FONT.FAMILY.INTER,
              fontSize: FONT.SIZES[10],
              fontWeight: FONT.WEIGHT.MEDIUM,
              backgroundColor: PALETTE.PRIMARY,
              padding: '0.6rem',
              margin: '0 0.5rem',
            },
          },
        ],
      },
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
    MuiLink: {
      variants: [
        {
          props: { classes: 'hoverable-item' },
          style: {
            display: 'none',
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '.MuiOutlinedInput-root': {
              borderRadius: '100px !important',
              border: '1.5px solid #241C15',
              height: '3rem',
              width: '23.813rem',
            },
          },
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'middle' },
          style: {
            marginLeft: '0px',
            marginRight: '60px',
            borderStyle: 'dotted',
            borderColor: 'black',
          },
        },
      ],
    },
    MuiCircularProgress: {
      variants: [
        {
          props: { variant: 'determinate' },
          style: {
            '&.MuiCircularProgress-root': {
              width: '6.8rem !important',
              height: '6.8rem !important',
            },
            '&.MuiCircularProgress-colorPrimary': {
              color: 'blue !important',
            },
          },
        },
      ],
    },
  },
});
export default theme;
