import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '../Assets/Images/Divider.png';
import Logo from '../Assets/Images/sm_logo.png';

const Blurb = () => {
  return (
    <>
      <Box>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          className="p-5"
          sx={{ py: 2 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={8} sx={{ textAlign: 'center' }}>
            <Typography variant="h1">Experience the Muse!</Typography>
            <img src={Divider} alt="img" />
            <br />
            <Typography variant="h6" sx={{ py: 3, textAlign: 'center' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially.
            </Typography>
            <img src={Logo} alt="img" />
            <br />
            <Button variant="contained" elevation="3">
              EXPERIENCE
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          className="p-5"
          sx={{ py: 2 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={8} sx={{ textAlign: 'center' }}>
            <Typography variant="h1">Societal Muse</Typography>
            <Typography variant="h5">Stories of change</Typography>
            <img src={Divider} alt="img" />
            <br />
            <Typography variant="h6" sx={{ py: 3, textAlign: 'center' }}>
              Societal Muse is a platform to prompt reflection and inspired
              action. It brings alive Societal Thinking through the journeys of
              innovators solving wicked social problems. These journeys offer
              personal insight, ask questions and suggest a diversity of
              answers, and invite readers to reimagine solving social problems.
              Societal Muse is tied together with the core values of Societal
              Thinking.
            </Typography>
            <br />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Button variant="contained" elevation="3">
                Read
              </Button>
              <Button variant="contained" elevation="3">
                EXPERIENCE
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Blurb;
