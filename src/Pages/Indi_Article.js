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
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StickyBox from 'react-sticky-box';

import ArticleImage from '../Assets/Images/articleImage.png';
// import ScribbleCircle from '../Assets/Images/scribble-circle.png';
import Author from '../Assets/Images/Author7.png';

import { StickyButton } from '../Themes/StyledComponent';

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

  const styles = {
    LandingBackground: {
      backgroundColor: '#fff',
      // backgroundColor: `#fff`,
    },
  };

  const extractedH2 = data?.content.rendered.match(/<h(.)>.*?<\/h\1>/g);

  return (
    <>
      <div style={styles.LandingBackground}>
        <Box>
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
              <div
                style={{
                  fontFamily: 'montserrat',
                  fontWeight: 440,
                  fontSize: '48px',
                  color: '#241C15',
                }}
                dangerouslySetInnerHTML={{
                  __html: data?.title.rendered,
                }}
              ></div>

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
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ textAlign: 'left' }}>
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Typography variant="h5"> ARTICLE OUTLINE</Typography>
                {extractedH2?.map((elem) => (
                  <StickyButton>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: elem,
                      }}
                    />
                  </StickyButton>
                ))}
                {/* </Link> */}
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
