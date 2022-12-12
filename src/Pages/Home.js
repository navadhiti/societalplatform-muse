import React from 'react';
import Blurb from '../Components/Blurb';
import Blurb_1 from '../Components/Blurb1';
import LandingSection from '../Components/LandingSection';
// import NewDesign from '../Components/newDesign';
import OurCollaborators from '../Components/OurCollaborators';
import Stories from '../Components/Stories';
import TabSection from '../Components/TabSection';
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
      {/* <LandingSection /> */}
      {/* <Blurb />
      <Stories />
      <Blurb_1 />
      <OurCollaborators />
      <Values /> */}
      {/* <NewDesign /> */}
      <TabSection />
    </div>
  );
};

export default Home;
