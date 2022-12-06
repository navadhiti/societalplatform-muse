import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Divider from "../Assets/Images/Divider.png";
import LandingImage from "../Assets/Images/sp-muse-read-banner-04 2.png";
import Image from "../Assets/Images/sp-musebook-design.png";
import Image1 from "../Assets/Images/image_4.png";
import Image12 from "../Assets/Images/image_13.png";



import PropTypes from "prop-types";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const TabSection = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="start"
                    sx={{ py: 5 }}
                >
                    <Grid
                        item
                        xs={11}
                        sm={11}
                        md={11}
                        lg={11}
                        sx={{ textAlign: "center" }}
                    >
                        <Box
                            sx={
                                {
                                    // height: 424,
                                }
                            }
                        >
                            <TabPanel
                                value={value}
                                index={0}
                                style={{
                                    backgroundColor: "#E5E5E5",
                                    height: 500,
                                    overflowY: "auto",
                                    borderRadius: "10px 0 0 10px",
                                }}
                            >
                                <Grid
                                    container
                                    spacing={0}
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        sm={1}
                                        md={1}
                                        lg={1}
                                        // sx={{ textAlign: "center",mt:-25 }}
                                        sx={{ textAlign: "center",position:"fixed",top:'1.5rem',left:'7rem', }}
                                    >
                                        <img src={Image1} alt="img" />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={1}
                                        sm={1}
                                        md={1}
                                        lg={1}
                                        sx={{ textAlign: "center",mt:-3 }}
                                    >
                                        {" "}
                                        <img src={LandingImage} alt="img" />
                                    </Grid>
                                </Grid>
                                <Box py={5} px={9}>
                                <Typography variant="h6" textAlign="center">
                                    Societal Muse is our annual publication that
                                    shows stories of{" "}
                                    <span
                                        style={{
                                            fontWeight: 800,
                                            fontSize: "1.375rem",
                                        }}
                                    >
                                        solving at scale{" "}

                                        <img src={Image12} alt="img" />
                                    </span>{" "}
                                    in action. These are stories of{" "}
                                    <span
                                        style={{
                                            fontWeight: 800,
                                            fontSize: "1.375rem",
                                        }}
                                    >
                                        big bold bets,

                                        <img src={Image12} alt="img" />
                                    </span>
                                    of{" "}
                                    <span
                                        style={{
                                            background: ` url(${Divider}) bottom no-repeat`,
                                            paddingBottom: "05px",
                                            backgroundSize: "contain",
                                        }}
                                    >
                                        reimagination
                                    </span>
                                    , of perseverance, of coming together, of{" "}
                                    <span
                                        style={{
                                            fontWeight: 800,
                                            fontSize: "1.375rem",
                                        }}
                                    >
                                        building agency

                                        <img src={Image12} alt="img" />
                                    </span>
                                    , through the eyes of practitioners and
                                    supporters of{" "}
                                    <u style={{ textDecorationStyle: "wavy" }}>
                                        Societal Thinking.
                                    </u>
                                </Typography>
                                <br />
                                <Typography variant="h6">
                                    Societal Muse oers{" "}
                                    <span
                                        style={{
                                            fontWeight: 800,
                                            fontSize: "1.375rem",
                                        }}
                                    >
                                        new answers
                                    </span>
                                    , new ways of doing and sometimes{" "}
                                    <span
                                        style={{
                                            fontWeight: 800,
                                            fontSize: "1.375rem",
                                        }}
                                    >
                                        new questions
                                    </span>{" "}
                                    too.
                                </Typography>
                                </Box>
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
                                        sx={{ textAlign: "center",mt:1,ml:-6,position:"fixed",bottom:'1rem' }}
                                    >
                                        <img src={Image} alt="img" />
                                    </Grid>
                                    </Grid>
                            </TabPanel>
                            <TabPanel
                                value={value}
                                index={1}
                                style={{
                                    backgroundColor: "#542385",
                                    height: 500,
                                    overflowY: "auto",
                                    borderRadius: "10px 0 0 10px",
                                }}
                            >
                                Item Two
                            </TabPanel>
                            <TabPanel
                                value={value}
                                index={2}
                                sx={{ backgroundColor: "#542385" }}
                            >
                                Item Three
                            </TabPanel>
                            <TabPanel
                                value={value}
                                index={3}
                                sx={{ backgroundColor: "#542385" }}
                            >
                                Item Four
                            </TabPanel>
                            <TabPanel
                                value={value}
                                index={4}
                                sx={{ backgroundColor: "#542385" }}
                            >
                                Item Five
                            </TabPanel>
                        </Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderLeft: 1, borderColor: "divider" }}
                        >
                            <Tab
                                label="Item One"
                                {...a11yProps(0)}
                                sx={{
                                    backgroundColor: "#E5E5E5",
                                    borderRadius: "0 100% 100% 0",
                                    writingMode: "verticalRl",
                                    textOrientation: "mixed",
                                    color: "#fdfdfd",
                                }}
                            />
                            <Tab
                                label="Item Two"
                                {...a11yProps(1)}
                                sx={{
                                    backgroundColor: "#542385",
                                    borderRadius: "0 100% 100% 0",
                                    writingMode: "vertical-rl",
                                    textOrientation: "mixed",
                                    color: "#fdfdfd",
                                }}
                            />
                            <Tab
                                label="Item Three"
                                {...a11yProps(2)}
                                sx={{
                                    backgroundColor: "#542385",
                                    borderRadius: "0 100% 100% 0",
                                    writingMode: "vertical-rl",
                                    textOrientation: "mixed",
                                    color: "#fdfdfd",
                                }}
                            />
                            <Tab
                                label="Item Four"
                                {...a11yProps(3)}
                                sx={{
                                    backgroundColor: "#E5E5E5",
                                    borderRadius: "0 100% 100% 0",
                                    writingMode: "vertical-rl",
                                    textOrientation: "mixed",
                                    color: "#fdfdfd",
                                }}
                            />
                            <Tab
                                label="Item Seven"
                                {...a11yProps(6)}
                                sx={{
                                    backgroundColor: "#E5E5E5",
                                    borderRadius: "0 100% 100% 0",
                                    writingMode: "vertical-rl",
                                    textOrientation: "mixed",
                                    color: "#fdfdfd",
                                }}
                            />
                        </Tabs>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TabSection;
