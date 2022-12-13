import React from 'react';
import { Grid, Typography } from '@mui/material';
import image_30 from '../Assets/Images/image 30.png';

const Stories = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography variant="h2">
              Our Stories
              <img src={image_30} alt="img" />
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <p>grid2</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Stories;
