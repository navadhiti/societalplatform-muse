import React, { useState, useEffect } from 'react';
import {
  Box,
  //   Container,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Stack,
  Avatar,
  Divider,
  List,
  SpeedDial,
  TextField,
  Button,
  SpeedDialAction,
} from '@mui/material';
import {
  PictureAsPdfOutlined,
  PrintOutlined,
  NavigateNext,
  VolumeUp,
  ShareOutlined,
} from '@mui/icons-material';
import StickyBox from 'react-sticky-box';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';

import ArticleImage from '../Assets/Images/articleImage.png';
import Author from '../Assets/Images/Author7.png';

import { StickyButton, Title } from '../Themes/StyledComponent';

const Indi_Article = () => {
  const [data, setData] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://tm.navadhiti.com/wp-json/wp/v2/posts/3059')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e) => setError(e));
  }, []);

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
  const shareUrl =
    'https://www.youtube.com/watch?v=RbQgF_vocLU&ab_channel=T-Series';
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
      // boxShadow:' 0px 0px 30px 0px #b8c0c3;'
    },
  };

  const extractedH2 = data?.content.rendered.match(/<h(.)>.*?<\/h\1>/g);

  // Text to Speech
  const Speech = new SpeechSynthesisUtterance();

  const Content = 'hello world';
  const speechHandler = (Speech) => {
    Speech.text = Content;
    window.speechSynthesis.speak(Speech);
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
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={7} sx={{ textAlign: 'left' }}>
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
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                mt={6}
              >
                <Grid item xs={1}>
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
                <Grid item xs={3} ml={2}>
                  <Typography variant="body2">WORDS BY</Typography>
                  <Typography variant="body2">
                    Kuldeep Dantewadia <br />
                    Gautam Prakash
                  </Typography>
                  <Typography>Co-founders, Reap Benefit</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography>
                    Kuldeep Dantewadia is sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque
                    laudantium,totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae.{' '}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <img
                style={{ width: '606px', height: '630px' }}
                src={ArticleImage}
                alt="img"
              />
            </Grid>
          </Grid>
          <Divider sx={{ borderStyle: 'dotted' }} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={5}
          >
            <Grid item md={8} sx={{ textAlign: 'start' }}>
              <TextField placeholder="Search" variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Button
                  variant="audio-btn"
                  onClick={() => speechHandler(Speech)}
                >
                  LISTEN
                  <VolumeUp />
                </Button>
                <Button variant="icon-btn">
                  <PictureAsPdfOutlined />
                </Button>
                <Button variant="icon-btn">
                  <PrintOutlined />
                </Button>
                <Box
                  sx={{
                    transform: 'translateZ(0px)',
                  }}
                >
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{
                      position: 'absolute',
                      bottom: '-2rem',
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
            <Grid item xs={4} sx={{ textAlign: 'left' }}>
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Typography variant="h5"> ARTICLE OUTLINE</Typography>
                <List>
                  {extractedH2?.map((elem, index) => (
                    <StickyButton>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: elem,
                        }}
                        key={index}
                      />
                    </StickyButton>
                  ))}
                </List>
              </StickyBox>
            </Grid>
            <Grid item xs={7} sx={{ textAlign: 'left' }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.content.rendered,
                }}
              ></div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Indi_Article;
