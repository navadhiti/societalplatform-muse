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
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import logo from "../Assets/Images/sp_muse_logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import girl from "../Assets/Images/Group_3.png";
import Line from "../Assets/Images/Vector_44.png";
import CircleIcon from "@mui/icons-material/Circle";

import { Box, Container } from "@mui/system";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Footer = () => {
    return (
        <>
            {/* <AppBar
                
                color="primary"
                
            > */}
            <Box sx={{ backgroundColor: "#F8F8F8", px: 5 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Grid item xs="12" sm="6" md="6" pt={5}>
                    <Grid item xs="12" sm="9" md="9" pt={5}>
                        <Typography variant="h4" textAlign="left">
                            We’ll be back with more editions <br />
                            of the Muse. For updates on Societal
                            <br /> Thinking, subscribe to our newsletter.
                        </Typography>
                        <Box sx={{pt:4,pb:9}}>
                        <FormControl
                            sx={{ m: 1,borderRadius:'50px' }}
                            variant="outlined"
                            fullWidth
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                            Your email Address
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-Address"
                                type={"text"}
                                // value="Password"
                                onChange="Address"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <ArrowForwardIcon />
                                    </InputAdornment>
                                }
                                label="Address"
                                sx={{borderRadius:'50px'}}
                            />
                        </FormControl>
                        </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ pt: 5, backgroundColor: "#F8F8F8" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6}>
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
                                <FacebookOutlinedIcon color="secondary" />
                                <InstagramIcon color="secondary" />
                                <TwitterIcon color="secondary" />
                                <LinkedInIcon color="secondary" />
                                
                                {/* </ListItemIcon> */}
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2" textAlign="left">
                                Copyright © 2018 EkStep Foundation. All content
                                here is licensed under <br></br>a Creative
                                Commons Attribution-ShareAlike 4.0 International
                                License unless otherwise noted.
                            </Typography>
                            <List sx={{ py: 2, textAlign: "left" }}>
                                <Typography variant="body2">
                                    {" "}
                                    Public Goods Licensing . Code of Sharing .
                                    Privacy Policy
                                </Typography>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
