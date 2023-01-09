import {
  Box,
  Button,
  Container,
  Grid,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LandingImage, Section } from "../Themes/StyledComponent";

import art from "../Assets/Images/Artwork_3.png";

const Contact = () => {
  const styles = {
    LandingBackground1: {
      backgroundColor: "#EDEBEA",
      borderRadius: "30px 0px 30px 30px ",
    },
  };
  return (
    <>
      <Box style={styles.LandingBackground1} py={5}>
        <Section pt={{ xs: 4, sm: 14, md: 13 }}>
          <Container>
            <Grid
              container
              spacing={0}
              justifyContent="space-between"
              alignItems="center"
              pt={0}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left" pb={3}>
                <Typography variant="h2" textAlign="Left" color="text-white">
                  Reach Out
                </Typography>
                <Typography variant="body">
                  <b>Ekstep Foundation</b>
                  <br />
                  Quorum, No. 85, 7th Cross, 4th Block
                  <br />
                  Koramangala, Bangalore 560 034
                  <br />
                  Karnataka, INDIA
                  <br />
                </Typography>
                <Box py={3}>
                  <Typography variant="h5">
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

                    {/* </ListItemIcon> */}
                  </ListItem>
                </Box>
                <LandingImage mt={-20}>
                  <img src={art} width="100%" />
                </LandingImage>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left" pb={3}>
                <Box
                  sx={{ p: 5, backgroundColor: "#fff", borderRadius: "12px" }}
                >
                  <TextField
                    id="filled-basic"
                    label="Enter your name"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    sx={{ borderRadius: "25px" }}
                  />
                  <br />
                  <TextField
                    id="filled-basic"
                    label="Enter your email address"
                    variant="filled"
                    fullWidth
                    margin="normal"
                    py={4}
                  />
                  <TextField
                    id="filled-basic"
                    label="which social sector do you work in?"
                    variant="filled"
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    id="filled-multiline-static"
                    label="Go ahead, We are listening..."
                    multiline
                    fullWidth
                    margin="normal"
                    rows={4}
                    // defaultValue="Go ahead, We are listening..."
                    variant="filled"
                  />
                    <Button variant="outlined" size="large"  sx={{color:'#000',borderColor:'#000',borderRadius:'25px',fontWeight:600,px:5,width:"100%",mr:15,py:2,mt:2}} fullwidth>
                    Submit form
        </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>
      </Box>
    </>
  );
};

export default Contact;
