import React from 'react';
import {
  Box,
  //   Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import Image from '../Assets/Images/sp-musebook-design.png';
import Image1 from '../Assets/Images/image_4.png';
// import Image2 from '../Assets/Images/image 20.png';
// import Image3 from '../Assets/Images/image 14.png';
// import Image4 from '../Assets/Images/image_17.png';
// import Image5 from '../Assets/Images/image 19.png';
import Blurb from './Blurb';
// import Image12 from '../Assets/Images/image_13.png';

import PropTypes from 'prop-types';
import Blurb_1 from './Blurb1';
import Blub2 from './Blub2';
import Collaborators from './Collaborators';
import Values from './Values';
import Stories from './Stories';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TabSection = () => {
  const [value, setValue] = React.useState(0);

  const buttonName = [
    {
      name: 'HOME',
      backgroundColor: '#E2D1ED',
      link: '',
    },
    {
      name: 'ARTICLES',
      backgroundColor: '#3E418A',
      link: '',
    },
    {
      name: 'EXPIRIENCE',
      backgroundColor: '#DC8F6E',
      link: '',
    },
    {
      name: 'CONTACT',
      backgroundColor: '#22534F',
      link: '',
    },
    {
      name: 'SHARE',
      backgroundColor: '#C4BCB9',
      link: '',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ mt: 0, mb: 5, px: 5 }}>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="start"
          sx={{ pt: 0 }}
        >
          <Grid
            item
            xs={11}
            sm={11}
            md={11}
            lg={11}
            sx={{ textAlign: 'center' }}
          >
            <Box>
              <TabPanel
                value={value}
                index={0}
                style={{
                  backgroundColor: '#E2D1ED',
                  height: '85vh',
                  overflowY: 'auto',
                  borderRadius: '10px ',
                }}
              >
                <Grid
                  container
                  spacing={0}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    // sx={{ textAlign: "center",mt:-25 }}
                    sx={{
                      position: 'absolute',
                      marginTop: '-3.6rem',
                      marginLeft: '0rem',
                      zIndex: 9999,
                    }}
                  >
                    <img src={Image1} alt="img" />
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    // sx={{ textAlign: "center",mt:-3 }}
                    sx={{
                      position: 'absolute',
                      marginTop: '3rem',
                      marginLeft: '76%',
                    }}
                  >
                    <img
                      src={LandingImage}
                      alt="img"
                      sx={{
                        position: 'fixed',
                        marginTop: '3rem',
                        marginLeft: '90%',
                      }}
                    />
                  </Grid>
                </Grid>
              
              <Blurb />
              <Blurb_1 />
              <Blub2 />
              <Collaborators />
              <Values />
                <Stories />

                <Grid
                  container
                  spacing={0}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    sx={{
                      textAlign: 'center',
                      mt: 1,
                      ml: -9,
                      position: 'absolute',
                      bottom: '-1rem',
                    }}
                  >
                    <img src={Image} alt="img" />
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <List sx={{ paddingTop: 0, width: '10%' }}>
              {buttonName.map((item) => (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      backgroundColor: item.backgroundColor,
                      borderRadius: '0% 100% 100% 0% / 45% 50% 50% 45%;',
                      writingMode: 'tb',
                      color: '#FFFFFF',
                      height: 124,
                      padding: '2rem 1.9rem 2.3rem 1.8rem',
                    }}
                  >
                    {item.name}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TabSection;
