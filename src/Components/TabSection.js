import React from 'react';
import {
  Box,
  //   Button,
  Container,
  Grid,
  Typography,
  //   Drawer,
  List,
  ListItem,
  ListItemButton,
  //   CssBaseline,
} from '@mui/material';
import Divider from '../Assets/Images/Divider.png';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import Image from '../Assets/Images/sp-musebook-design.png';
import Image1 from '../Assets/Images/image_4.png';
import Image2 from '../Assets/Images/image 20.png';
import Image3 from '../Assets/Images/image 14.png';
import Image4 from '../Assets/Images/image_17.png';
import Image5 from '../Assets/Images/image 19.png';

import Image12 from '../Assets/Images/image_13.png';
import DATABASE from '../db.json';

import PropTypes from 'prop-types';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const d = new Date(DATABASE.map((data) => data.id));
  console.log(d, 'data');

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

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

const TabSection = () => {
  const [value, setValue] = React.useState(0);

  const drawerWidth = 240;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ mt: 0, mb: 5 }}>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="start"
        sx={{ pt: 0 }}
      >
        <Grid item xs={11} sm={11} md={11} lg={11} sx={{ textAlign: 'center' }}>
          <Box
            sx={
              {
                // height: 424,
              }
            }
          >
            <TabPanel
              value={value}
              index={0}
              style={{
                backgroundColor: '#E5E5E5',
                height: 510,
                overflowY: 'auto',
                borderRadius: '10px 0 0 10px',
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
                    marginLeft: '70%',
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
              <Box pt={13} px={18}>
                <Typography variant="h6" textAlign="center">
                  Societal Muse is our annual publication that shows stories of{' '}
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.375rem',
                    }}
                  >
                    solving at scale <img src={Image12} alt="img" width="5%" />
                  </span>{' '}
                  in action. These are stories of{' '}
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.375rem',
                    }}
                  >
                    big bold bets,
                    <img src={Image2} alt="img" width="2%" />
                    <img src={Image2} alt="img" width="2%" />
                  </span>
                  of{' '}
                  <span
                    style={{
                      background: ` url(${Divider}) bottom no-repeat`,
                      paddingBottom: '05px',
                      backgroundSize: 'contain',
                    }}
                  >
                    reimagination
                  </span>
                  , of perseverance, of coming together, of{' '}
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.375rem',
                    }}
                  >
                    building agency
                    <img src={Image3} alt="img" width="5%" />
                  </span>
                  , through the eyes of practitioners and supporters of{' '}
                  {/* <u style={{ textDecorationStyle: "wavy" }}> */}
                  <span
                    style={{
                      background: ` url(${Divider}) bottom no-repeat`,
                      paddingBottom: '05px',
                      backgroundSize: 'contain',
                    }}
                  >
                    Societal Thinking.
                  </span>
                  {/* </u> */}
                </Typography>
                <br />
                <Typography variant="h6">
                  Societal Muse oers{' '}
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.375rem',
                    }}
                  >
                    new answers
                    <img src={Image4} alt="img" width="2%" />
                    <img src={Image4} alt="img" width="2%" />
                  </span>
                  , new ways of doing and sometimes{' '}
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.375rem',
                    }}
                  >
                    new questions
                    <img src={Image5} alt="img" width="5%" />
                  </span>{' '}
                  too.
                </Typography>
              </Box>

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
          <List>
            {['HOME','ARTICLES','EXPIRIENCE','CONTACT','SHARE']}
            <ListItem disablePadding>
              <ListItem
                sx={{
                  backgroundColor: '#E2D1ED',
                  borderBottomRightRadius: '50px',
                  borderTopRightRadius: '50px',
                  writingMode: 'tb',
                  color:'#FFFFFF'
                }}
              >
                HOME
              </ListItem>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: '#3E418A',
                  borderBottomRightRadius: '50px',
                  borderTopRightRadius: '50px',
                  writingMode: 'tb',
                  color:'#FFFFFF'
                }}
              >
                ARTICLES
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: '#DC8F6E',
                  borderBottomRightRadius: '50px',
                  borderTopRightRadius: '50px',
                  writingMode: 'tb',
                  color:'#FFFFFF'
                }}
              >
                EXPIRIENCE
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: '#22534F',
                  borderBottomRightRadius: '50px',
                  borderTopRightRadius: '50px',
                  writingMode: 'tb',
                  color:'#FFFFFF'
                }}
              >
                CONTACT
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: '#C4BCB9',
                  borderBottomRightRadius: '50%',
                  borderTopRightRadius: '50%',
                  writingMode: 'tb',
                  color:'#FFFFFF'
                }}
              >
                SHARE
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TabSection;
