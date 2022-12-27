import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Article_landing from "../Components/Article Landing";
import Stories_article from "../Components/Stories_article";
import Story_card from "../Components/Story_card";
import data from "../db.json";
import { Section } from "../Themes/StyledComponent";

const Experince = () => {
    const itemData = data.Article.Stories;

    const styles = {
        LandingBackground: {
            backgroundColor: "#C4BCB9",
            color: "#fff",
            // backgroundColor: `#fff`,
        },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Section>
            <Typography variant="h1">Experience</Typography>

                </Section>
                
            </Box>
        </>
    );
};

export default Experince;
