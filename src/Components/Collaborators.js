import {
  Box,
  Button,
  Grid,
  ImageList,
  Typography,
  Container,
  ImageListItem,
} from "@mui/material";
import React from "react";
import Author1 from "../Assets/Images/Authors/Author1.png";
import Author2 from "../Assets/Images/Authors/Author2.png";
import Author3 from "../Assets/Images/Authors/Author3.png";
import Author4 from "../Assets/Images/Authors/Author4.png";
import Author5 from "../Assets/Images/Authors/Author5.png";
import Author6 from "../Assets/Images/Authors/Author6.png";
import Author7 from "../Assets/Images/Authors/Author7.png";
import Author8 from "../Assets/Images/Authors/Author8.png";
import Author9 from "../Assets/Images/Authors/Author9.png";
import Author10 from "../Assets/Images/Authors/Author10.png";
import backgroud1 from "../Assets/Images/Authors/bg1.png";
import backgroud2 from "../Assets/Images/Authors/bg2.png";
import backgroud3 from "../Assets/Images/Authors/bg3.png";
import backgroud4 from "../Assets/Images/Authors/bg4.png";
import backgroud5 from "../Assets/Images/Authors/bg5.png";
import backgroud6 from "../Assets/Images/Authors/bg6.png";
import backgroud7 from "../Assets/Images/Authors/bg7.png";
import backgroud8 from "../Assets/Images/Authors/bg8.png";
import backgroud9 from "../Assets/Images/Authors/bg9.png";
import backgroud10 from "../Assets/Images/Authors/bg10.png";

import {
  Section,
  ImgBox,
  CollaboratorsSection,
} from "../Themes/StyledComponent";
import {
  Author_1,
  Author_2,
  Author_3,
  Author_4,
  Author_5,
  Author_6,
  Author_7,
  Author_8,
  Author_9,
  Author_10,
} from "../Themes/AuthorStyle";

// import { ImgBox } from '../Themes/StyledComponent';

import Divider from "../Assets/Images/Vector 12.png";
import Pen from "../Assets/Images/img-pen.png";
import { AnimatedButton } from "../Themes/StyledComponent";
import MuseButton from "./MuseButton";

