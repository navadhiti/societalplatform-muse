import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Stack,
  Avatar,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ArticleImage from '../Assets/Images/articleImage.png';
import Scribble from '../Assets/Images/scribble.png';
import ScribbleCircle from '../Assets/Images/scribble-circle.png';
import Author from '../Assets/Images/Author7.png';

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
            <Grid item xs={7}>
              <Typography variant="h1">
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
                who keeps the street clean become a{' '}
                <span
                  style={{
                    background: ` url(${ScribbleCircle}) bottom no-repeat`,
                    paddingBottom: '7px',
                    backgroundSize: 'contain',
                  }}
                >
                  hero?
                </span>
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                mt={6}
                sx={{ textAlign: 'left' }}
              >
                <Grid item xs={1}>
                  {/* <Stack direction="row" spacing={2}> */}
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
                <Grid item xs={3}>
                  <Typography>WORDS BY</Typography>
                  <Typography>
                    Kuldeep Dantewadia <br />
                    Gautam Prakash
                  </Typography>
                  <Typography>Co-founders, Reap Benefit</Typography>
                </Grid>

                {/* </Stack> */}

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
              <img src={ArticleImage} alt="img" width="80%" />
            </Grid>
          </Grid>
          {/* </Container> */}
        </Box>
      </div>
    </>
  );
};

export default Indi_Article;
