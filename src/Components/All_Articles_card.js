import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { SelectChangeEvent } from "@mui/material/Select";
import { ArticleDescriptionSection, ArticleFilterSection, DescriptionSection, Section } from "../Themes/StyledComponent";
import dividerline from "../Assets/Images/Line 7.png";
import Story_card from "./Story_card";
import data from "../db.json";
import { ArticleLanding } from "../Themes/StyledComponent";

const All_Articles_card = (posts) => {
  const itemData = data.Article.Stories;
  console.log(posts, "post");
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  // const styles = {
  //   LandingBackground: {
  //     backgroundColor: "#EDEBEA",
  //     // color: "#fff",
  //     borderRadius: "30px 30px 0px 0px ",
  //     '@media (max-width: 550px)': {
  //       backgroundColor: "#ffffff !important",
  //     borderRadius: "30px 30px 0px 0px ",

  //     },
  //   },
  //   LandingBackground1: {
  //     backgroundColor: "#EDEBEA",
  //     borderRadius: "0px 0px 30px 30px ",
  //   },
  // };
  return (
    <>
      <Box id="article_cards">
        <Container>
          <ArticleFilterSection>
            <Grid
              container
              spacing={0}
              justifyContent="flex-start"
              alignItems="center"
              pt={{xs:2,sm:3,md:5}}
              pb={{xs:2,sm:0}}
              // px={{xs:2,md:5}}
              px={{ xs: 0, sm: 0 }}
            >
              <Grid item xs={12} sm={12} md={4} lg={4} spacing={0} p={{xs:2,sm:0
              }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                      id="demo-select-small"
                      sx={{ color: "#000", fontWeight: "600" }}
                    >
                      2022
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="2022"
                      onChange={handleChange}
                      sx={{
                        borderRadius: "25px",
                        border: "2px solid black",
                        color: "#000",
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{ m: 1, minWidth: 120, borderRadius: "25px" }}
                    size="small"
                  >
                    <InputLabel
                      id="demo-select-small"
                      sx={{ color: "#000", fontWeight: "600" }}
                    >
                      SECTOR
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="SECTOR"
                      onChange={handleChange}
                      sx={{ borderRadius: "25px", border: "2px solid black" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                      id="demo-select-small"
                      sx={{ color: "#000", fontWeight: "600" }}
                    >
                      VALUES
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="VALUES"
                      onChange={handleChange}
                      sx={{ borderRadius: "25px", border: "2px solid black" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </ArticleFilterSection>
          <ArticleDescriptionSection>
            <Box display={{xs:"none",sm:"block"}}>
            <img src={dividerline} width="100%" />
            </Box>
            <Box pt={5}>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                <b> EDITION 01</b>
              </Typography>
              <Typography variant="h3" textAlign="Left">
                Response. Responsibility. Resilience.
              </Typography>
            </Box>
            <Grid
              container
              spacing={0}
              justifyContent="space-evenly"
              alignItems="center"
              py={5}
              // px={{xs:2,md:5}}
              px={{ xs: 0, sm: 0 }}
            >
              {/* <Slider {...settings}> */}

              {itemData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} spacing={0}>
                  <Story_card
                    tag={item.tag}
                    title={item.title}
                    blurb={item.blurb}
                    edition={item.date}
                  />
                </Grid>
              ))}
              {/* </Slider> */}
            </Grid>
          </ArticleDescriptionSection>
        </Container>
      </Box>
    </>
  );
};

export default All_Articles_card;
