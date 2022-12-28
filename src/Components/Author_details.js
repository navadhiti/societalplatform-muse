import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import data from "../db.json";
import backgroud from "../Assets/Images/Vector.png";
import backgroud1 from "../Assets/Images/Vector (2).png";
import MuseButton from "./MuseButton";
import { AnimatedButton, Section } from "../Themes/StyledComponent";
import Author2 from "../Assets/Images/Authors/Author2.png";


console.log(data.home.Authors, "authors");
const author = data.home.Authors;

const Author_details = () => {
    return (
        <>
            <Box>
                <Container>
                    <Box py={5}>
                        {author.map((item, index) => (
                            <Grid
                                container
                                spacing={0}
                                justifyContent="space-evenly"
                                alignItems="center"
                                my={5}
                                py={5}
                                px={5}
                                sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "15px",
                                }}
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Box
                                        sx={{
                                            // border: "solid 1px black",
                                            // borderRadius: "5px",
                                            height: "250px",
                                            width: "150px",
                                            padding: "37px 10px 0px 11px",
                                            margin: "10px auto",
                                            background: ` url(${backgroud}) center no-repeat`,
                                            backgroundSize: "contain",
                                        }}
                                    >
                                        <img src={Author2} />

                                        <Typography
                                            variant="body1"
                                            textAlign="center"
                                        >
                                            <b>{item.author}</b>
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {item.designation}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={8}
                                    lg={8}
                                    textAlign="left"
                                >
                                    <Typography variant="body">
                                        {item.blurb}
                                    </Typography><br />
                                    {/* <AnimatedButton>
                                        <Button className="cta-btn">
                                            <span
                                                class="hover-frame  bounce infinite"
                                                data-num="1"
                                            ></span>
                                            <span
                                                class="hover-frame  bounce infinite"
                                                data-num="2"
                                            ></span>
                                            Read Articles
                                        </Button>
                                    </AnimatedButton> */}
                                    <MuseButton title="Read Articles" />
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Author_details;
