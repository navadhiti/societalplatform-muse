import React from 'react';
import Blurb from '../Components/Blurb';
import Blurb_1 from '../Components/Blurb1';
import LandingSection from '../Components/LandingSection';
import OurCollaborators from '../Components/OurCollaborators';

const Home = () => {
  return (
    <div>
      <LandingSection />
      <Blurb />
      <Blurb_1 />
      <OurCollaborators />
    </div>
  );
};

export default Home;
