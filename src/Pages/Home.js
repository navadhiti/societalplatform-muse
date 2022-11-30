import React from 'react';
import LandingSection from '../Components/LandingSection';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <LandingSection />
      </Container>
    </div>
  );
};

export default Home;