const Collaborators = () => {
  const itemData = [
    {
      img: Author1,
      title: "Sanjay Purohit",
      subTitle: "SP",
    },
    {
      img: Author2,
      title: "Dr. Sunil Anand",
      subTitle: "ECHO",
    },
    {
      img: Author3,
      title: "Viraaj Tyagi",
      subTitle: "E.GOV",
    },
    {
      img: Author4,
      title: "Sharmi Surianarian",
      subTitle: "HARAMBEE",
    },
    {
      img: Author5,
      title: "Khushboo Awasthi",
      subTitle: "SHIKSHALOKAM",
    },
    {
      img: Author6,
      title: "Sascha Hasselmeyer",
      subTitle: "CITYMART",
    },
    {
      img: Author7,
      title: "Kuldeep & Gautam",
      subTitle: "Reap benefit",
    },
    {
      img: Author8,
      title: "Dr. Manu Gupta",
      subTitle: "SEEDS",
    },
    {
      img: Author9,
      title: "Donald Gips",
      subTitle: "SKOLL FOUNDATION",
    },
    {
      img: Author10,
      title: "Rohini Nilekani",
      subTitle: "CITYMART",
    },
  ];
  return (
    <>
      {/* <Section pt={{ xs: 4, sm: 4, md: 13 }} > */}
      <CollaboratorsSection pt={{ xs: 4, sm: 4, md: 13 }}>
        <Container>
          <Grid
            container
            spacing={0}
            justifyContent="start"
            alignItems="start"
            py={{ xs: 4, sm: 4, md: 5 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "left" }}>
              <Typography variant="h1" textAlign="Left">
                <b>
                  {" "}
                  Our{" "}
                  <span
                    style={{
                      background: ` url(${Divider}) bottom no-repeat`,
                      paddingBottom: "16px",
                      backgroundSize: "contain",
                    }}
                  >
                    collaborators
                  </span>
                  <img src={Pen} alt="img" width="10%" />
                </b>
              </Typography>
              <Box pt={{ xs: 2, sm: 2, md: 5 }}>
                <Typography variant="body">
                  Lorem ipsum dolor sit amet consectetur.
                  <br /> Vivamus eu aenean interdum in proin id ut.
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              spacing={0}
              justifyContent={{
                xs: "flex-end",
                md: "flex-end",
              }}
              alignItems="center"
              py={{ xs: 2, sm: 2, md: 5 }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
              alignItems="felx-end"

                sx={{ textAlign: "left" }}
              >
                <MuseButton title="See All" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                lg={10}
                sx={{ textAlign: "left" }}
              >
                <Box display={{ xs: "block", sm: "none", md: "none" }}>
                  <Grid
                    container
                    // spacing={2}
                    rowSpacing={1}
                    columnSpacing={2}
                    justifyContent="center"
                    alignItems="center"
                    mt={{ xs: 3, md: -30 }}
                  >
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                      <Author_1>
                        <ImgBox>
                          <img src={itemData[0].img} alt="img" width="100%" />
                        </ImgBox>
                        {console.log(itemData[0].img, "author")}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[0].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[0].subTitle}
                        </Typography>
                      </Author_1>
                      <Author_3>
                        <ImgBox>
                          <img src={itemData[2].img} alt="img" width="100%" />
                        </ImgBox>

                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[2].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[2].subTitle}
                        </Typography>
                      </Author_3>
                      <Author_5>
                        <ImgBox>
                          <img src={itemData[4].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[4].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[4].subTitle}
                        </Typography>
                      </Author_5>
                      <Author_7>
                        <ImgBox>
                          <img src={itemData[6].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[6].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[6].subTitle}
                        </Typography>
                      </Author_7>
                      <Author_9>
                        <ImgBox>
                          <img src={itemData[8].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[8].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[8].subTitle}
                        </Typography>
                      </Author_9>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                      <Author_2 mb={2} my={1}>
                        <ImgBox>
                          <img src={itemData[1].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[1].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[1].subTitle}
                        </Typography>
                      </Author_2>
                      <Author_4>
                        <ImgBox>
                          <img src={itemData[3].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[3].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[3].subTitle}
                        </Typography>
                      </Author_4>
                      <Author_6>
                        <ImgBox>
                          <img src={itemData[5].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[5].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[5].subTitle}
                        </Typography>
                      </Author_6>
                      <Author_8>
                        <ImgBox>
                          <img src={itemData[7].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[7].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[7].subTitle}
                        </Typography>
                      </Author_8>
                      <Author_10>
                        <ImgBox>
                          <img src={itemData[9].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[9].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[9].subTitle}
                        </Typography>
                      </Author_10>
                    </Grid>
                  </Grid>
                </Box>
                <Box display={{ xs: "none", sm: "block", md: "none" }}>
                  <Grid
                    container
                    // spacing={2}
                    rowSpacing={1}
                    columnSpacing={2}
                    justifyContent="center"
                    alignItems="flex-start"
                    mt={{ xs: 3, md: -30 }}
                  >
                    <Grid item xs={6} sm={4} md={2} lg={2}>
                      <Author_1>
                        <ImgBox>
                          <img src={itemData[0].img} alt="img" width="100%" />
                        </ImgBox>
                        {console.log(itemData[0].img, "author")}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[0].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[0].subTitle}
                        </Typography>
                      </Author_1>
                      <Author_2 mb={2} my={1}>
                        <ImgBox>
                          <img src={itemData[1].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[1].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[1].subTitle}
                        </Typography>
                      </Author_2>
                      <Author_3>
                        <ImgBox>
                          <img src={itemData[2].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[2].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[2].subTitle}
                        </Typography>
                      </Author_3>
                      <Author_4>
                        <ImgBox>
                          <img src={itemData[3].img} alt="img" width="100%" />
                        </ImgBox>

                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[3].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[3].subTitle}
                        </Typography>
                      </Author_4>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={2}>
                      <Author_5>
                        <ImgBox>
                          <img src={itemData[4].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[4].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[4].subTitle}
                        </Typography>
                      </Author_5>
                      <Author_6>
                        <ImgBox>
                          <img src={itemData[5].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[5].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[5].subTitle}
                        </Typography>
                      </Author_6>
                      <Author_7>
                        <ImgBox>
                          <img src={itemData[6].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[6].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[6].subTitle}
                        </Typography>
                      </Author_7>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={2}>
                      <Author_8>
                        <ImgBox>
                          <img src={itemData[7].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[7].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[7].subTitle}
                        </Typography>
                      </Author_8>
                      <Author_9>
                        <ImgBox>
                          <img src={itemData[8].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[8].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[8].subTitle}
                        </Typography>
                      </Author_9>
                      <Author_10>
                        <ImgBox>
                          <img src={itemData[9].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[9].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[9].subTitle}
                        </Typography>
                      </Author_10>
                    </Grid>
                  </Grid>
                </Box>
                <Box display={{ xs: "none", sm: "none", md: "block" }}>
                  <Grid
                    container
                    // spacing={2}
                    rowSpacing={1}
                    columnSpacing={2}
                    justifyContent="center"
                    alignItems="center"
                    mt={{ xs: 3, md: -30 }}
                  >
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={2}
                      lg={2}
                      sx={{ textAlign: "left" ,pl:4}}
                      pl={4}
                    >
                      <Author_1>
                        <ImgBox>
                          <img src={itemData[0].img} alt="img" width="100%" />
                        </ImgBox>
                        {console.log(itemData[0].img, "author")}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[0].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[0].subTitle}
                        </Typography>
                      </Author_1>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={2}
                      lg={2}
                      sx={{ textAlign: "left" ,paddingLeft:"4rem"}}
                      ml={0}
                      mr={2}
                    >
                      <Author_2 mb={2} my={1}>
                        <ImgBox>
                          <img src={itemData[1].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[1].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[1].subTitle}
                        </Typography>
                      </Author_2>
                      <Author_3>
                        <ImgBox>
                          <img src={itemData[2].img} alt="img" width="100%" />
                        </ImgBox>

                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[2].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[2].subTitle}
                        </Typography>
                      </Author_3>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} pl={0} sx={{paddingLeft:"4rem"}}>
                      <Author_4>
                        <ImgBox>
                          <img src={itemData[3].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[3].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[3].subTitle}
                        </Typography>
                      </Author_4>
                      <Author_5>
                        <ImgBox>
                          <img src={itemData[4].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[4].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[4].subTitle}
                        </Typography>
                      </Author_5>
                      <Author_6>
                        <ImgBox>
                          <img src={itemData[5].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[5].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[5].subTitle}
                        </Typography>
                      </Author_6>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={2}
                      lg={2}
                      sx={{ textAlign: "left" }}
                    >
                      <Author_7>
                        <ImgBox>
                          <img src={itemData[6].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[6].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[6].subTitle}
                        </Typography>
                      </Author_7>
                      <Author_8>
                        <ImgBox>
                          <img src={itemData[7].img} alt="img" width="100%" />
                        </ImgBox>{" "}
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[7].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[7].subTitle}
                        </Typography>
                      </Author_8>
                      <Author_9>
                        <ImgBox>
                          <img src={itemData[8].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[8].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[8].subTitle}
                        </Typography>
                      </Author_9>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} sx={{paddingLeft:"4rem"}}>
                      <Author_10>
                        <ImgBox>
                          <img src={itemData[9].img} alt="img" width="100%" />
                        </ImgBox>
                        <Typography variant="body1" textAlign="center">
                          <b>{itemData[9].title}</b>
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                          {itemData[9].subTitle}
                        </Typography>
                      </Author_10>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </CollaboratorsSection>
      {/* </Section> */}
    </>
  );
};

export default Collaborators;
