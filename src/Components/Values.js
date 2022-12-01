import { Card, Container, Grid, Typography } from "@mui/material";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Divider from "../Assets/Images/Divider.png";

const Values = () => {
    const [flipCard, setFlipCard] = useState(false);
    const handleClick = (e) => {
        // e.preventDefault();
        setFlipCard((prevState) => ({ isFlipped: !prevState.isFlipped }));
    };

    return (
        <>
            <Container sx={{ textAlign: "center", my: 5 }}>
                <Typography variant="h4" textAlign="center">
                    Our values
                </Typography>
                <img src={Divider} alt="img" />
                <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                    py={2}
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
                        {/* <Box>
                            <Card classes="values">
                                Catalyse
                                <br />
                                Interactions
                            </Card>
                        </Box> */}
                        <ReactCardFlip
                            isFlipped={flipCard}
                            flipDirection="vertical"
                        >
                            <Card classes="values" onClick={handleClick}>
                                Catalyse
                                <br />
                                Interactions
                            </Card>
                            <Card classes="values" onClick={handleClick}>
                                Energize co-creation by leveraging technology
                                and orchestrating ecosystems where assets are
                                accessible and shared, allowing for inclusive
                                problem-solving
                            </Card>
                        </ReactCardFlip>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                    >
                        <ReactCardFlip
                            isFlipped={flipCard}
                            flipDirection="vertical"
                        >
                            <Card classes="values" onClick={handleClick}>
                                Build Public
                                <br />
                                Interactions
                            </Card>
                            <Card classes="values" onClick={handleClick}>
                                Energize co-creation by leveraging technology
                                and orchestrating ecosystems where assets are
                                accessible and shared, allowing for inclusive
                                problem-solving
                            </Card>
                        </ReactCardFlip>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                    >
                        <ReactCardFlip
                            isFlipped={flipCard}
                            flipDirection="vertical"
                        >
                            <Card classes="values" onClick={handleClick}>
                                Build Public
                                <br />
                                Interactions
                            </Card>
                            <Card py={5} classes="values" onClick={handleClick}>
                                Energize co-creation by leveraging technology
                                and orchestrating ecosystems where assets are
                                accessible and shared, allowing for inclusive
                                problem-solving
                            </Card>
                        </ReactCardFlip>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                    >
                        <ReactCardFlip
                            isFlipped={flipCard}
                            flipDirection="horizontal"
                        >
                            <Card classes="values" onClick={handleClick}>
                                Empower
                                <br />
                                with Data
                            </Card>
                            <Card classes="values" onClick={handleClick}>
                                Energize co-creation by leveraging technology
                                and orchestrating ecosystems where assets are
                                accessible and shared, allowing for inclusive
                                problem-solving
                            </Card>
                        </ReactCardFlip>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Values;
