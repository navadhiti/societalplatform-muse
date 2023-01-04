import { Box } from "@mui/material";
import React from "react";
import Share_card from "../Components/Share_card";
import Share_Landing from "../Components/Share_Landing";

const Share = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#3E418A",
            color: "#fff",
        },
        LandingBackground1: {
            backgroundColor: "#EDEBEA",
        },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Share_Landing />
            </Box>
            <Box style={styles.LandingBackground1} py={5}>
                <Share_card />
            </Box>
        </>
    );
};

export default Share;
