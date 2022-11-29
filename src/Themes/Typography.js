/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
 import { createTheme } from "@mui/material/styles";
 import PALETTE from "./Palette";
 import "@fontsource/montserrat-alternates"; 
// Create a theme instance.
// export const PALETTE = {
//     PRIMARY: "#f8f9fa",
//     SECONDARY: "#1f95f4",
//     TERITIARY: "#F5f5f5",
// };
const FONT = {
    FAMILY: {
        ASSISTANT: "Montserrat Alternates",
        INTER: "Montserrat Alternates",
    },
    SIZES: {
        12: "0.75rem",
        14: "0.9rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        44: "2.75rem",
        64: "4rem",
    },
    WEIGHT: {
        BOLD: 800,
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
            fontFamily: "Montserrat Alternates",
        },
        h1: {
            fontWeight: FONT.WEIGHT.BOLD,
            fontSize: FONT.SIZES[64],
            color: PALETTE.BLACK_SHADE_1,
            lineHeight: "115%",
        },
        h2: {
            fontWeight: FONT.WEIGHT.BOLD,
            fontSize: FONT.SIZES[44],
            color: PALETTE.SENARY,
            lineHeight: "115%",
        },
        h3: {
            fontWeight: FONT.WEIGHT.SEMI_BOLD,
            fontSize: FONT.SIZES[24],
            color: PALETTE.SENARY,
            textTransform: "capitalize",
            lineHeight: "144%",
        },
        h4: {
            fontWeight: FONT.WEIGHT.DEMI_BOLD,
            fontSize: FONT.SIZES[24],
            lineHeight: "144%",
            color: PALETTE.SENARY,
        },
        h5: {
            fontWeight: FONT.WEIGHT.REGULAR,
            fontSize: FONT.SIZES[22],
            color: PALETTE.SENARY,
            lineHeight: "130%",
        },
        //for welcome screen data and stepper first page
        h6: {
            fontWeight: FONT.WEIGHT.DEMI_BOLD,
            fontSize: FONT.SIZES[20],
            lineHeight: "145%",

            fontWeight: 600,
        },
        body:{
            fontWeight: FONT.WEIGHT.DEMI_BOLD,
            fontSize: FONT.SIZES[16],
            lineHeight: "145%",

            fontWeight: 500,
        },
        link: {
            fontWeight: FONT.WEIGHT.DEMI_BOLD,
            fontSize: FONT.SIZES[20],
            lineHeight: "145%",
            color: "#178290",
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "none",
        },
    },})
export default theme;