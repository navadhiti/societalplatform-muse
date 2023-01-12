import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import landingImage from "../Assets/Images/Societal Platform - Landing Video.gif";
import { Box, Grid } from "@mui/material";
import { Section1 } from "../Themes/StyledComponent";

const Loader = () => {
    return (
        <>
            <Section1>
                <Box>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            {/* <CircularProgress color="success" /> */}
                            <img src={landingImage} alt="img" width="100%" />
                        </Grid>
                    </Grid>
                </Box>
            </Section1>
        </>
    );
};
export default Loader;
