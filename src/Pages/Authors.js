
import { Box } from '@mui/material';
import React from 'react'
import Authors_Landing from '../Components/Authors_Landing';

const Authors = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#22534F",
            color:"#fff"
            // backgroundColor: `#fff`,
        },
    };
  return (
    <>
    <Box style={styles.LandingBackground}>
        <Authors_Landing />
        </Box>
    </>
  );
}

export default Authors;