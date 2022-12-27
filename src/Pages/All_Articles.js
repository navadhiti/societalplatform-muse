import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Article_landing from "../Components/Article Landing";
import Stories_article from "../Components/Stories_article";
import Story_card from "../Components/Story_card";
import data from "../db.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const All_Articles = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const itemData = data.Article.Stories;

    const styles = {
        LandingBackground: {
            backgroundColor: "#DC8F6E",
            color: "#fff",
            // backgroundColor: `#fff`,
        },
        LandingBackground1: {
            backgroundColor: "#EDEBEA",
            // color: "#fff",
            // backgroundColor: `#fff`,
        },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Article_landing />
            </Box>
            <Box style={styles.LandingBackground1} py={5}>
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
                    
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={-1}>
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

export default All_Articles;
