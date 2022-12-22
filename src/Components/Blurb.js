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
import Image1 from "../Assets/Images/graph.png";
import Image2 from "../Assets/Images/Coin.png";
import Image3 from "../Assets/Images/hand.png";
import Image4 from "../Assets/Images/Blub.png";
import Image5 from "../Assets/Images/Questionmark.png";
// import Image6 from "../Assets/Images/image_13.png";
import { Section } from "../Themes/StyledComponent";

const Blurb = () => {
    return (
        <>
            <Section
            // pt={{ xs: 13, sm: 13, md: 18 }}
            // pb={{ xs: 2, sm: 3, md: 5 }}
            px={{ xs: 0, sm: 8 }}
            >
                <Container>
                    <Typography variant="h3" textAlign="center">
                        Societal Muse is our annual publication that shows
                        stories of{" "}
                        <b>
                            solving at scale{" "}
                            <img src={Image1} alt="img" width="4%" />
                        </b>{" "}
                        in action. These are stories of{" "}
                        <b>
                            big bold bets,
                            <img src={Image2} alt="img" width="2%" />
                            <img src={Image2} alt="img" width="1.5%" />
                        </b>
                        of reimagination , of perseverance, of coming together,
                        of{" "}
                        <Typography variant="link">
                            <b>building agency</b>
                        </Typography>
                        <img src={Image3} alt="img" width="4%" />, through the
                        eyes of practitioners and supporters of{" "}
                        <Typography variant="link">
                            Societal Thinking.
                        </Typography>
                    </Typography>
                    <br />
                    <Typography variant="h3">
                        Societal Muse Offers{" "}
                        <b>
                            new answers
                            <img src={Image4} alt="img" width="4%" />
                        </b>
                        , new ways of doing and sometimes{" "}
                        <b>
                            new questions
                            <img src={Image5} alt="img" width="2%" />
                            <img src={Image5} alt="img" width="2%" />
                        </b>{" "}
                        too.
                    </Typography>
                </Container>
            </Section>
        </>
    );
};

export default Blurb;
