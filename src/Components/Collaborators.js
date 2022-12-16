import {
  Box,
  Button,
  Grid,
  ImageList,
  Typography,
  Container,
} from '@mui/material';
import React from 'react';
import Author1 from '../Assets/Images/Author1.png';
import Author2 from '../Assets/Images/Author2.png';
import Author3 from '../Assets/Images/Author3.png';
import Author4 from '../Assets/Images/Author4.png';
import Author5 from '../Assets/Images/Author5.png';
import Author6 from '../Assets/Images/Author6.png';
import Author7 from '../Assets/Images/Author7.png';
import Author8 from '../Assets/Images/Author8.png';
import Author9 from '../Assets/Images/Author9.png';
import Author10 from '../Assets/Images/Author10.png';

import Divider from '../Assets/Images/Divider.png';

const Collaborators = () => {
  const itemData = [
    {
      img: Author1,
      title: 'Sanjay Purohit',
      subTitle: 'SP',
    },
    {
      img: Author2,
      title: 'Dr. Sunil Anand',
      subTitle: 'ECHO',
    },
    {
      img: Author3,
      title: 'Viraaj Tyagi',
      subTitle: 'E.GOV',
    },
    {
      img: Author4,
      title: 'Sharmi Surianarian',
      subTitle: 'HARAMBEE',
    },
    {
      img: Author5,
      title: 'Khushboo Awasthi',
      subTitle: 'SHIKSHALOKAM',
    },
    {
      img: Author6,
      title: 'Sascha Hasselmeyer',
      subTitle: 'CITYMART',
    },
    {
      img: Author7,
      title: 'Kuldeep & Gautam',
      subTitle: 'Reap benefit',
    },
    {
      img: Author8,
      title: 'Dr. Manu Gupta',
      subTitle: 'SEEDS',
    },
    {
      img: Author9,
      title: 'Donald Gips',
      subTitle: 'SKOLL FOUNdATION',
    },
    {
      img: Author10,
      title: 'Rohini Nilekani',
      subTitle: 'citymart',
    },
  ];
  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            spacing={0}
            justifyContent="start"
            alignItems="start"
            sx={{ py: 5 }}
          >
            <Grid item xs={12} sm={12} md={5} lg={5} sx={{ textAlign: 'left' }}>
              <Typography variant="h1" textAlign="Left">
                Our{' '}
                <span
                  style={{
                    background: ` url(${Divider}) bottom no-repeat`,
                    paddingBottom: '05px',
                    backgroundSize: 'contain',
                  }}
                >
                  collaborators
                </span>
              </Typography>
              <Typography variant="body1" py={5}>
                Lorem ipsum dolor sit amet consectetur. Vivamus eu aenean
                interdum in proin id ut.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            justifyContent="flex-end"
            alignItems=""
            sx={{ py: 5 }}
          >
            <Grid item xs={12} sm={12} md={2} lg={2} sx={{ textAlign: 'left' }}>
              <Button variant="contained" px={5} py={5}>
                See All
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={10}
              lg={10}
              sx={{ textAlign: 'left' }}
            >
              {/* <ImageList variant="masonry" cols={5} gap={8}>
                            {itemData.map((item) => (
                                <>
                                    <ImageListItem  sx={{border:'solid 1px black',
                                            borderRadius:"5px",
                                            padding:'5px'
                                        }}>
                                        <img
                                            src={item.img}
                                            srcSet={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                            p={2}
                                           
                                        />
                                          <Typography variant="body1" textAlign="center">
                                    {item.title}
                                    </Typography>
                                    <Typography variant="body2" textAlign="center">
                                    {item.subTitle}
                                    </Typography>
                                    </ImageListItem>
                                  
                                </>
                            ))}
                        </ImageList> */}

              <Grid
                container
                // spacing={2}
                rowSpacing={1}
                columnSpacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: -30 }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={2}
                  sx={{ textAlign: 'left' }}
                >
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                    }}
                  >
                    <img src={Author1} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={2}
                  sx={{ textAlign: 'left' }}
                >
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      my: 2,
                    }}
                  >
                    <img src={Author2} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                    }}
                  >
                    <img src={Author3} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={2}
                  sx={{ textAlign: 'left' }}
                >
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      my: 2,
                      marginRight: '-10px',
                    }}
                  >
                    <img src={Author4} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      my: 2,
                      marginRight: '-5px',
                    }}
                  >
                    <img src={Author5} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      marginRight: '-10px',
                    }}
                  >
                    <img src={Author6} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={2}
                  sx={{ textAlign: 'left' }}
                >
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      marginRight: '-30px',
                    }}
                  >
                    <img src={Author7} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      my: 2,
                      marginRight: '-10px',
                    }}
                  >
                    <img src={Author8} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      marginRight: '-30px',
                    }}
                  >
                    <img src={Author9} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}>
                  <Box
                    sx={{
                      border: 'solid 1px black',
                      borderRadius: '5px',
                      padding: '5px',
                      mt: '-10',
                      ml: '5px',
                    }}
                  >
                    <img src={Author10} alt="img" />
                    <Typography variant="body1" textAlign="center">
                      Sanjay Purohit
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      SP
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Collaborators;
