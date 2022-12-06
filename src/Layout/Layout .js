import { Container } from "@mui/system";
import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Pages/Home";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/Typography";
const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <Container> */}
                    {/* <Header /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    {/* <Footer /> */}
                {/* </Container> */}
           
            </ThemeProvider>
        </>
    );
};
export default Layout;
