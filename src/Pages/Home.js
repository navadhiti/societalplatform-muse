import React from 'react';
import Blurb from '../Components/Blurb';
import LandingSection from '../Components/LandingSection';
import OurCollaborators from '../Components/OurCollaborators';
// import Blurb from '../Components/Blurb';

const Home = () => {
  return (
    <div>
      <LandingSection />
      <Blurb />
      <OurCollaborators />
    </div>
  );
};

export default Home;
