import { Container } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';

import TabSection from '../Components/TabSection';
const styles = {
  LandingBackground: {
    //  backgroundImage: `linear-gradient(to bottom, #ECE4EF, #fff)`,
    backgroundColor: `#fff`,
  },
};
const Home = () => {
  return (
    <div style={styles.LandingBackground}>
      {/* <Container sx={{minHeight: '500px'}}></Container> */}
      <TabSection />
    </div>
  );
};

export default Home;
