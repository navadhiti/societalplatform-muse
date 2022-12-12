import { Button, Container, Grid, Stack, Typography, Box } from "@mui/material";

import React from "react";

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Layer})`,
//         backgroundPosition: `top center`,
//     },
// };
import Divider from "../Assets/Images/Divider.png";
import LandingImage from "../Assets/Images/sp-muse-read-banner-04 2.png";
import Image from "../Assets/Images/sp-musebook-design.png";
import Image1 from "../Assets/Images/image_4.png";
import Image2 from "../Assets/Images/image 20.png";
import Image3 from "../Assets/Images/image 14.png";
import Image4 from "../Assets/Images/image_17.png";
import Image12 from "../Assets/Images/image_13.png";
import Image5 from "../Assets/Images/image 19.png";

const Blurb = () => {
    return (
        <>
            <Container>
                <Box pt={13} px={8}>
                    <Typography variant="h3" textAlign="center">
                        Societal Muse is our annual publication that shows
                        stories of{" "}
                        <span
                            style={{
                                fontWeight: 800,
                                fontSize: "2rem",
                            }}
                        >
                            solving at scale{" "}
                            <img src={Image12} alt="img" width="7%" />
                        </span>{" "}
                        in action. These are stories of{" "}
                        <span
                            style={{
                                fontWeight: 800,
                                fontSize: "2rem",
                            }}
                        >
                            big bold bets,
                            <img src={Image2} alt="img" width="5%" />
                            <img src={Image2} alt="img" width="2%" />
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
                            <img src={Image3} alt="img" width="5%" />
                        </span>
                        , through the eyes of practitioners and supporters of{" "}
                        {/* <u style={{ textDecorationStyle: "wavy" }}> */}
                        <span
                            style={{
                                background: ` url(${Divider}) bottom no-repeat`,
                                paddingBottom: "05px",
                                backgroundSize: "contain",
                            }}
                        >
                            Societal Thinking.
                        </span>
                        {/* </u> */}
                    </Typography>
                    <br />
                    <Typography variant="h3">
                        Societal Muse oers{" "}
                        <span
                            style={{
                                fontWeight: 800,
                                fontSize: "1.375rem",
                            }}
                        >
                            new answers
                            <img src={Image4} alt="img" width="2%" />
                            <img src={Image4} alt="img" width="2%" />
                        </span>
                        , new ways of doing and sometimes{" "}
                        <span
                            style={{
                                fontWeight: 800,
                                fontSize: "1.375rem",
                            }}
                        >
                            new questions
                            <img src={Image5} alt="img" width="5%" />
                        </span>{" "}
                        too.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Blurb;
