/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { createTheme } from "@mui/material/styles";

import PALETTE from "./Palette";
import FONT from "./Font";

import Line from "../Assets/Images/Vector 12.png";
import ArrowImage from "../Assets/Images/RightArrow.png";
import Campgain from "../Assets/fonts/CampaignMedium.woff";

const theme = createTheme({
    typography: {
        fontFamily: FONT.FAMILY.ASSISTANT,
        h1: {
            fontFamily: FONT.FAMILY.CAMPAIGN,
            // fontWeight: FONT.WEIGHT.BOLD,
            fontSize: FONT.SIZES[48],
            color: PALETTE.BLACK_SHADE_1,

            "@media (min-width: 320px) and (max-width:375px)": {
                fontSize: FONT.SIZES[24],
            },
        },
        h2: {
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontWeight: FONT.WEIGHT.BOLD,
            fontSize: FONT.SIZES[40],
            color: PALETTE.BLACK,
            marginBottom: "30px",
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[24],
                lineHeight: "25.2px",
            },
        },
        h3: {
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontWeight: FONT.WEIGHT.MEDIUM,
            fontSize: FONT.SIZES[32],
            color: PALETTE.BLACK,
            textTransform: "capitalize",
            lineHeight: "58px",
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[18],
                lineHeight: "25.2px",
            },
        },
        h4: {
            fontWeight: FONT.WEIGHT.REGULAR,
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontSize: FONT.SIZES[24],
            color: "#241C15",
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[14],
                // lineHeight: "25.2px",
            },
        },
        h5: {
            fontFamily: FONT.FAMILY.ASSISTANT,
            fontWeight: FONT.WEIGHT.REGULAR,
            fontSize: FONT.SIZES[18],
            color: PALETTE.BLACK,
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[12],
                lineHeight: "18px",
            },
        },
        h6: {
            fontWeight: FONT.WEIGHT.MEDIUM,
            fontSize: FONT.SIZES[16],
            fontFamily: FONT.FAMILY.ASSISTANT,
            marginBottom: "10px",
        },
        body: {
            fontWeight: FONT.WEIGHT.MEDIUM,
            fontSize: FONT.SIZES[18],
            fontFamily: FONT.FAMILY.ASSISTANT,
            lineHeight: "27px",

            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[12],
                lineHeight: "18px",
            },
        },

        body1: {
            // fontWeight: FONT.WEIGHT.DEMI_BOLD,
            fontSize: FONT.SIZES[14],
            fontFamily: FONT.FAMILY.ASSISTANT,
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[10],
                lineHeight: "18px",
            },
        },
        body2: {
            fontWeight: FONT.WEIGHT.MEDIUM,
            fontSize: FONT.SIZES[12],
            fontFamily: FONT.FAMILY.ASSISTANT,
            // background:` url(${Divider}) bottom no-repeat`,paddingBottom:'20px',backgroundSize: 'contain',
        },
        link: {
            background: ` url(${Line}) bottom no-repeat`,
            fontSize: FONT.SIZES[32],
            fontFamily: FONT.FAMILY.CAMPAIGN,
            lineHeight: "48px",
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[18],
                lineHeight: "25.2px",
            },
        },
        subtitle1: {
            "&:hover": {
                background: ` url(${Line}) bottom no-repeat,`,
                cursor: "pointer",
            },
            fontWeight: FONT.WEIGHT.REGULAR,
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontSize: FONT.SIZES[24],
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[18],
                lineHeight: "25.2px",
            },
        },
        caption: {
            "&:hover": {
                background: ` url(${ArrowImage}) bottom right no-repeat,url(${Line}) bottom no-repeat`,

                cursor: "pointer",
            },
            fontWeight: FONT.WEIGHT.REGULAR,
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontSize: FONT.SIZES[24],
            "@media (max-width:475px)": {
                fontSize: FONT.SIZES[18],
                lineHeight: "25.2px",
            },
        },
        subtitle2: {
            background: ` url(${Line}) bottom no-repeat`,
            fontFamily: FONT.FAMILY.CAMPAIGN,
        },
        overline: {
            // '&:hover': {
            //   background: ` url(${ArrowImage}) bottom right no-repeat`,
            //   backgroundSize: "contain",
            // },
            fontWeight: FONT.WEIGHT.REGULAR,
            fontFamily: FONT.FAMILY.CAMPAIGN,
            fontSize: FONT.SIZES[16],
        },
    },
    palette: {
        primary: {
            main: "#fdfdfd",
            contrastText: "#000",
        },
        secondary: {
            main: "#000",
        },
        success: {
            main: "#935fb0",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontFamily: "Campaign",
                    src: `url(${Campgain}) format("truetype")`,
                },
                body: {
                    color: "#241C15",
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        "&:hover": {
                            boxShadow:
                                "3px 6px 0px -4px rgb(24 12 12 / 99%), 3px 2px 2px 0px rgb(0 0 0 / 98%), 3px 3px 0px 0px rgb(0 0 0 / 95%)",
                        },
                        border: "1px solid black",
                        fontFamily: FONT.FAMILY.INTER,
                        fontSize: FONT.SIZES[12],
                        fontWeight: FONT.WEIGHT.SEMI_BOLD,
                        borderRadius: "25px",
                    },
                },
                {
                    props: { variant: "Menu-btn" },
                    style: {
                        fontFamily: FONT.FAMILY.CAMPAIGN,
                        fontWeight: FONT.WEIGHT.REGULAR,
                        fontSize: FONT.SIZES[18],
                        color: " #241c15",
                        border: "1px solid black",
                        borderRadius: "50px 0px 0px 50px",
                        textAlign: "center",
                    },
                },
                {
                    props: { variant: "audio-btn" },
                    style: {
                        fontFamily: FONT.FAMILY.ASSISTANT,
                        fontWeight: 600,
                        fontSize: FONT.SIZES[16],
                        width: "148px",
                        height: "60px",
                        border: "1.5px solid #241C15",
                        borderRadius: "100px",
                    },
                },
                {
                    props: { variant: "icon-btn" },
                    style: {
                        border: "1.5px solid #241C15",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                    },
                },
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
                        minHeight: "17rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            transform: "rotate(-3deg)",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            transform: "rotate(-3deg)",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            transform: "rotate(-3deg)",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            transform: "rotate(3deg)",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            marginTop: "10px",
                            transform: "rotate(3deg)",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            marginTop: "10px",
                            transform: "rotate(-3deg)",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transform: "rotate(-10deg)",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "5rem 0",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "12rem",
                            marginTop: "10px",
                        },
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
                        minHeight: "20rem",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        // margin:'2.8rem'
                        "@media (max-width:475px)": {
                            minHeight: "10rem",
                            marginTop: "10px",
                        },
                    },
                },
            ],
        },
        MuiCardContent: {
            variants: [
                {
                    props: { variant: "card_content" },
                    style: {
                        transform: "rotate(10deg)",
                    },
                },
                {
                    props: { variant: "card_content1" },
                    style: {
                        transform: "rotate(-10deg)",
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
                            padding: "20px",
                            borderRadius: "25px",
                        },
                    },
                    {
                        props: { variant: "outlined" },
                        style: {
                            border: "1px solid black",
                            fontFamily: FONT.FAMILY.INTER,
                            fontSize: FONT.SIZES[12],
                            fontWeight: FONT.WEIGHT.SEMI_BOLD,
                            borderRadius: "25px",
                            color: "#000",
                        },
                    },
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            minHeight: "20rem",
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
                            padding: "0.6rem",
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
                    backgroundColor: "transpent",
                    boxShadow: "none",
                    //    border:'1px solid',
                },
            },
        },
        MuiTab: {
            variants: [
                {
                    props: { classes: "values" },
                    style: {
                        backgroundColor: "#542385",
                        borderRadius: "0 100% 100% 0",
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        color: "#fdfdfd",
                        // margin:'2.8rem'
                    },
                },
            ],
        },
        MuiTabs: {
            label: [
                {
                    props: { variant: "scrollable" },
                    style: {
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        // margin:'2.8rem'
                    },
                },
            ],
        },
        MuiLink: {
            variants: [
                {
                    props: { classes: "hoverable-item" },
                    style: {
                        display: "none",
                    },
                },
            ],
        },
        MuiTextField: {
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "1.5px solid #241C15",
                        },
                        ".MuiOutlinedInput-root": {
                            borderRadius: "100px !important",
                            width: "23.813rem",
                            // border: '1.5px solid #241C15',
                        },
                    },
                },
            ],
        },
    },
});
export default theme;
