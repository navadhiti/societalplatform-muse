import React from "react";
import {
    Grid,
    AppBar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    ListItemIcon,
    Typography,
} from "@mui/material";
import logo from "../Assets/Images/sp_muse_logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import girl from "../Assets/Images/Group_3.png";
import Line from "../Assets/Images/Vector_44.png";

import { Box, Container } from "@mui/system";

const Footer = () => {
    return (
        <>
            {/* <AppBar
                
                color="primary"
                
            > */}
            <Box sx={{backgroundColor: "#F8F8F8" }}>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <Grid item xs="12" sm="6" md="1" mb={-3}>
                            <img src={girl} alt="img" />
                            
                        </Grid>
                    </Grid>
                    <img src={Line} alt="img" width="100%" />

                    <Box sx={{ pt: 5, backgroundColor: "#F8F8F8" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <img src={logo} alt="img" width="60%"  />
                            <List sx={{ py: 2, textTransform: "capitalize" }}>
                                <Typography variant="body2">
                                    Editions
                                </Typography>
                                <Typography variant="body2">Values</Typography>
                                <Typography variant="body2">
                                    Partners
                                </Typography>
                                <Typography variant="body2">
                                    Contributors
                                </Typography>
                                {/* <ListItem disablePadding>
                                        <ListItemButton
                                    component="a"
                                    href="#simple-list"
                                >
                                        <ListItemText primary="Partners" />
                                        </ListItemButton>
                                    </ListItem> */}
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <Typography variant="body" sx={{ mb: 1 }}>
                                info@societalplatform.org
                            </Typography>
                            <ListItem
                                disablePadding
                                sx={{
                                    px: 1,
                                    width: "90px",
                                    backgroundColor: "#f2f0ed",
                                }}
                            >
                                {/* <ListItemIcon> */}
                                <TwitterIcon color="secondary" />
                                <LinkedInIcon color="secondary" />
                                <YouTubeIcon color="secondary" />
                                {/* </ListItemIcon> */}
                            </ListItem>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={2}
                            lg={2}
                            justifyContent="flex-end"
                        >
                            <List sx={{ py: 2, textAlign: "right" }}>
                                <Typography variant="body2">
                                    Public Goods Licensing
                                </Typography>
                                <Typography variant="body2">
                                    Code of Sharing
                                </Typography>
                                <Typography variant="body2">
                                    Privacy Policy
                                </Typography>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={9} md={8} lg={8}>
                            <Typography variant="body2" textAlign="center">
                                Copyright © 2018 EkStep Foundation. All content
                                here is licensed under <br></br>a Creative
                                Commons Attribution-ShareAlike 4.0 International
                                License unless otherwise noted.
                            </Typography>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
