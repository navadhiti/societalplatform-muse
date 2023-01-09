import React from "react";
import {
    Grid,
    List,
    ListItem,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Box
} from "@mui/material";
import logo from "../Assets/Images/sp_muse_logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Footer = (props) => {
    console.log(props.color,"color")
    return (
        <>
           
            <Box sx={{ backgroundColor: props.color,  }} px={{xs:2,md:5}} >
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
                             Thinking, subscribe to our newsletter.
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

                <Box  pt={5}>
                    <Grid
                        container
                        direction={{xs:"column-reverse",md:"row"}}
                        justifyContent="space-between"
                        // alignItems="center"
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body" sx={{ mb: 1 }}>
                                info@societalplatform.org
                            </Typography>
                            <ListItem
                                
                                sx={{
                                    px: 2,
                                    width: "90px",
                                    // backgroundColor: "#f2f0ed",
                                }}
                            >
                                {/* <ListItemIcon> */}
                               
                                <LinkedInIcon color="secondary" px={5} />
                                <TwitterIcon color="secondary" />
                                
                                {/* </ListItemIcon> */}
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body1" textAlign="left">
                                Copyright © 2018 EkStep Foundation. All content
                                here is licensed under a <br></br><u>Creative
                                Commons Attribution-ShareAlike 4.0 International
                                License</u> unless otherwise noted.
                            </Typography>
                            <List sx={{ py: 2, textAlign: "left" }}>
                                <Typography variant="body1">
                                    {" "}<u>
                                    Public Goods Licensing . Code of Sharing .
                                    Privacy Policy
                                    </u>
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
