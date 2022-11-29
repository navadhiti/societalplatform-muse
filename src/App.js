import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout ";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Themes/Typography";

function App() {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Layout />
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
