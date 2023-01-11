import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Link as HomeLink,
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
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import {
  PictureAsPdfOutlined,
  PrintOutlined,
  NavigateNext,
  VolumeUp,
  ShareOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import StickyBox from 'react-sticky-box';
import { Link } from 'react-scroll';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import ArticleImage from '../Assets/Images/articleImage.png';
import Sanjay from '../Assets/Images/sanjay.png';
import Author from '../Assets/Images/Authors/Author7.png';
import AuthorName from '../Assets/Images/musing-banner.svg';
import { StickyButton, Title } from '../Themes/StyledComponent';
import Stories_Aritcle from '../Components/Stories_article';
import blogData from '../blogdb.json';

const Indi_Article = () => {
  const [data, setData] = useState();
  const [author, setAuthor] = useState();

  // const [error, setError] = useState('');
  useEffect(() => {
    // fetch('https://tm.navadhiti.com/wp-json/wp/v2/posts/3059')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((e) => setError(e));
    // fetch('https://tm.navadhiti.com/wp-json/wp/v2/users/2')
    //   .then((response) => response.json())
    //   .then((json) => setAuthor(json))
    //   .catch((e) => setError(e));
    setData(blogData);
  }, [data]);

  const filteredValue = data?.content.rendered
    .match(/<h(.)>.*?<\/h\1>/gs)
    .map((x, i) => i);

  const result = data?.content.rendered.replace(/<h2>/g, function () {
    return `<h2 id="${filteredValue.shift()}">`;
  });

  const breadcrumbs = [
    <HomeLink underline="none" key="1" color="inherit" href="/">
      HOME
    </HomeLink>,
    <HomeLink underline="none" key="2" color="inherit" href="#">
      ISSUE 1
    </HomeLink>,
    <HomeLink underline="none" key="2" color="inherit" href="#">
      SOLVE SMALL, DENT BIG
    </HomeLink>,
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

  // onclick button section scroll function

  const onBtnClick = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 45;
    const elementPosition = element.getBoundingClientRect().top - 500;
    const offsetPosition =
      elementPosition + ref.current.offsetTop - headerOffset;
    element.scrollIntoView({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // scroll progressBar

  const [scroll, setScroll] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let scrollTop = ref.current.scrollTop;
    let docHeight = ref.current.scrollHeight;
    let winHeight = ref.current.clientHeight;
    // let scrollPercent = scrollTop / (docHeight - winHeight);
    // let scrollPercentRounded = Math.round(scrollPercent * 100);
    // let degrees = scrollPercent * 360;

    console.log(winHeight, 'winHeight');
    console.log(scrollTop, 'scrollTop');
    console.log(docHeight, 'docHeight');

    const timer = setInterval(() => {
      setScroll((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Content reading time caculate

  const [readTime, setReadTime] = useState();
  useEffect(() => {
    function readingTime() {
      const text = document.getElementById('article').innerText;
      const wpm = 238;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      setReadTime(time);
    }
    readingTime();
  }, [data]);

  return (
    <>
      <div style={styles.LandingBackground}>
        <Box elevation={1} ml="3.5rem">
          <Stack spacing={2} pt="2.5rem" display={{xs:"none",sm:"block"}}>
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Grid
            container
            direction={{ xs: 'column-reverse', sm: 'row' ,md:'row'}}
            justifyContent="center"
            alignItems="center"
            pt={{xs:10,sm:2}}
          >
            <Grid item xs={12} sm={7} md={7} sx={{ textAlign: 'left' }}>
              <Title>
                <Typography
                  variant="h1"
                  dangerouslySetInnerHTML={{
                    __html: data?.title.rendered,
                  }}
                />
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
                    // justifyContent="flex-start"
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
                      <Typography sx={{ color: '#885CA1' }}>
                        Co-founders, Reap Benefit
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <Stack>
                  <Avatar
                        alt="Remy Sharp"
                        src={Author}
                        sx={{
                          width: 70,
                          height: 70,
                          border: '1px solid black',
                        }}
                      />
                    </Stack> */}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ fontStyle: 'italic' }}>
                    Kuldeep Dantewadia is sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque
                    laudantium,totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae.{' '}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
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
          <Divider variant="middle" />
          <Grid
            container
            direction="row"
            justifyContent={{ xs: 'flex-start', md: 'flex-start' }}
            alignItems="center"
            mt={5}
          >
            <Grid item xs={4} md={3} sx={{ textAlign: 'start' }}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={extractedH2?.map((elem, index) => {
                  return { label: elem.replace(/<[^>]+>/g, ''), id: index };
                })}
                onChange={(e, value) => {
                  onBtnClick(value.id);
                }}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      placeholder="SEARCH"
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchOutlined />
                          </InputAdornment>
                        ),
                      }}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <Stack
                direction="row"
                justifyContent="flex-end"
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
                        height: '3.5rem',
                        width: '3.5rem',
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
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress
                    thickness={2}
                    variant="determinate"
                    value={scroll}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      <span id="time" style={{ fontSize: '40px' }}>
                        {readTime}
                      </span>
                      <br /> min read
                    </Typography>
                  </Box>
                </Box>

                <List>
                  <Typography
                    variant="h5"
                    sx={{ color: '#241C1599', fontWeight: '600' }}
                  >
                    {' '}
                    ARTICLE OUTLINE
                  </Typography>
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
              ref={ref}
            >
              <Title>
                <div id="article">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: result,
                    }}
                  />
                </div>
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
                <Typography variant="h4">Sanjay Purohit</Typography>
              </Box>
              <Typography
                variant="body"
                dangerouslySetInnerHTML={{
                  __html: author?.description,
                }}
              ></Typography>

              <Typography variant="h4" sx={{ pt: 5 }}>
                Sanjay Purohit
              </Typography>
              <Typography variant="body" sx={{ pb: 2 }}>
                Chief Curator
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Stories_Aritcle />
      </div>
    </>
  );
};

export default Indi_Article;
