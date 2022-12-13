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
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TwitterIcon from '@mui/icons-material/Twitter';
import Slider from 'react-slick';
import DataFromDB from '../db.json';
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookShareCount,
  FacebookIcon,
} from 'react-share';

console.log(DataFromDB);

const facebookURL = 'https://www.navadhiti.com/';

const actions = [
  {
    icon: (
      <FacebookShareButton url={facebookURL}>
        <FacebookIcon round={true} />
      </FacebookShareButton>
    ),
    name: 'Facebook',
  },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <PictureAsPdfIcon />, name: 'PDF' },
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
              {DataFromDB.map((data) => (
                <Card
                  sx={{
                    m: 2,
                    p: 2,
                    maxWidth: 350,
                    border: '1px solid black',
                    borderRadius: '20px',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={card1}
                    alt="green iguana"
                  />
                  {/* <CardActionArea> */}
                  <CardContent sx={{ justifyContent: 'left' }}>
                    <Typography gutterBottom variant="body1" component="div">
                      Edition {new Date(data.date).toLocaleDateString('en-CA')}
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
                  {/* </CardActionArea> */}
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
