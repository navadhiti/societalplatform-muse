import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Divider from "../Assets/Images/Divider.png";
import Logo from "../Assets/Images/sm_logo.png";
import Layer from "../Assets/Images/Layer.png";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Layer})`,
        backgroundPosition: `top center`,
    },
};

const Blurb_1 = () => {
    return (
        <>
            <Container>
                
                <Box sx={{ py: 5 }} style={styles.paperContainer}>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                        className="p-5"
                        sx={{ py: 5 }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={8}
                            sx={{ textAlign: "center", pt: 5 }}
                        >
                            <Typography variant="h1">
                                Experience the Muse!
                            </Typography>
                            <img src={Divider} alt="img" />
                            <br />
                            <Typography
                                variant="h6"
                                sx={{ py: 3, textAlign: "center" }}
                            >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially.
                            </Typography>
                            <img src={Logo} alt="img" />
                            <br />
                            <Button
                                variant="contained"
                                elevation="3"
                                sx={{ mt: 5 }}
                            >
                                EXPERIENCE
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Blurb_1;
