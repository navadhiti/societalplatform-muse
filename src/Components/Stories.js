import { Grid } from '@mui/material';
import React from 'react';

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
            <p>grid1</p>
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
