import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  // Link,
  Stack,
  Avatar,
  Divider,
  List,
  ListItem,
  SpeedDial,
  TextField,
  Button,
  SpeedDialAction,
  Autocomplete,
} from '@mui/material';
import {
  PictureAsPdfOutlined,
  PrintOutlined,
  NavigateNext,
  VolumeUp,
  ShareOutlined,
} from '@mui/icons-material';
import StickyBox from 'react-sticky-box';
import { Link, animateScroll as scroll } from 'react-scroll';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import parse from 'html-react-parser';

import ArticleImage from '../Assets/Images/articleImage.png';
import Sanjay from '../Assets/Images/sanjay.png';

import Author from '../Assets/Images/Authors/Author7.png';
import AuthorName from '../Assets/Images/musing-banner.svg';

import { StickyButton, Title } from '../Themes/StyledComponent';

import Stories_Aritcle from '../Components/Stories_article';
import { logDOM } from '@testing-library/react';

const Indi_Article = () => {
  const [data, setData] = useState();
  const [author, setAuthor] = useState();
  // const [id, setId] = useState();

  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://tm.navadhiti.com/wp-json/wp/v2/posts/3059')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e) => setError(e));
    fetch('https://tm.navadhiti.com/wp-json/wp/v2/users/2')
      .then((response) => response.json())
      .then((json) => setAuthor(json))
      .catch((e) => setError(e));
  }, []);

  const filteredValue = data?.content.rendered
    .match(/<h(.)>.*?<\/h\1>/gs)
    .map((x, i) => i);

  const result = data?.content.rendered.replace(/<h2>/g, function () {
    return `<h2 id="${filteredValue.shift()}">`;
  });

  const breadcrumbs = [
    <Link underline="none" key="1" color="inherit" href="/">
      HOME
    </Link>,
    <Link underline="none" key="2" color="inherit" href="#">
      ISSUE 1
    </Link>,
    <Link underline="none" key="2" color="inherit" href="#">
      SOLVE SMALL, DENT BIG
    </Link>,
  ];

  const shareUrl = 'http://localhost:3000/articles';

  const actions = [
    {
      icon: (
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={38} round={true} />
        </LinkedinShareButton>
      ),
      name: 'LinkedIn',
    },
    {
      icon: (
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={38} round={true} />
        </FacebookShareButton>
      ),
      name: 'Facebook',
    },
    {
      icon: (
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={38} round={true} />
        </TwitterShareButton>
      ),
      name: 'Twitter',
    },
  ];

  const styles = {
    LandingBackground: {
      backgroundColor: '#fff',
    },
  };

  const extractedH2 = data?.content.rendered.match(/<h(.)>.*?<\/h\1>/gs);

  // Search Bar

  // onclick button section scroll function
  const onBtnClick = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 45;
    const elementPosition = element.getBoundingClientRect().top - 500;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    element.scrollIntoView({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div style={styles.LandingBackground}>
        <Box elevation={1}>
          <Stack spacing={2} mt="40px">
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Grid
            container
            direction={{ xs: 'column-reverse', md: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={7} sx={{ textAlign: 'left' }}>
              <Title>
                <Typography
                  variant="h1"
                  dangerouslySetInnerHTML={{
                    __html: data?.title.rendered,
                  }}
                ></Typography>
              </Title>
              <Grid
                container
                direction={{ xs: 'column-reverse', md: 'row' }}
                justifyContent="flex-start"
                alignItems="center"
                mt={6}
              >
                <Grid item xs={12} md={5}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    // mt={6}
                  >
                    <Grid item xs={3}>
                      {' '}
                      <Avatar
                        alt="Remy Sharp"
                        src={Author}
                        sx={{
                          width: 70,
                          height: 70,
                          border: '1px solid black',
                        }}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="body2">
                        <b>WORDS BY</b>
                      </Typography>
                      <Typography variant="body2">
                        <b>
                          Kuldeep Dantewadia <br />
                          Gautam Prakash
                        </b>
                      </Typography>
                      <Typography>Co-founders, Reap Benefit</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    Kuldeep Dantewadia is sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque
                    laudantium,totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae.{' '}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display={{ xs: 'none', md: 'block' }}>
                <img
                  style={{ width: '606px', height: '630px' }}
                  src={ArticleImage}
                  alt="img"
                />
              </Box>
              <Box display={{ xs: 'block', md: 'none' }}>
                <img
                  style={{ width: '350px', height: '500px' }}
                  src={ArticleImage}
                  alt="img"
                />
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderStyle: 'dotted' }} />
          <Grid
            container
            direction="row"
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            alignItems="center"
            mt={5}
          >
            <Grid item xs={4} md={8} sx={{ textAlign: 'start' }}>
              <Autocomplete
                disableClearable
                freeSolo
                id="combo-box-demo"
                options={extractedH2?.map((elem) =>
                  elem.replace(/<[^>]+>/g, '')
                )}
                // onChange={(e, value) => console.log(e.target, value.title)}

                renderInput={(params) => (
                  <TextField label="Search" {...params} />
                )}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Button variant="audio-btn">
                  LISTEN
                  <VolumeUp />
                </Button>
                <Box display={{ xs: 'none', md: 'block' }}>
                  <Button variant="icon-btn">
                    <PictureAsPdfOutlined />
                  </Button>
                </Box>
                <Box display={{ xs: 'none', md: 'block' }}>
                  <Button variant="icon-btn">
                    <PrintOutlined />
                  </Button>
                </Box>
                <Box
                  sx={{
                    transform: 'translateZ(0px)',
                  }}
                >
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{
                      position: 'absolute',
                      bottom: '-1.8rem',
                      '& .MuiFab-primary': {
                        boxShadow: 'none',
                        border: '1px solid black',
                      },
                    }}
                    icon={<ShareOutlined />}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        sx={{
                          border: '1px solid black',
                          alignContent: 'center',
                        }}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </SpeedDial>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Grid container mt={10} spacing={2}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
              <StickyBox offsetTop={20} offsetBottom={20}>
                <List>
                  <Typography variant="h5"> ARTICLE OUTLINE</Typography>

                  {extractedH2?.map((elem, i) => (
                    <ListItem>
                      <StickyButton onClick={() => onBtnClick(i)}>
                        <Link
                          activeClass="active"
                          to={i}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: elem,
                            }}
                          />
                        </Link>
                      </StickyButton>
                    </ListItem>
                  ))}
                </List>
              </StickyBox>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{ textAlign: 'left' }}
              px={{ xs: 4, md: 5 }}
            >
              <Title>
                <div
                  dangerouslySetInnerHTML={{
                    __html: result,
                  }}
                ></div>
              </Title>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
              <img src={Sanjay} width="80%" alt="img" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ textAlign: 'left' }}>
              <Box
                sx={{
                  background: ` url(${AuthorName}) center left no-repeat`,
                  mb: 3,
                }}
              >
                <Typography variant="h4" sx={{}}>
                  Sanjay Purohit
                </Typography>
              </Box>
              <Typography
                variant="body"
                dangerouslySetInnerHTML={{
                  __html: author?.description,
                }}
              ></Typography>
              {/* <Typography
                  variant="h4"
                  dangerouslySetInnerHTML={{
                    __html: author?.name,
                  }}
                ></Typography> */}
              <Typography variant="h4" sx={{ pt: 5 }}>
                Sanjay Purohit
              </Typography>
              <Typography variant="body" sx={{ pb: 2 }}>
                Chief Curator
              </Typography>
            </Grid>
          </Grid>
          <Stories_Aritcle />
        </Box>
      </div>
    </>
  );
};

export default Indi_Article;
