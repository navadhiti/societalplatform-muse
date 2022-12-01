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
} from '@mui/material';
import Divider from '../Assets/Images/Divider.png';
import logo from '../Assets/Images/Group 206.png';
import AvatarImage from '../Assets/Images/Mask group.png';

const OurCollaborators = () => {
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
            <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
              {/* {[0, 1, 2].map(() => ( */}
              <div>
                <Card
                  sx={{
                    maxWidth: 345,
                  }}
                >
                  <CardHeader avatar={<img src={logo} alt="img" />} />
                  <Avatar
                    alt="Remy Sharp"
                    src={AvatarImage}
                    sx={{
                      width: 100,
                      height: 100,
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
              </div>
              {/* ))} */}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OurCollaborators;
