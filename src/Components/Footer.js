
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
import React from "react";
import logo from "../Assets/Images/sp_muse_logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container } from "@mui/system";

const Footer = () => {
    return (
        <>
            {/* <AppBar
                
                color="primary"
                
            > */}
                <Box sx={{ pt: 5,px:5,backgroundColor:"#F8F8F8" }}>
                    <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        
                    >
                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <img src={logo} alt="img" />
                            <List sx={{ py: 2 }}>
                                <ListItem disablePadding>
                                    <ListItemText primary="EDITIONS" />

                                </ListItem>
                               
                                <ListItem disablePadding>
                                    <ListItemText primary="VALUES" />
                                </ListItem>
                                <ListItem disablePadding>
                                    {/* <ListItemButton
                                    component="a"
                                    href="#simple-list"
                                > */}
                                    <ListItemText primary="PARTNERS" />
                                    {/* </ListItemButton> */}
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="CONTRIBUTORS" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={2}
                            lg={2}
                            justifyContent="flex-end"
                        >
                            <List sx={{ py: 2 }}>
                                <ListItem disablePadding>
                                    <ListItemText primary="info@societalplatform.org" />
                                </ListItem>
                                <ListItem disablePadding sx={{px:1,width:'90px',backgroundColor:"#f2f0ed"}}>
                                    {/* <ListItemIcon> */}
                                        <TwitterIcon color="secondary" />
                                        <LinkedInIcon color="secondary" />
                                        <YouTubeIcon color="secondary" />
                                    {/* </ListItemIcon> */}
                                </ListItem>
                                <ListItem disablePadding>
                                    {/* <ListItemButton
                                    component="a"
                                    href="#simple-list"
                                > */}
                                    <ListItemText primary="Public Goods Licensing" />
                                    {/* </ListItemButton> */}
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemText primary="Code of Sharing" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Privacy Policy" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    </Toolbar>
                </Box>
            
        </>
    );
};

export default Footer;
