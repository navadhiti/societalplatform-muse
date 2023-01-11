import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import data from "../db.json";
import backgroud from "../Assets/Images/Authors/bg1.png";
import backgroud1 from "../Assets/Images/Authors/bg2.png";
import Verticleline from "../Assets/Images/varticleLine.png";

import MuseButton from "./MuseButton";
import { AnimatedButton, Section } from "../Themes/StyledComponent";
import Author2 from "../Assets/Images/Authors/Author2.png";
// import { LinkedinIcon, TwitterIcon } from "react-share";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

console.log(data.home.Authors, "authors");
const author = data.home.Authors;

const Author_details = () => {
  const LongText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    if (content.length <= limit) {
      // there is nothing more to show
      return <div>{content}</div>;
    }
    if (showAll) {
      // We show the extended text and a link to reduce it
      return (
        <div>
          {content} <br></br>
          <a onClick={showLess}>
            <b>
              <u>See less</u>
            </b>
          </a>
        </div>
      );
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return (
      <div>
        {toShow}
        <a onClick={showMore}>
          <b>
            <u>See more</u>
          </b>
        </a>
      </div>
    );
  };

  return (
    <>
      <Box>
        <Container>
          <Box py={5} id="Author">
            {author.map((item, index) => (
              <Grid
                container
                spacing={0}
                justifyContent="space-evenly"
                alignItems="center"
                my={5}
                py={5}
                px={{xs:1,sm:3,md:5}}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                }}
              >
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Box
                    sx={{
                      // border: "solid 1px black",
                      // borderRadius: "5px",
                      height: "250px",
                      width: "150px",
                      padding: "37px 10px 0px 11px",
                      margin: "10px auto",
                      background: ` url(${backgroud}) center no-repeat`,
                      backgroundSize: "contain",
                      "@media (max-width:550px)": {
                      height: "200px",
                        background:"none",
                      },
                    }}
                  >
                    <Box sx={{ border: "2px solid black", borderRadius: "", }}>
                      <img src={Author2} width="100%" sx={{ border: "2px solid black", borderRadius: "", }} />
                    </Box>

                    <Typography variant="body1" textAlign="center">
                      <b>{item.author}</b>
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      {item.designation}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  textAlign={{ xs: "center", md: "left" }}
                  // sx={{borderLeft:"1px solid black"}}\
                  display={{ xs: "none", sm: "block" }}
                >
                  <Box></Box>
                  <img src={Verticleline} />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={8}
                  lg={8}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  {/* <Divider orientation="vertical" flexItem ></Divider> */}

                  <Box display={{ xs: "block", sm: "none" }}>
                    <Typography variant="body">
                      <LongText content={item.blurb} limit={80} />
                    </Typography>
                  </Box>
                  <Box display={{ xs: "none", sm: "block" }}>
                    <Typography variant="body">{item.blurb}</Typography>
                  </Box>
                  <br />
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <MuseButton title="Read Article" />
                   
                      {/* <ListItemIcon> */}
                      <LinkedInIcon color="secondary" sx={{
                        borderRadius:'50%',
                        border:'1px solid black',px: 1,
                        width: "40px",height:"40px" ,mr:1}}/>
                      <InstagramIcon color="secondary"  sx={{
                        borderRadius:'50%',
                        border:'1px solid black',px: 1,
                        width: "40px",height:"40px"}}/>

                      {/* </ListItemIcon> */}
                    {/* </Box> */}
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Author_details;
