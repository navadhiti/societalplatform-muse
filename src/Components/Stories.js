import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  Link,
  Stack,
  Box,
} from "@mui/material";
import Pen from "../Assets/Images/pen.png";
import Divider from "../Assets/Images/Vector 42.png";
import StoryImg from "../Assets/Images/image 50.png";
import LinkUnderline from "../Assets/Images/Vector 12.png";
import ArrowImage from "../Assets/Images/RightArrow.png";
import { Caption, Section } from "../Themes/StyledComponent";
import card from "../Assets/Images/Card.png";
import articleImage from "../Assets/Images/articleImage.png";
import card1 from "../Assets/Images/Card1.png";

import card2 from "../Assets/Images/Card2.png";

const Stories = () => {
  const Stories = [
    {
      id: "0",
      title: "<span className='link'>Reimagining</span> disaster resilience",
      image: StoryImg,
    },
    {
      id: "1",
      title: "All <span className='link'>teach,</span> all learn",
      image: articleImage,
    },
    {
      id: "2",
      title: "<span className='link'>Solve small,</span> dent big",
      image: card1,
    },
    {
      id: "3",
      title: "Striking <span className='link'>collaboration</span> gold",
      image: card2,
    },
    {
      id: "4",
      title: "When society, state and <br> markets <span className='link'> work together</span>",
      image: card1,
    },
    {
      id: "5",
      title: "Build <span className='link'>beyond</span>",
      image: card,
    },
    {
      id: "6",
      title: "The power of <span className='link'>public goods</span>",
      image: card1,
    },
  ];
  const [id, setId] = useState(0);
  const [hover, setHover] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(0);

  const handleMouseEnter = (event, index) => {
    console.log(event, "event", index);
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
              Our{" "}
              <span
                style={{
                  background: ` url(${Divider}) bottom no-repeat`,
                  paddingBottom: "7px",
                  backgroundSize: "contain",
                }}
              >
                Stories
              </span>
              <img src={Pen} alt="img" />
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            mt={{ xs: 1, sm: 5 }}
            sx={{ textAlign: "left" }}
          >
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
          py={4}
        >
          <Grid
            item
            xs={12}
            sm={6}
            alignItems="center"
            display={{ xs: "none", md: "block" }}
          >
            <img
              src={Stories[id].image}
              alt="img"
              width="100%"
              height="400px"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <List pt={{ xs: 2, md: 9 }}>
              {Stories.map((item, index) => (
                <ListItem
                  key={index}
                  id={item.id}
                  onMouseEnter={() => setId(item.id)}
                  // onMouseOut={() => setId(0)}
                >
                  <Caption
                    variant="caption"
                    onMouseEnter={() => setHoveredItem(index)}
                    className={hoveredItem === index && "ActiveClass Link"}
                    active
                  >
                    <Stack spacing={2} direction="row">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.title,
                        }}
                      />
                      <Box
                        sx={{ width: "5rem" }}
                        display={{ xs: "none", md: "block" }}
                      ></Box>
                    </Stack>
                  </Caption>
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
