import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Divider from "../Assets/Images/Divider.png";
import Logo from "../Assets/Images/sm_logo.png";
import Layer from "../Assets/Images/Layer.png";
import Blub from "../Assets/Images/Blub.png";
import Sanjay from "../Assets/Images/sanjay.png";


// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Layer})`,
//         backgroundPosition: `top center`,
//     },
// };

const Blurb_1 = () => {
    return (
        <>
            <Box py={8}> 
            <Container >
                <Grid
                    container
                    spacing={0}
                    justifyContent="start"
                    alignItems="start"
                    sx={{ py: 10 }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        sx={{ textAlign: "left" }}
                    >
                        <Typography variant="overline">FOREWORD</Typography>
                        <Typography variant="h1" textAlign="Left">
                            Embedded in each <br /> story, you will find
                        </Typography>
                        <Typography variant="h1" textAlign="Left">
                        <b>
                            a small simple{" "}
                            <img src={Blub} alt="img" width="10%" />
                            idea.</b>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    justifyContent="space-between"
                    alignItems="start"
                    sx={{ pt: 0 }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        sx={{ textAlign: "left" }}
                    >
                        <Typography variant="h4">
                            Small simple ideas are like children. They need to
                            be nurtured to take shape, scale and create impact.
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
                        <Typography variant="body1">
                            Across the website you will meet many children.
                            Dressed up and posing as adults, they are here to
                            remind us that impact at scale can be achieved if we
                            retain a sense of possibility, curiosity and
                            imagination. They stand for small simple ideas that
                            restore the agency of all.
                        </Typography>
                        <Grid
                            container
                            spacing={0}
                            justifyContent="space-between"
                            alignItems="start"
                            sx={{ pt: 0 }}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                sx={{ textAlign: "left",py:9, }}
                            >
                                {" "}
                                <Typography variant="body1">
                                   <b> Sanjay Purohit</b>
                                </Typography>
                                <Typography variant="body2">
                                    Chief Curator
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                sx={{ textAlign: "right" }}
                            >
                                <img src={Sanjay} alt="img" width="100%" />

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    );
};

export default Blurb_1;
