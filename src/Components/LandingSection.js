import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import LandingImage from '../assets/Images/sp-muse-read-banner-04 2.png';

const LandingSection = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={8} sm={5}>
            <Typography variant="h2">
              Welcome to our
              <br /> annual publication
            </Typography>
            <Typography variant="body">
              Societal Muse is our annual publication that shows stories of
              "solving at scale" in action. These are stories of big bold bets,
              of reimagination, of perseverance, of coming together, of building
              agency, through the eyes of practitioners and supporters of
              Societal Thinking.
            </Typography>
            <br />
            <Typography variant="body">
              Societal Muse oers new answers, new ways of doing and sometimes
              new questions too.
            </Typography>
          </Grid>
          <Grid item xs={8} sm={5}>
            <img src={LandingImage} alt="img" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LandingSection;
