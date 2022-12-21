import React from "react";
import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";

import Divider from "../Assets/Images/Divider.png";
import Art from "../Assets/Images/Artwork_3.png";
import { AnimatedButton } from "../Themes/StyledComponent";
import { StyledContainer } from "../Themes/StyledComponent";

const styles = {
        paperContainer: {
            backgroundImage: `url(${Art})`,
            backgroundPosition: `bottom right`,
            backgroundRepeat:`no-repeat`,
            height:'600px',
            // "@media (max-width:550px)": {
            //     height:'700px',
            //     backgroundSize: "contain",
            // },
            
        },
    };

const Blub2 = () => {
    return (
        <>
            <Box py={{xs:4,sm:4,md:5}} >
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
                           <b>
                                Play along
                            </b>{" "}
                            by bringing forth
                            <br /> your
                            <Typography variant="link"><b>
                             {" "}
                                childlike curiosity.</b></Typography>
                              
                        </Typography>
                        <Box py={5}>
                            <AnimatedButton>
                            <Button className="cta-btn">
                            <span class="hover-frame  bounce infinite" data-num="1"></span><span class="hover-frame  bounce infinite" data-num="2"></span>
                            Experience
                        </Button>
                            </AnimatedButton>
                        
                        
                        </Box >
                        
                    </Grid>
                    {/* <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        mt={{xs:2,md:20}}                   
                    >
                        <img src={Art} alt="img" width="100%" />
                    </Grid> */}
                </Grid>
                {/* <Grid
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
                      <img src={Art} alt="img" width="100%" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        textAlign="left"
                    >
                        <img src={Art} alt="img" width="100%" />
                    </Grid>
                </Grid> */}
            </Container>
            </Box>
        </>
    );
};

export default Blub2;
