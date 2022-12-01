import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Divider from "../Assets/Images/Divider.png";
import Logo from "../Assets/Images/sm_logo.png";
import Layer from "../Assets/Images/Layer.png";

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Layer})`,
//         backgroundPosition: `top center`,
//     },
// };

const Blurb = () => {
    return (
        <>
            <Container>
                <Box py={5}>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                        py={2}
                        my={5}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={8}
                            textAlign="center"
                        >
                            <Typography variant="h1">Societal Muse</Typography>
                            <Typography variant="h5">
                                Stories of change
                            </Typography>
                            <img src={Divider} alt="img" />
                            <br />
                            <Typography
                                variant="h6"
                                py={3}
                            >
                                Societal Muse is a platform to prompt reflection
                                and inspired action. It brings alive Societal
                                Thinking through the journeys of innovators
                                solving wicked social problems. These journeys
                                offer personal insight, ask questions and
                                suggest a diversity of answers, and invite
                                readers to reimagine solving social problems.
                                Societal Muse is tied together with the core
                                values of Societal Thinking.
                            </Typography>
                            <br />
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Button variant="contained" elevation="3">
                                    Read
                                </Button>
                                <Button variant="contained" elevation="3">
                                    EXPERIENCE
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                
            </Container>
        </>
    );
};

export default Blurb;
