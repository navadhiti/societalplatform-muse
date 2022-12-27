import React from "react";
import {
    Grid,
    Typography,
    Container,
    Stack,
    IconButton,
} from "@mui/material";
import { Section } from "../Themes/StyledComponent";
import Divider from "../Assets/Images/underline-white.png";
import art from "../Assets/Images/Artwork.png";
import ButtonIcon from "../Assets/Images/Down_arrow.png";


const Share_Landing = () => {
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
                                    Open Source{" "}<br />  
                                    <span
                                        style={{
                                            background: ` url(${Divider}) bottom no-repeat`,
                                            paddingBottom: "05px",
                                            backgroundSize: "contain",
                                        }}
                                    >
                                        website
                                    </span>
                                    
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
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
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
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={5}
                        pt={15}
                    >
                        <IconButton sx={{borderRadius:"50%",border:"2px solid white",width:"50px",height:"50px"}}>
                            <img src={ButtonIcon} alt="img" />
                        </IconButton>
                    </Stack>
                </Container>
            </Section>
        </>
    );
};

export default Share_Landing;
