import { Grid } from '@mui/material';
import React from 'react';
import logo from '../assets/Images/sp_muse_logo.png';

const Footer = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img src={logo} alt="img" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img src={logo} alt="img" />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
