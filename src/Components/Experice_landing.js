import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// import { Container } from '@mui/system';
import React from "react";

import { LandingImage, Section } from "../Themes/StyledComponent";
import Divider from "../Assets/Images/Vector 6.png";
import Pen from "../Assets/Images/img-pen-white.png";
import Art from "../Assets/Images/Artwork_3.png";

import ButtonIcon from "../Assets/Images/Vector (Stroke).png";
import { Link, animateScroll as scroll } from "react-scroll";
import MuseButton from "./MuseButton";

const Experice_landing = () => {
  return (
    <>
      <Section pt={{ xs: 4, sm: 14, md: 13 }}>
         <Typography variant="h1">Experince</Typography>
      </Section>
    </>
  );
};

export default Experice_landing;
