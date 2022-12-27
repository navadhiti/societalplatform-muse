// import { Container } from '@mui/system';
import React, { useEffect, useState } from "react";
import {
    useNavigate,
    Route,
    Routes,
    HashRouter as Router,
    ReactDOM,
} from "react-router-dom";
import StickyBox from "react-sticky-box";
import { useLocation } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import { GRID11 } from "../Themes/StyledComponent";
// import "../Assets/scrollbar.scss";
// import Stories from '../Components/Stories';

import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/Theme";

import { Box, Grid, List, ListItem, ListItemButton } from "@mui/material";
import LandingImage from "../Assets/Images/sp-muse-read-banner-04 2.png";
import Image from "../Assets/Images/sp-musebook-design.png";
import Image1 from "../Assets/Images/image_4.png";

import PropTypes from "prop-types";
import Indi_Article from "../Pages/Indi_Article";
import All_Articles from "../Pages/All_Articles";
import PALETTE from "../Themes/Palette";
import Authors from "../Pages/Authors";
import database from "../db.json";
import Share from "../Pages/Share";
import Loader from "../Components/loader";
import Experince from "../Pages/Experince";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const location = useLocation();
    // const path = location.pathname;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const Layout = () => {
    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);
    const buttonHeight = `calc(90vh/5)`;
    const padding = `calc(4.5vh) calc(4.5vh) calc(4.5vh) calc(3.5vh)`;
    const buttonName = database.menu;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://tm.navadhiti.com/wp-json/wp/v2/posts/3059")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setTimeout(() => {
                  setLoading(false);
              }, 4000);
            })
            .catch((e) => setError(e));
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <ThemeProvider theme={theme}>
                        {/* <Container> */}
                        <Header />

                        <Box sx={{ mt: 0, mb: 5, px: { xs: 0, sm: 0, md: 5 } }}>
                            <Grid
                                container
                                spacing={0}
                                justifyContent="center"
                                alignItems="start"
                                sx={{ pt: 0 }}
                            >
                                {/* <GRID11> */}
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={11}
                                    lg={11}
                                    sx={{ textAlign: "center" }}
                                >
                                    <Box>
                                        <TabPanel
                                            value={value}
                                            index={0}
                                            style={{
                                                overflowY: "auto",
                                                borderRadius:
                                                    "30px 30px 30px 30px ",
                                            }}
                                            className="body"
                                        >
                                            <Grid
                                                container
                                                spacing={0}
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Grid
                                                    item
                                                    xs={1}
                                                    sm={1}
                                                    md={1}
                                                    lg={1}
                                                    sx={{
                                                        position: "fixed",
                                                        marginTop: "-1.6rem",
                                                        marginLeft: "2rem",
                                                        zIndex: 9999,
                                                        display: {
                                                            xs: "none",
                                                            sm: "block",
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        src={Image1}
                                                        alt="img"
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={1}
                                                    sm={1}
                                                    md={1}
                                                    lg={1}
                                                    sx={{
                                                        position: "fixed",
                                                        marginTop: "7rem",
                                                        marginLeft: "76%",
                                                        display: {
                                                            xs: "none",
                                                            sm: "block",
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        src={LandingImage}
                                                        alt="img"
                                                        sx={{
                                                            position: "fixed",
                                                            marginTop: "3rem",
                                                            marginLeft: "90%",
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Routes>
                                                <Route
                                                    path="/"
                                                    element={<Home />}
                                                />
                                                <Route
                                                    path="/indiviual-articles"
                                                    element={<Indi_Article />}
                                                />
                                                <Route
                                                    path="/articles"
                                                    element={<All_Articles />}
                                                />
                                                <Route
                                                    path="/author"
                                                    element={<Authors />}
                                                />
                                                <Route
                                                    path="/share"
                                                    element={<Share />}
                                                />
                                                 <Route
                                                    path="/experince"
                                                    element={<Experince />}
                                                />
                                            </Routes>
                                            <Grid
                                                container
                                                spacing={0}
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Grid
                                                    item
                                                    xs={1}
                                                    sm={1}
                                                    md={1}
                                                    lg={1}
                                                    sx={{
                                                        textAlign: "center",
                                                        mt: 1,
                                                        ml: -9,
                                                        position: "fixed",
                                                        bottom: "-1rem",
                                                        left: "6rem",
                                                        display: {
                                                            xs: "none",
                                                            sm: "block",
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        src={Image}
                                                        alt="img"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                    </Box>
                                </Grid>
                                {/* </GRID11> */}
                                <StickyBox offsetTop={80} offsetBottom={-80}>
                                    <Grid
                                        item
                                        xs={1}
                                        sm={1}
                                        md={1}
                                        lg={1}
                                        display={{ xs: "none", md: "block" }}
                                    >
                                        <List
                                            sx={{ paddingTop: 0, width: "10%" }}
                                        >
                                            {buttonName.map((item, index) => (
                                                <ListItem
                                                    disablePadding
                                                    key={index}
                                                >
                                                    <ListItemButton
                                                        sx={{
                                                            backgroundColor:
                                                                item.backgroundColor,
                                                            borderRadius:
                                                                "0% 100% 100% 0% / 45% 50% 50% 45%;",
                                                            writingMode: "tb",
                                                            color: "#FFFFFF",
                                                            height: buttonHeight,
                                                            padding: padding,
                                                            verticalAlign:
                                                                "middle",
                                                            "&:hover": {
                                                                background:
                                                                    item.backgroundColor,
                                                                cursor: "pointer",
                                                                opacity: "0.6",
                                                            },
                                                        }}
                                                        onClick={() =>
                                                            navigate(item.link)
                                                        }
                                                    >
                                                        {item.name}
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                </StickyBox>
                            </Grid>
                        </Box>

                        <Footer />
                        {/* </Container> */}
                    </ThemeProvider>
                </>
            )}
        </>
    );
};
export default Layout;
