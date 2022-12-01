import React from 'react';
import Blurb from '../Components/Blurb';
import Blurb_1 from '../Components/Blurb1';
import LandingSection from '../Components/LandingSection';
import OurCollaborators from '../Components/OurCollaborators';
import Stories from '../Components/Stories';
import Values from '../Components/Values';
const styles = {
    LandingBackground: {
    //  backgroundImage: `linear-gradient(to bottom, #ECE4EF, #fff)`,
    backgroundColor:`#fff`,
    }, 
  };
const Home = () => {
  return (
    <div style={styles.LandingBackground}>
      <LandingSection />
      <Blurb />
      <OurCollaborators />
      <Stories />
      <Blurb_1 />
      <Values />
    </div>
  );
};

export default Home;
