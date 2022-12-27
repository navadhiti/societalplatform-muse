import { Box } from "@mui/material";
import React from "react";
import Authors_Landing from "../Components/Authors_Landing";
import Author_details from "../Components/Author_details";

const Authors = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#22534F",
            color: "#fff",
            // backgroundColor: `#fff`,
        },
        LandingBackground1: {
          backgroundColor: "#EDEBEA",
      },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Authors_Landing />
            </Box>
            <Box style={styles.LandingBackground1}>
                <Author_details />
            </Box>
        </>
    );
};

export default Authors;
