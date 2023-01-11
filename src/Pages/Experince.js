import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Article_landing from "../Components/Article Landing";
import Experice_landing from "../Components/Experice_landing";
import ExperinceIntro from "../Components/ExperinceIntro";
import Stories_article from "../Components/Stories_article";
import Story_card from "../Components/Story_card";
import data from "../db.json";
import { ArticleDescriptionSection, ArticleLanding, DescriptionSection, ExpernceLanding, Section } from "../Themes/StyledComponent";

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
            <ExpernceLanding>
                <Experice_landing />
            </ExpernceLanding>
            <ArticleDescriptionSection py={{xs:1,sm:3,md:5}} sx={{borderRadius:'30px 30px 30px 30px'}}>
                <ExperinceIntro />
                {/* <All_Articles_card posts= {post} /> */}
            </ArticleDescriptionSection>
        </>
    );
};

export default Experince;
