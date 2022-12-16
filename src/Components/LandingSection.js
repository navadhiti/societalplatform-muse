import React from 'react';
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
} from '@mui/material';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import ButtonIcon from '../Assets/Images/ArrowCircleDown.png';

const styles = {
  LandingBackground: {
    backgroundImage: `linear-gradient(to bottom, #ECE4EF, #fff)`,
  },
};
const LandingSection = () => {
  return (
    <>
      <Box sx={{ mt: -2, py: 8 }} style={styles.LandingBackground}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h2">
               
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={LandingImage} alt="img" />
            
            </Grid>
          </Grid>
        
        </Container>
      </Box>
    </>
  );
};

export default LandingSection;
