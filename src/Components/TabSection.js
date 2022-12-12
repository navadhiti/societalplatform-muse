import {
    Box,
    Button,
    Container,
    Grid,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import React from "react";
import Divider from "../Assets/Images/Divider.png";
import LandingImage from "../Assets/Images/sp-muse-read-banner-04 2.png";
import Image from "../Assets/Images/sp-musebook-design.png";
import Image1 from "../Assets/Images/image_4.png";
import Image2 from "../Assets/Images/image 20.png";
import Image3 from "../Assets/Images/image 14.png";
import Image4 from "../Assets/Images/image_17.png";
import Image5 from "../Assets/Images/image 19.png";

import Image12 from "../Assets/Images/image_13.png";
import DATABASE from "../db.json";

import PropTypes from "prop-types";
import Blurb from "./Blurb";
import Blurb_1 from "./Blurb1";
import Blub2 from "./Blub2";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const d = new Date(DATABASE.map((data) => data.id));
    console.log(d, "data");

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
            <Container sx={{ mt: 0, mb: 5 }}>
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="start"
                    sx={{ pt: 0 }}
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
                                    height: 510,
                                    overflowY: "auto",
                                    borderRadius: "10px 0 0 10px",
                                }}
                            >
                                <Grid
                                    container
                                    spacing={0}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    // sx={{ position: "relative" }}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        sm={1}
                                        md={1}
                                        lg={1}
                                        // sx={{ textAlign: "center",mt:-25 }}
                                        sx={{
                                            position: "absolute",
                                            marginTop: "-3.6rem",
                                            marginLeft: "0rem",
                                            zIndex: 9999,
                                        }}
                                    >
                                        <img src={Image1} alt="img" />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={1}
                                        sm={1}
                                        md={1}
                                        lg={1}
                                        // sx={{ textAlign: "center",mt:-3 }}
                                        sx={{
                                            position: "absolute",
                                            marginTop: "3rem",
                                            marginLeft: "70%",
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
                                <Blurb />
                                <Blurb_1 />
                                <Blub2 />
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
                                            position: "absolute",
                                            bottom: "-1rem",
                                        }}
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
                                <Typography
                                    sx={{
                                        writingMode: "vertical-rl",
                                        textOrientation: "mixed",
                                    }}
                                >
                                    hi hello
                                </Typography>
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
                            sx={{
                                borderLeft: 1,
                                borderColor: "divider",
                                writingMode: "verticalRl",
                                textOrientation: "mixed",
                                color: "#fdfdfd",
                                transform: [{ rotate: "-90deg" }],
                            }}
                        >
                            <Tab
                                label="Item One"
                                {...a11yProps(0)}
                                style={{
                                    backgroundColor: "#E5E5E5",
                                    borderRadius: "0 100% 100% 0",
                                    writingMode: "verticalRl",
                                    textOrientation: "mixed",
                                    color: "#fdfdfd",
                                    transform: [{ rotate: "-90deg" }],
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
                            >
                                {" "}
                                <Typography
                                    sx={{
                                        writingMode: "vertical-rl",
                                        textOrientation: "mixed",
                                    }}
                                >
                                    hi hello
                                </Typography>
                            </Tab>
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
                                classes="values"
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
