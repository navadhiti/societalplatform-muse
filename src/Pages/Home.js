import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div>
            <Container fixed>
                <Header />
                <Footer />
            </Container>
        </div>
    );
};

export default Home;
