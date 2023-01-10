import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Article_landing from "../Components/Article Landing";
import Experice_landing from "../Components/Experice_landing";
import ExperinceIntro from "../Components/ExperinceIntro";
import Stories_article from "../Components/Stories_article";
import Story_card from "../Components/Story_card";
import data from "../db.json";
import { ArticleLanding, DescriptionSection, ExpernceLanding, Section } from "../Themes/StyledComponent";

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
            <ExpernceLanding py={{xs:1,sm:3,md:5}}>
                <ExperinceIntro />
                {/* <All_Articles_card posts= {post} /> */}
            </ExpernceLanding>
        </>
    );
};

export default Experince;
