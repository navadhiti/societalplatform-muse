import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "../Assets/Images/Divider.png";

const Indi_Article = () => {
    return (
        <>
            <Box>
                <Container>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="start"
                        alignItems="start"
                        sx={{ py: 5 }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            sx={{ textAlign: "left" }}
                        >

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            sx={{ textAlign: "left" }}
                        >
                            <Typography variant="h1">
                            Can <span
                            style={{
                                background: ` url(${Divider}) bottom no-repeat`,
                                paddingBottom: "05px",
                                backgroundSize: "contain",
                            }}>anyone</span> who keeps the street clean become a hero?
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Indi_Article;
