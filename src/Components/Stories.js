import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import image_30 from '../Assets/Images/image 30.png';
import Divider from '../Assets/Images/Vector 42.png';
import StoryImg from '../Assets/Images/image 50.png';

const Stories = () => {
  return (
    <div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Typography variant="h2">
                Our{' '}
                <span
                  style={{
                    background: ` url(${Divider}) bottom no-repeat`,
                    paddingBottom: '7px',
                    backgroundSize: 'contain',
                  }}
                >
                  Stories
                </span>
                <img src={image_30} alt="img" />
              </Typography>
              <img src={StoryImg} alt="img" style={{ marginTop: '70px' }} />
            </Grid>
            <Grid item xs={8} mt="60px">
              <Typography variant="h5">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin vivamus eu
                aenean interdum in proin id ut. Sit nisi eget enim sed dui sed.
                Sed cras nibh vehicula at ac sed elit diam. Diam vel eu nunc eu
                at odio.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Stories;
