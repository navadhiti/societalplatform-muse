import React from 'react';
import {
  Box,
  //   Container,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Stack,
  Avatar,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ArticleImage from '../Assets/Images/articleImage.png';
// import Scribble from '../Assets/Images/scribble.png';
// import ScribbleCircle from '../Assets/Images/scribble-circle.png';
import Author from '../Assets/Images/Author7.png';

import Data from '../db.json';

const Indi_Article = () => {
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

  const styles = {
    LandingBackground: {
      backgroundColor: '#fff',
      // backgroundColor: `#fff`,
    },
  };
  return (
    <>
      <div style={styles.LandingBackground}>
        {/* <Container sx={{minHeight: '500px'}}></Container> */}
        <Box>
          {/* <Container> */}
          <Stack spacing={2} mt="40px">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
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
              {Data.map((content) => (
                <Typography variant="h1">{content.title.rendered}</Typography>
              ))}
              {/* <Typography variant="h1">
                Can{' '}
                <span
                  style={{
                    background: ` url(${Scribble}) bottom no-repeat`,
                    //   paddingBottom: 'px',
                    backgroundSize: 'contain',
                  }}
                >
                  anyone
                </span>{' '}
                who <br />
                keeps the street
                <br /> clean become a{' '}
                <span
                  style={{
                    background: ` url(${ScribbleCircle}) bottom no-repeat`,
                    paddingBottom: '7px',
                    backgroundSize: 'contain',
                  }}
                >
                  hero?
                </span>
              </Typography> */}
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
                  {Data.map((content) => (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: content.excerpt.rendered,
                      }}
                    ></div>
                  ))}
                  {/* <Typography>
                    Kuldeep Dantewadia is sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque
                    laudantium,totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae.{' '}
                  </Typography> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              {Data.map((content) => (
                <img
                  src={content._links['wp:featuredmedia'][0].href}
                  alt="img"
                  width="100%"
                />
              ))}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <p>this is hanging sidebar</p>
            </Grid>
            <Grid item xs={7} sx={{ textAlign: 'left' }}>
              {Data.map((content) => (
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.content.rendered,
                  }}
                ></div>
              ))}
            </Grid>
          </Grid>
          {/* </Container> */}
        </Box>
      </div>
    </>
  );
};

export default Indi_Article;
