import { Box } from "@mui/material";
import React from "react";
import Authors_Landing from "../Components/Authors_Landing";
import Author_details from "../Components/Author_details";

const Authors = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#22534F",
            color: "#fff",
            borderRadius: '30px 0px 30px 30px ',
        
            // backgroundColor: `#fff`,
        },
        LandingBackground1: {
          backgroundColor: "#EDEBEA",
          borderRadius: '30px 30px 30px 30px ',

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
