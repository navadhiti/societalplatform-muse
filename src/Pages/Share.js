import { Box } from "@mui/material";
import React from "react";
import Share_Landing from "../Components/Share_Landing";

const Share = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#3E418A",
            color: "#fff",
        },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Share_Landing />
            </Box>
        </>
    );
};

export default Share;
