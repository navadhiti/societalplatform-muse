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
                <Box pt={13} pb={5} px={8}>
                    <Typography variant="h3" textAlign="center">
                        Societal Muse is our annual publication that shows
                        stories of{" "}
                       <b>
                            solving at scale{" "}
                            <img src={Image12} alt="img" width="7%" />
                        </b>{" "}
                        in action. These are stories of{" "}
                      <b>
                            big bold bets,
                            <img src={Image2} alt="img" width="3%" />
                            <img src={Image2} alt="img" width="2%" />
                        </b>
                        of{" "}
                      
                            reimagination
                        
                        , of perseverance, of coming together, of{" "}
                        <Typography variant="link"><b>
                            building agency</b></Typography>
                            <img src={Image3} alt="img" width="5%" />
                        
                        , through the eyes of practitioners and supporters of{" "}
                        
                        <Typography variant="link">
                            Societal Thinking.
                        </Typography>
                        
                    </Typography>
                    <br />
                    <Typography variant="h3">
                        Societal Muse Offers{" "}
                       <b>
                            new answers
                            <img src={Image4} alt="img" width="3%" />
                            <img src={Image4} alt="img" width="3%" />
                        </b>
                        , new ways of doing and sometimes{" "}
                        <b>
                            new questions
                            <img src={Image5} alt="img" width="6%" />
                        </b>{" "}
                        too.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Blurb;
