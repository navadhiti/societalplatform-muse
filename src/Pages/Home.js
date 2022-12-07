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
      {/* <LandingSection />
      <Blurb />
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
