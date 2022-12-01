import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Button,
} from '@mui/material';
import Divider from '../Assets/Images/Divider.png';
import logo from '../Assets/Images/Group 206.png';
import AvatarImage from '../Assets/Images/Mask group.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const OurCollaborators = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
  };
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          sx={{ py: 2 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={8} sx={{ textAlign: 'center' }}>
            <Typography variant="h2">Our Collaborators</Typography>
            <img src={Divider} alt="img" />
            <Slider {...settings}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                <Card
                  key={value}
                  sx={{
                    maxWidth: 250,
                    textAlign: 'center',
                    margin: '4rem auto',
                    border: '1px solid black',
                    borderRadius: '20px',
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
            <Button variant="contained" elevation="3" sx={{ mt: 5 }}>
              ALL CONTRIBUTORS
            </Button>
            <Button variant="contained" elevation="3" sx={{ mt: 5 }}>
              REACH OUT
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OurCollaborators;
