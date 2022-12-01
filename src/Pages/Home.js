import React from 'react';
import Blurb from '../Components/Blurb';
import Blurb_1 from '../Components/Blurb1';
import LandingSection from '../Components/LandingSection';
import Stories from '../Components/Stories';
import Values from '../Components/Values';

const Home = () => {

  return (
    <div>
      <LandingSection />
      <Blurb />
      <Stories />
      <Blurb_1 />
     
      <Values />
    </div>
  );
};

export default Home;
