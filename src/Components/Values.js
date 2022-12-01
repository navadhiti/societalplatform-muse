import { Card, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const Values = () => {
    return (
        <>
            <Container >
                <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                    py={2}
                    my={5}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                        // px={4}
                    >
                        <Box>
                            <Card classes="values">
                                Catalyse
                                <br />
                                Interactions
                            </Card>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                    >
                        <Card classes="values">
                            
                            Build Public
                            <br />
                            Interactions
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                    >
                        <Card classes="values">
                            Catalyse
                            <br />
                            Interactions
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                    >
                         <Card classes="values">
                           Empower<br />
                           with Data
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Values;
