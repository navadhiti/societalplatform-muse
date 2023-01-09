// import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import {
  useNavigate,
  Route,
  Routes,
  HashRouter as Router,
  ReactDOM,
} from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import { useLocation } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from '../Pages/Home';
import { GRID11 } from '../Themes/StyledComponent';
// import "../Assets/scrollbar.scss";
// import Stories from '../Components/Stories';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/Theme';

import { Box, Grid, List, ListItem, ListItemButton } from '@mui/material';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import Image from '../Assets/Images/sp-musebook-design.png';
import Image1 from '../Assets/Images/image_4.png';

import PropTypes from 'prop-types';
import Indi_Article from '../Pages/Indi_Article';
import All_Articles from '../Pages/All_Articles';
import PALETTE from '../Themes/Palette';
import Authors from '../Pages/Authors';
import database from '../db.json';
import Share from '../Pages/Share';
import Loader from '../Components/loader';
import Experince from '../Pages/Experince';
import Contact from '../Pages/Contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  //   const location = useLocation();
  //   const path = location.pathname;
  //   console.log(path, 'path');
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  //   console.log(path, 'path');

  const [value, setValue] = React.useState(0);
  const buttonHeight = `calc(80vh/5)`;
  const buttonWidth = `calc(100px)`;
  const padding = `calc(5vh) calc(4.5vh) calc(4.5vh) calc(3.5vh)`;
  const buttonName = database.menu;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://tm.navadhiti.com/wp-json/wp/v2/posts/3059')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setTimeout(() => {setLoading(false);}, 4000);
      })
      .catch((e) => setError(e));
    
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <ThemeProvider theme={theme}>
                <Header
                  color={path !== '/indiviual-articles' ? 'inherit' : 'action'}
                  pb={2}
                />

                <Box
                  sx={{ mt: 2, pb: 5, px: { xs: 0, sm: 0, md: 5 } }}
                  backgroundColor={path !== '/indiviual-articles' ? 'inherit' : '#E5E5E5'}
                >
                  <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="start"
                    sx={{ pt: 0 }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={11}
                      lg={11}
                      sx={{ textAlign: 'center' }}
                    >
                      <Box >
                        <TabPanel
                          value={value}
                          index={0}
                          style={{
                            overflowY: 'auto',
                            borderRadius: '30px 0px 30px 30px ',
                            height:'85vh',
                            boxShadow: '0px 1px 15px 0px rgb(0 0 0 / 14%)',

                          }}
                          elevation={3}
                          className="body"
                        >
                          {path !== '/indiviual-articles' ? (
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
                                  position: 'absolute',
                                  marginTop: '-1.6rem',
                                  marginLeft: '5rem',
                                  zIndex: 9999,
                                  display: {
                                    xs: 'none',
                                    md: 'block',
                                  },
                                }}
                              >
                                <img src={Image1} alt="img" width="120%" />
                              </Grid>
                              <Grid
                                item
                                xs={1}
                                sm={1}
                                md={1}
                                lg={1}
                                sx={{
                                  position: 'absolute',
                                  marginTop: '7rem',
                                  marginLeft: '79%',
                                  display: {
                                    xs: 'none',
                                    md: 'block',
                                  },
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
                          ) : (
                            ''
                          )}

                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                              path="/indiviual-articles"
                              element={<Indi_Article />}
                            />
                            <Route
                              path="/articles"
                              element={<All_Articles />}
                            />
                            <Route path="/author" element={<Authors />} />
                            <Route path="/share" element={<Share />} />
                            <Route path="/experince" element={<Experince />} />
                            <Route path="/contact" element={<Contact />} />

                          </Routes>
                          {path !== '/indiviual-articles' ? (
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
                                  bottom: '1rem',
                                  left: '7rem',
                                  display: {
                                    xs: 'none',
                                    md: 'block',
                                  },
                                }}
                              >
                                <img src={Image} alt="img" width="100%" />
                              </Grid>
                            </Grid>
                          ) : (
                            ''
                          )}
                        </TabPanel>
                      </Box>
                    </Grid>

                    <StickyBox offsetTop={80} offsetBottom={-80}>
                      <Grid
                        item
                        xs={1}
                        sm={1}
                        md={1}
                        lg={1}
                        display={{ xs: 'none', md: 'block' }}
                        // sx={{ verticalAlign: 'middle' }}
                      >
                        <List sx={{ paddingTop: 0, width: '100%' }}>
                          {buttonName.map((item, index) => (
                            <ListItem
                              disablePadding
                              key={index}
                              sx={{
                                paddingTop: 0,
                                width: '70px',
                                // verticalAlign: 'middle',
                                // textAlign: 'center',
                              }}
                            >
                              <ListItemButton
                                sx={{
                                  backgroundColor: item.backgroundColor,
                                  borderRadius:
                                    '0% 100% 100% 0% / 45% 50% 50% 45%;',
                                  writingMode: 'tb',
                                  color: '#FFFFFF',
                                  fontSize: 12,
                                  fontWeight: 600,
                                  height: buttonHeight,
                                  disply: 'flex !important',
                                  justifyContent: 'center !important',
                                  alignItems: 'end !important',
                                  verticalAlign: 'center',
                                  //   paddingTop: '70%',
                                  '&:hover': {
                                    background: item.backgroundColor,
                                    cursor: 'pointer',
                                    opacity: '0.9',
                                  },
                                }}
                                onClick={() => {
                                  navigate(item.link);
                                  window.scrollTo(0, 0);
                                }}
                              >
                                {item.name}
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </StickyBox>
                  </Grid>
                </Box>
                <Footer
                color={path !== '/indiviual-articles' ? 'inherit' : '#E5E5E5'}
                // color="red"
                />
              </ThemeProvider>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Layout;
