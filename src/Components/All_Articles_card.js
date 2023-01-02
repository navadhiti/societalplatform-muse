import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Section } from "../Themes/StyledComponent";
import Story_card from "./Story_card";
import data from "../db.json";

const All_Articles_card = (posts) => {
    const itemData = data.Article.Stories;
console.log(posts,"post")
    return (
        <>
            <Box id="article_cards">
                <Container>
                    

                    <Typography variant="h6" sx={{ textAlign: "left" }} >
                        <b> EDITION 01</b>
                    </Typography>
                    <Typography variant="h3" textAlign="Left">
                        Response. Responsibility. Resilience.
                    </Typography>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="space-evenly"
                        alignItems="center"
                        py={5}
                        // px={{xs:2,md:5}}
                        px={{ xs: 0, sm: 5 }}
                    >
                        {/* <Slider {...settings}> */}

                        {itemData.map((item, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                spacing={0}
                            >
                                <Story_card
                                    tag={item.tag}
                                    title={item.title}
                                    blurb={item.blurb}
                                    edition={item.date}
                                />
                            </Grid>
                        ))}
                        {/* </Slider> */}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default All_Articles_card;
