import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Section } from "../Themes/StyledComponent";
import Story_card from "./Story_card";
import data from "../db.json";

const All_Articles_card = () => {
    const itemData = data.Article.Stories;

    return (
        <>
            <Box id="cards">
                <Container>
                    {/* <Grid
                        container
                        spacing={0}
                        justifyContent="space-evenly"
                        alignItems="center"
                        py={5}
                        px={5}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            spacing={0}
                        >
                            <InputLabel
                            id="demo-select-small"
                            sx={{ borderRadius: "50%" }}
                        >
                            Age
                        </InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            spacing={0}
                        >
                            <InputLabel
                            id="demo-select-small"
                            sx={{ borderRadius: "50%" }}
                        >
                            Age
                        </InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            spacing={0}
                        >
                            <InputLabel
                            id="demo-select-small"
                            sx={{ borderRadius: "50%" }}
                        >
                            Age
                        </InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            fullwidth
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </Grid>
                    </Grid> */}

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
                        px={5}
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
