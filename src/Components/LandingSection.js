import React from 'react';
import { Grid, Box, Typography, IconButton, Stack, Container } from '@mui/material';
import LandingImage from '../Assets/Images/Frame (3).png';
import ButtonIcon from '../Assets/Images/ArrowCircleDown.png';

const styles = {
  LandingBackground: {
   
   backgroundImage: `url(${LandingImage})`,
   backgroundPosition: `center`,
   backgroundRepeat: 'no-repeat',
   height:'100vh',
  }, 
};
const LandingSection = () => {
  return (
    <div>
      <Box sx={{ mt:2 ,py:5, }} style={styles.LandingBackground}>
       
      </Box>
    </div>
  );
};

export default LandingSection;
