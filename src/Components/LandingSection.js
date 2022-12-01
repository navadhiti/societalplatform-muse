import React from 'react';
import { Grid, Box, Typography, IconButton, Stack, Container } from '@mui/material';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import ButtonIcon from '../Assets/Images/ArrowCircleDown.png';

const styles = {
  LandingBackground: {
   backgroundImage: `linear-gradient(to bottom, #ECE4EF, #fff)`,
  }, 
};
const LandingSection = () => {
  return (
    <div>
      <Box sx={{ mt:2 ,py:5, }} style={styles.LandingBackground}>
        <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          
        >
          <Grid item sx={{ mt: 15 }} xs={12} sm={12} md={5}>
            <Typography variant="h2">
              Welcome to our
              <br /> annual publication
            </Typography>
            <Typography variant="h6">
              Societal Muse is our annual publication that shows stories of
              "solving at scale" in action. These are stories of big bold bets,
              of reimagination, of perseverance, of coming together, of building
              agency, through the eyes of practitioners and supporters of
              Societal Thinking.
            </Typography>
            <br />
            <Typography variant="h6">
              Societal Muse oers new answers, new ways of doing and sometimes
              new questions too.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={LandingImage} alt="img" />
            {/* <Box
        component="img"
        sx={{
          // height: 500,
          // width: 500, 
          maxHeight: { xs: 233, md: 500 },
          maxWidth: { xs: 350, md: 500 },
        }}
        alt="The house from the offer."
        src={LandingImage}
      /> */}
            
          </Grid>
        </Grid>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <IconButton>
            <img src={ButtonIcon} alt="img" />
          </IconButton>
        </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default LandingSection;
