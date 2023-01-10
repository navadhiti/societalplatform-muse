import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import data from "../db.json";
import Story_card from './Story_card';
import Divider from "../Assets/Images/Vector 6.png";
import { Section } from '../Themes/StyledComponent';



const ExperinceIntro = () => {
  const itemData = data.Article.Stories;

  return (
    <>
      <Section id="Experince_intro">
      <Container>
          
          {/* <ArticleDescriptionSection> */}
          
            <Box pt={5}>
             
              <Typography variant="h1" textAlign="center">
                 
                <b>
                  {" "}
                  How to{" "}
                  <span
                    style={{
                      background: ` url(${Divider}) bottom no-repeat`,
                      paddingBottom: "16px",
                      backgroundSize: "contain",
                    }}
                  >
                    play
                  </span>
                  {/* <img src={Pen} alt="img" width="10%" /> */}
                </b>
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
                <Grid item xs={12} sm={6} md={4} lg={4} spacing={0}>
                  <Story_card
                    title="Select the arch from the right panel"
                    Number="01"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} spacing={0}>
                  <Story_card
                    title="Drag and drop the arch onto the illustration"
                    Number="02"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} spacing={0}>
                  <Story_card
                    title="Adjust the
                    arch to fit in 
                    the illustration"
                    Number="03"
                  />
                </Grid>
        
            </Grid>
          {/* </ArticleDescriptionSection> */}
        </Container>
      </Section>

    </>
  )
}

export default ExperinceIntro;