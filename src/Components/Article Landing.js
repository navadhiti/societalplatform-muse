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
import { Section } from "../Themes/StyledComponent";
import ButtonIcon from "../Assets/Images/ArrowCircleDown.png";

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Layer})`,
//         backgroundPosition: `top center`,
//     },
// };

const Article_landing = () => {
    return (
        <>
            <Section py={{ xs: 4, sm: 4, md: 5 }}>
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
                            <img src={Book} alt="img" width="100%" />
                        </Grid>
                    </Grid>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        py={3}
                    >
                        <IconButton>
                            <img src={ButtonIcon} alt="img" />
                        </IconButton>
                    </Stack>
                </Container>
            </Section>
        </>
    );
};

export default Article_landing;
