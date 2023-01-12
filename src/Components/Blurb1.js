import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Blub from "../Assets/Images/Blub.png";
import Sanjay from "../Assets/Images/sanjay.png";
import { Section } from "../Themes/StyledComponent";
import MuseButton from "./MuseButton";

const Blurb_1 = () => {
  return (
    <>
      <Section py={{ xs: 4, sm: 4, md: 5 }}>
        <Container>
          <Grid
            container
            spacing={0}
            justifyContent="start"
            alignItems="start"
            py={{ xs: 2, md: 5 }}
          >
            <Grid item xs={12} sm={12} md={7} lg={7} textAlign="left">
              <Typography variant="overline">FOREWORD</Typography>
              <Typography variant="h1" textAlign="Left">
                Embedded in each <br /> story, you will find
              </Typography>
              <Typography variant="h1" textAlign="Left">
                <b>
                  a small simple <img src={Blub} alt="img" width="6%" />
                  idea.
                </b>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            justifyContent="space-between"
            alignItems="start"
            pt={0}
          >
            <Grid item xs={12} sm={12} md={4} lg={4} textAlign="left" pb={3}>
              <Typography variant="h4">
                Small simple ideas are like children. They need to be nurtured
                to take shape, scale and create impact.
              </Typography>
              <Box mt={5}>
                <MuseButton title="READ FOREWORD" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left" pr={3}>
              <Typography variant="body">
                Across the website you will meet many children. Dressed up and
                posing as adults, they are here to remind us that impact at
                scale can be achieved if we retain a sense of possibility,
                curiosity and imagination. They stand for small simple ideas
                that restore the agency of all.
              </Typography>
              <Grid
                container
                spacing={0}
                justifyContent="space-between"
                alignItems="start"
                pt={0}
              >
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  textAlign="left"
                  py={{ xs: 2, md: 5 }}
                >
                  {" "}
                  <Typography variant="body1">
                    <b> Sanjay Purohit</b>
                  </Typography>
                  <Typography variant="body2">CHIEF CURATOR</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} textAlign="right">
                  <img src={Sanjay} alt="img" width="100%" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Blurb_1;
