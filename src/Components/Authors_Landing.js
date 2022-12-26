import React from "react";
import {
    Box,
    Button,
    Grid,
    ImageList,
    Typography,
    Container,
    ImageListItem,
} from "@mui/material";
import { Section } from "../Themes/StyledComponent";
import Divider from "../Assets/Images/underline-white.png";
import Pen from "../Assets/Images/img-pen-white.png";
import art from  "../Assets/Images/Artwork.png";

const Authors_Landing = () => {
    return (
        <>
            <Section pt={{ xs: 4, sm: 4, md: 13 }}>
                <Container>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="start"
                        alignItems="start"
                        py={{ xs: 4, sm: 4, md: 5 }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            sx={{ textAlign: "left" }}
                        >
                            <Typography variant="h1" textAlign="Left" pb={3}>
                                <b>
                                    {" "}
                                    Our{" "}
                                    <span
                                        style={{
                                            background: ` url(${Divider}) bottom no-repeat`,
                                            paddingBottom: "05px",
                                            backgroundSize: "contain",
                                        }}
                                    >
                                        collaborators
                                    </span>
                                    <img src={Pen} alt="img" width="10%" />
                                </b>
                            </Typography>
                            <Typography
                                variant="body"
                                py={{ xs: 2, sm: 2, md: 18 }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            sx={{ textAlign: "left" }}
                        >
                            <img src={art} />
                        </Grid>
                    </Grid>
                </Container>
            </Section>
        </>
    );
};

export default Authors_Landing;
