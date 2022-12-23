// import { Container } from '@mui/system';
import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
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

import {
  Box,
  //   Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Stack,
} from '@mui/material';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import Image from '../Assets/Images/sp-musebook-design.png';
import Image1 from '../Assets/Images/image_4.png';

import PropTypes from 'prop-types';
import Indi_Article from '../Pages/Indi_Article';
import All_Articles from '../Pages/All_Articles';
import PALETTE from '../Themes/Palette';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const location = useLocation();
  const path = location.pathname;
  console.log(path, 'path');
  const color = path == '/' ? PALETTE.PRIMARY : PALETTE.SECONDARY;
  console.log(color, 'color');
  // const Color = PALETTE.PRIMARY;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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
const Layout = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const buttonHeight = `calc(90vh/5)`;
  const padding = `calc(4.5vh) calc(4.5vh) calc(4.5vh) calc(3.5vh)`;
  const buttonName = [
    {
      name: 'HOME',
      backgroundColor: '#E2D1ED',
      link: '/',
    },
    {
      name: 'ARTICLES',
      backgroundColor: '#3E418A',
      link: '/all-articles',
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
      <ThemeProvider theme={theme}>
        {/* <Container> */}
        <Header />

        <Box sx={{ mt: 0, mb: 5, px: { xs: 0, sm: 0, md: 5 } }}>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="start"
            sx={{ pt: 0 }}
          >
            {/* <GRID11> */}
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              lg={11}
              sx={{ textAlign: 'center' }}
            >
              <Box>
                <TabPanel
                  value={value}
                  index={0}
                  style={{
                    // backgroundColor: PALETTE.PRIMARY,
                    // height: "85vh",
                    // -webkit-scrollbar { width: 0 !important }
                    // @include scroll-bar(4px, 4px, 6px);
                    overflowY: 'auto',
                    borderRadius: '30px 30px 30px 30px ',
                  }}
                  className="body"
                >
                  <Grid
                    container
                    spacing={0}
                    justifyContent="space-between"
                    alignItems="center"
                    // sx={{position: "relative",}}
                  >
                    <Grid
                      item
                      xs={1}
                      sm={1}
                      md={1}
                      lg={1}
                      // sx={{ textAlign: "center",mt:-25 }}
                      sx={{
                        position: 'fixed',
                        marginTop: '-1.6rem',
                        marginLeft: '2rem',
                        zIndex: 9999,
                        display: {
                          xs: 'none',
                          sm: 'block',
                        },
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
                        position: 'fixed',
                        marginTop: '7rem',
                        marginLeft: '76%',
                        display: {
                          xs: 'none',
                          sm: 'block',
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

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Indi_Article />} />
                    <Route path="/all-articles" element={<All_Articles />} />
                  </Routes>
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
                        position: 'fixed',
                        bottom: '-1rem',
                        display: {
                          xs: 'none',
                          sm: 'block',
                        },
                      }}
                    >
                      <img src={Image} alt="img" />
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
            {/* </GRID11> */}
            <StickyBox offsetTop={80} offsetBottom={-80}>
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                lg={1}
                display={{ xs: 'none', sm: 'block' }}
              >
                <List sx={{ paddingTop: 0 }}>
                  {buttonName.map((item) => (
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          backgroundColor: item.backgroundColor,
                          borderRadius: '0% 100% 100% 0% / 45% 50% 50% 45%;',
                          writingMode: 'tb',
                          color: '#FFFFFF',
                          height: buttonHeight,
                          padding: padding,
                          verticalAlign: 'middle',
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

        <Footer />
        {/* </Container> */}
      </ThemeProvider>
    </>
  );
};
export default Layout;