import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  Stack,
} from '@mui/material';
import Divider from '../Assets/Images/Divider.png';
import logo from '../Assets/Images/Group 206.png';
import AvatarImage from '../Assets/Images/Mask group.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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

const OurCollaborators = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          sx={{ py: 5 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h4">Our Collaborators</Typography>
            <img src={Divider} alt="img" />
            <Slider {...settings}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                <Card
                  key={value}
                  sx={{
                    maxWidth: 300,
                    textAlign: 'center',
                    margin: '2rem auto',
                    border: '1px solid black',
                    borderRadius: '20px',
                    boxShadow:
                      '0px 6px 0px -4px rgb(24 12 12 / 99%), 0px 2px 2px 0px rgb(0 0 0 / 98%), 0px 8px 0px 0px rgb(0 0 0 / 95%)',
                  }}
                >
                  <CardHeader avatar={<img src={logo} alt="img" />} />
                  <Avatar
                    alt="Img"
                    src={AvatarImage}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: '0 auto',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h4">
                      Kuldeep
                      <br /> Dantewadia
                    </Typography>
                    <Typography>Co-founder & CEO</Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              my={2}
            >
              <Button variant="contained">ALL CONTRIBUTORS</Button>
              <Button variant="contained">REACH OUT</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OurCollaborators;
