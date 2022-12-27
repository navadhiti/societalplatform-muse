import { Box } from "@mui/material";
import React from "react";
import Article_landing from "../Components/Article Landing";

const All_Articles = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#DC8F6E",
            color: "#fff",
            // backgroundColor: `#fff`,
        },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Article_landing />
            </Box>
        </>
    );
};

export default All_Articles;
