import { Container } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Blub2 from "../Components/Blub2";
import Blurb from "../Components/Blurb";
import Blurb_1 from "../Components/Blurb1";
import Collaborators from "../Components/Collaborators";
import Stories from "../Components/Stories";

import TabSection from "../Components/TabSection";
import Values from "../Components/Values";
const styles = {
    LandingBackground: {
        backgroundColor: "#E2D1ED",
        // backgroundColor: `#fff`,
    },
};
const Home = () => {
    return (
        <div style={styles.LandingBackground}>
            {/* <Container sx={{minHeight: '500px'}}></Container> */}
            <Blurb />
            ngmms
            <Blurb_1 />
            <Stories />
            <Blub2 />
            <Collaborators />
            <Values />
        </div>
    );
};

export default Home;
