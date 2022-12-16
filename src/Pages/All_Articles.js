import { Box } from '@mui/material';
import React from 'react';

const All_Articles = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#3E418A",
            // backgroundColor: `#fff`,
        },
    };
  return (
    <>
    <Box style={styles.LandingBackground}>
        <h1>ARTICLES</h1>
    </Box>
    </>
  );
};

export default All_Articles;