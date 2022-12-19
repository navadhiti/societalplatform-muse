import React from "react";
import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";

import Divider from "../Assets/Images/Divider.png";
import Art from "../Assets/Images/Artwork_3.png";

const styles = {
        paperContainer: {
            backgroundImage: `url(${Art})`,
            backgroundPosition: `bottom right`,
            backgroundRepeat:`no-repeat`,
            height:'500px',
        },
    };

const Blub2 = () => {
    return (
        <>
            <Box py={8} >
            <Container style={styles.paperContainer}>
                <Grid
                    container
                    spacing={0}
                    justifyContent="start"
                    alignItems="start"
                    
                    py={5}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        textAlign="left"
                    >
                        <Typography variant="h3" textAlign="Left">
                            What if you could apply Societal Thinking to
                            problems and understand the difference you could
                            make?
                        </Typography>
                        <Typography variant="h3" textAlign="Left" mt={2}>
                            <span
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.875rem",
                                }}
                            >
                                Play along
                            </span>{" "}
                            by bringing forth
                            <br /> your
                            <span
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.875rem",
                                    background: ` url(${Divider}) bottom no-repeat`,
                                }}
                            >
                                {" "}
                                childlike curiosity.
                            </span>
                        </Typography>
                        <Box py={5}>
                        <Button variant="text">
                            Experience
                        </Button>
                        
                        </Box >
                        
                    </Grid>
                    
                </Grid>
                <Grid
                    container
                    spacing={0}
                    justifyContent="space-between"
                    alignItems="start"
                    pt={0}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        textAlign="left"                        
                    >
                     
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        textAlign="left"
                    >
                        {/* <img src={Art} alt="img" width="100%" /> */}
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    );
};

export default Blub2;
