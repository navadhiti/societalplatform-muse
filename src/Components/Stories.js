import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import card1 from '../Assets/Images/Card.png';
import card2 from '../Assets/Images/Card1.png';
import card3 from '../Assets/Images/Card2.png';
import Divider from '../Assets/Images/Divider.png';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import Slider from 'react-slick';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'red',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}
const styles = {
  LandingBackground: {
    backgroundImage: `linear-gradient(to bottom, #ECE4EF, #ECE4EF)`,
  },
};
const Stories = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    variableWidth: true,
  };
  return (
    <>
      <Box sx={{ textAlign: 'center' }} py={6} style={styles.LandingBackground}>
        {/* <Container textAlign="center"> */}
        <Typography variant="h4" textAlign="center">
          Stories of change
        </Typography>
        <img src={Divider} alt="img" />
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}

            // px={4}
          >
            <Slider {...settings}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                <Card
                  sx={{
                    m: 2,
                    p: 2,
                    maxWidth: 350,
                    border: '1px solid black',
                    borderRadius: '20px',
                  }}
                  key={value}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={card1}
                    alt="green iguana"
                  />
                  <CardActionArea>
                    <CardContent sx={{ justifyContent: 'left' }}>
                      <Typography gutterBottom variant="body1" component="div">
                        Edition 01,2022
                        <Badge variant="tag">HEALTH</Badge>
                      </Typography>
                      <Typography variant="h4">All teach,all Learn</Typography>

                      {/* <CardActions> */}
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        p={2}
                      >
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          px={3}
                        >
                          Read
                        </Button>

                        <Box
                          sx={{
                            transform: 'translateZ(0px)',
                            flexGrow: 1,
                          }}
                        >
                          <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{
                              position: 'absolute',
                              bottom: '-2rem',
                              right: '-1rem',
                            }}
                            icon={
                              <ShareIcon
                                sx={{
                                  width: '35px',
                                  height: '35px',
                                  border: '1px solid black',
                                  backgroundColor: '#fff',
                                  borderRadius: '50%',
                                  p: 1,
                                }}
                              />
                            }
                          >
                            {actions.map((action) => (
                              <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                              />
                            ))}
                          </SpeedDial>
                        </Box>
                      </Stack>
                      {/* </CardActions> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Box my={3}>
          <Button variant="contained">READ ARTICLES</Button>
        </Box>

        {/* </Container> */}
      </Box>
    </>
  );
};

export default Stories;
