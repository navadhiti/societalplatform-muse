/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { createTheme } from '@mui/material/styles';

import PALETTE from './Palette';
import FONT from './Font';

import Line from '../Assets/Images/Vector 12.png';
// import ArrowImage from '../Assets/Images/image 27.png';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: FONT.FAMILY.ASSISTANT,
    },
    h1: {
      fontFamily: FONT.FAMILY.ASSISTANT,
      // fontWeight: FONT.WEIGHT.BOLD,
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
      fontSize: FONT.SIZES[32],
      color: PALETTE.SENARY,
      textTransform: 'capitalize',
      lineHeight: '48px',
    },
    h4: {
      fontWeight: FONT.WEIGHT.REGULAR,
      fontFamily: FONT.FAMILY.MEDIUM,
      fontSize: FONT.SIZES[24],
      color: '#241C15',
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
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[18],
      fontFamily: FONT.FAMILY.INTER,
      backgroundColor: '#E5E5E5',
    },

    body1: {
      // fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[14],
      fontFamily: FONT.FAMILY.INTER,
      // background:` url(${Divider}) bottom no-repeat`,paddingBottom:'20px',backgroundSize: 'contain',
    },
    body2: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[12],
      fontFamily: FONT.FAMILY.INTER,
      // background:` url(${Divider}) bottom no-repeat`,paddingBottom:'20px',backgroundSize: 'contain',
    },
    link: {
      // '&:hover': {
      //   background: ` url(${Line}) bottom no-repeat`,
      //   cursor:'pointer',
      // },
      // fontWeight: FONT.WEIGHT.REGULAR,
      // fontFamily: FONT.FAMILY.MEDIUM,
      // fontSize: FONT.SIZES[24],
      // color: '#241C15',
      background: ` url(${Line}) bottom no-repeat`,

      fontSize: FONT.SIZES[32],
    },
    Highlight: {
      background: ` url(${Line}) bottom no-repeat`,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    ArrowImage: {
      '&:hover': {
        background: ` url(${Line}) bottom no-repeat`,
        backgroundSize: 'contain',
      },
      fontWeight: FONT.WEIGHT.REGULAR,
      fontFamily: FONT.FAMILY.MEDIUM,
      fontSize: FONT.SIZES[24],
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
            border: '1px solid black',
            fontFamily: FONT.FAMILY.INTER,
            fontSize: FONT.SIZES[24],
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            borderRadius: '120px 120px 20px 20px',
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            minHeight: '15rem',
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
            transform: 'rotate(10deg)',
          },
        },
        {
          props: { variant: 'card_content1' },
          style: {
            transform: 'rotate(-10deg)',
          },
        },
      ],
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        "&:hover": {
                            boxShadow:
                                "3px 6px 0px -4px rgb(24 12 12 / 99%), 3px 2px 2px 0px rgb(0 0 0 / 98%), 3px 3px 0px 0px rgb(0 0 0 / 95%)",
                          
                        },
                        

                        // border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[12],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        padding:'20px',
                        borderRadius: "25px",
                    },
                },
                // {
                //     props: { variant: "text" },
                //     style: {
                //         "&:hover": {
                //             background: ` url(${HoverButton1}) bottom no-repeat`,

                //             backgroundSize: "contain",
                //             // backgroundPosition: 212px 0px, 0px 116px, 0px 0px, 216px 116px;
                //         },
                //         background: ` url(${Button})  no-repeat`,
                //         backgroundSize: "contain",

                //         // border: "1px solid black",
                //         fontFamily: FONT.FAMILY.INTER,
                //         fontSize: FONT.SIZES[12],
                //         fontWeight: FONT.WEIGHT.SEMI_BOLD,

                //         borderRadius: "25px",
                //         // border {
                //         //   height: 100px;
                //         //   width: 200px;
                //         //   background: "linear-gradient('90deg, blue 50%, transparent 50%'), linear-gradient(90deg, blue 50%, transparent 50%), linear-gradient(0deg, blue 50%, transparent 50%), linear-gradient(0deg, blue 50%, transparent 50%)";
                //         //   backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
                //         //   backgroundSize: '16px 4px, 16px 4px, 4px 16px, 4px 16px',
                //         //   backgroundPosition: '0px 0px, 212px 116px, 0px 116px, 216px 0px',
                //         //   padding: '10px',
                //         //   transition: 'backgroundPosition 2s',
                //         // }
                //     },
                // },
            ],
        },
        MuiAppBar: {
            styleOverrides: {
                // props:{classes:"AppBorder"},
                root: {
                    // borderBottom: '1px solid black',
                    paddingTop: "1rem",
                },
            },
        },
        MuiLink: {
            variants: [
                {
                    props: { classes: "Link" },
                    style: {
                        borderBottom: "1px solid black",
                        paddingTop: "1rem",
                        backgroundColor: "red",
                    },
                },
            ],
        },
        MuiCard: {
            variants: [
                {
                    props: { classes: "values" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[24],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        borderRadius: "120px 120px 20px 20px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values_flip" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[14],
                        fontWeight: FONT.WEIGHT.MEDIUM,
                        borderRadius: "120px 120px 20px 20px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values1" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[24],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        borderRadius: "20px 20px 120px 120px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values1_flip" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[14],
                        fontWeight: FONT.WEIGHT.MEDIUM,
                        borderRadius: "20px 20px 120px 120px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values2" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[24],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        borderRadius: "120px 120px 20px 20px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values2_flip" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[14],
                        fontWeight: FONT.WEIGHT.MEDIUM,
                        borderRadius: "120px 120px 20px 20px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values3" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[24],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        borderRadius: "20px 20px 120px 120px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values3_flip" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[14],
                        fontWeight: FONT.WEIGHT.MEDIUM,
                        borderRadius: "20px 20px 120px 120px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values4" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[24],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        borderRadius: "120px 120px 20px 20px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        // margin:'2.8rem'
                    },
                },
                {
                    props: { classes: "values4_flip" },
                    style: {
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[14],
                        fontWeight: FONT.WEIGHT.MEDIUM,
                        borderRadius: "120px 120px 20px 20px",
                        minHeight: "15rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        // margin:'2.8rem'
                    },
                },
            ],
        },
        MuiCardContent: {
            variants: [
                {
                    props: { variant: "card_content" },
                    style: {
                        transform: "rotate(12deg)",
                    },
                },
                {
                    props: { variant: "card_content1" },
                    style: {
                        transform: "rotate(-7deg)",
                    },
                },
                {
                  props: { variant: "card_content2" },
                  style: {
                      transform: "rotate(-10deg)",
                  },
              },
              {
                props: { variant: "card_content3" },
                style: {
                    transform: "rotate(12deg)",
                },
            },
            {
              props: { variant: "card_content4" },
              style: {
                  transform: "rotate(0deg)",
              },
          },
            ],
        },
        MuiBadge: {
            variants: [
                {
                    props: { variant: "tag" },
                    style: {
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[10],
                        fontWeight: FONT.WEIGHT.MEDIUM,
                        backgroundColor: PALETTE.PRIMARY,
                        padding: "0.3rem",
                        margin: "0 0.5rem",
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
  },
});
export default theme;
