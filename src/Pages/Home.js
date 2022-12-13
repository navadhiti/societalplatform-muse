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
      <TabSection />
    </div>
  );
};

export default Home;
