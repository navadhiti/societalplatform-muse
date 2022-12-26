import React from "react";
import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import Art from "../Assets/Images/Artwork_3.png";
import { AnimatedButton, Section } from "../Themes/StyledComponent";
import { StyledContainer } from "../Themes/StyledComponent";

const styles = {
        paperContainer: {
            backgroundImage: `url(${Art})`,
            backgroundPosition: `bottom right`,
            backgroundRepeat:`no-repeat`,
            height:'600px',
        
            
        },
    };

const Blub2 = () => {
    return (
        <>
            <Section  >
            <Container style={styles.paperContainer}>
                <Grid
                    container
                    spacing={0}
                    justifyContent="start"
                    alignItems="start"
                    
                    
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
                  
                </Grid>
            </Container>
            </Section>
        </>
    );
};

export default Blub2;
