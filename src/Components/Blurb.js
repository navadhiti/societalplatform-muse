import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Blurb = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Societal muse </Typography>
          <br />
          <Typography variant="h5">stories of change</Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Blurb;
