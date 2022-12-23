import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  Link,
  Stack,
  Box,
} from '@mui/material';
import Pen from '../Assets/Images/pen.png';
import Divider from '../Assets/Images/Vector 42.png';
import StoryImg from '../Assets/Images/image 50.png';
import LinkUnderline from '../Assets/Images/Vector 12.png';
import ArrowImage from '../Assets/Images/RightArrow.png';
import { Section } from '../Themes/StyledComponent';
import card from '../Assets/Images/Card.png';
import card1 from '../Assets/Images/Card1.png';
import card2 from '../Assets/Images/Card2.png';

const Stories = () => {
  const Stories = [
    {
      id: '1',
      title: 'Reimagining disaster resilience',
      image: card,
    },
    {
      id: '2',
      title: 'All teach, all learn',
      image: card1,
    },
    {
      id: '3',
      title: 'Solve small, dent big',
      image: card2,
    },
    {
      id: '4',
      title: 'Striking collaboration gold',
      image: card,
    },
    {
      id: '5',
      title: 'Build beyond',
      image: card1,
    },
    {
      id: '6',
      title: 'The power of public goods',
      image: card2,
    },
  ];
  const [arr, setArr] = useState([{ text: 'foo' }, { text: 'bar' }]);
  const [hover, setHover] = useState(false);
  const handleMouseEnter = (event, index) => {
    console.log(event, 'event', index);
    return { [index]: setHover(true) };
    // setHover((c) => {
    //   return {
    //     ...c,
    //     [index]: true,
    //   };
    // });
  };

  const handleMouseLeave = (event, index) => {
    return { [index]: setHover(false) };
    // setHover((c) => {
    //   return {
    //     ...c,
    //     [index]: false,
    //   };
    // });
  };

  // const handleMouseEnter = (event) => {
  //   // console.log(arrText.text, '-----------');
  //   // if (arrText.text === 'foo' && [index]) {
  //   return setHover(true);
  //   // }
  // };
  // const handleMouseLeave = (event) => {
  //   return setHover(false);
  // };

  return (
    <Section>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} alignItems="center">
            <Typography variant="h2" textAlign="left">
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
              <img src={Pen} alt="img" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} mt={{ xs: 1, sm: 5 }}>
            <Typography variant="body" textAlign="left">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin vivamus eu
              aenean interdum in proin id ut. Sit nisi eget enim sed dui sed.
              Sed cras nibh vehicula at ac sed elit diam. Diam vel eu nunc eu at
              odio.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            alignItems="center"
            display={{ xs: 'none', sm: 'block' }}
          >
            <img src={StoryImg} alt="img" width="100%" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <List pt={{ xs: 2, md: 9 }}>
              {Stories.map((item) => (
             
                 <ListItem id={item.id}>
                 <Typography variant="caption">
                   <Stack spacing={2} direction="row">
                     {item.title}
                     
                     <Box sx={{ width: '5rem' }}></Box>
                   </Stack>
                 </Typography>
               </ListItem>
               
              ))}
            
            </List>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};
export default Stories;
