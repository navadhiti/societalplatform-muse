import {
    Button,
    Container,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import Divider from "../Assets/Images/Divider.png";
import Divider from "../Assets/Images/underline-white.png";

import Logo from "../Assets/Images/sm_logo.png";
import Layer from "../Assets/Images/Layer.png";
import Blub from "../Assets/Images/Blub.png";
import Book from "../Assets/Images/sp-muse-read.png";
import { LandingImage, Section } from "../Themes/StyledComponent";
// import ButtonIcon from "../Assets/Images/ArrowCircleDown.png";Down_arrow.png
import ButtonIcon from "../Assets/Images/Down_arrow.png";
import { Link, animateScroll as scroll } from "react-scroll";

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Layer})`,
//         backgroundPosition: `top center`,
//     },
// };

const Article_landing = () => {
    return (
        <>
            <Section pt={{ xs: 4, sm: 14, md: 13 }}>
                <Container>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="space-between"
                        alignItems="center"
                        pt={0}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            textAlign="left"
                            pb={3}
                        >
                            <Typography
                                variant="h1"
                                textAlign="Left"
                                color="text-white"
                                pb={5}
                            >
                                Discover,
                                <br />
                                <b>
                                    read and{" "}
                                    <span
                                        style={{
                                            background: ` url(${Divider}) bottom no-repeat`,
                                            paddingBottom: "05px",
                                            backgroundSize: "contain",
                                        }}
                                    >
                                        share
                                    </span>
                                </b>
                            </Typography>
                            <Typography variant="body">
                                Read the stories of change here that offer
                                personal insight, ask questions and suggest a
                                diversity of answers, and invite readers to
                                reimagine solving social problems. Societal Muse
                                is tied together with the core values of
                                Societal Thinking.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            textAlign="left"
                        >
                            <LandingImage>
                            <img src={Book} alt="img" width="100%" />
                            </LandingImage>
                        </Grid>
                    </Grid>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={5}
                        pt={{xs:5,md:15}}
                        
                    >
                        <Link
                            activeClass="active"
                            to="article_cards"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            <IconButton
                                sx={{
                                    borderRadius: "50%",
                                    border: "2px solid white",
                                    width: "50px",
                                    height: "50px",
                                }}
                            >
                                <img src={ButtonIcon} alt="img" />
                            </IconButton>
                        </Link>
                    </Stack>
                </Container>
            </Section>
        </>
    );
};

export default Article_landing;
