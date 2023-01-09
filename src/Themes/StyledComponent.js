import { styled } from '@mui/system';
import { Box, Button, Container, Typography } from '@mui/material';

import FONT from '../Themes/Font';
// import PALETTE from '../Themes/Palette';

import Scribble from '../Assets/Images/scribble.png';
import Scribble2 from '../Assets/Images/Vector 67.png';
import ScribbleCircle from '../Assets/Images/scribble-circle.png';
import Art from '../Assets/Images/Artwork_3.png';

export const StickyButton = styled(Button)`
  border: none;
  height: 1.5rem;
  background: none;
  text-transform: capitalize;

  &:hover {
    background: ${`url(${Scribble2}) bottom  no-repeat`};
    background-size: contain;
  }

  h2 {
    font-family: ${FONT.FAMILY.CAMPAIGN};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: 18px;
    color: #241c15;
    line-height: 20px;

    :hover {
      color: #865ba0;
    }
  }
`;

export const Title = styled(Typography)`
  span:first-of-type {
    background: ${`url(${Scribble}) bottom no-repeat`};
    background-size: contain;
  }

  span:nth-of-type(2) {
    background: ${`url(${ScribbleCircle}) center no-repeat`};
    background-size: contain;
  }

  h2 {
    font-family: ${FONT.FAMILY.CAMPAIGN};
    font-weight: ${FONT.WEIGHT.MEDIUM};
    font-size: ${FONT.SIZES[40]};
    color: #241c15;
  }

  p {
    font-family: ${FONT.FAMILY.ASSISTANT};
    font-size: ${FONT.SIZES[18]};
    color: #241c15;
  }

  p:first-of-type {
    font-family: ${FONT.FAMILY.CAMPAIGN};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[24]};
    color: #241c15;
  }

  blockquote p {
    font-family: ${FONT.FAMILY.CAMPAIGN};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[24]};
    text-align: center;
  }

  blockquote:nth-of-type(2) {
    color: 'red';
  }
`;

export const Frame = styled(Box)`
margin-left: 1rem;
  img {
    width: 40px;
    height: 40px;
    @media (max-width: 550px) {
      width: 20px;
      height: 20px;
    }
  }
`;
export const Logo = styled(Box)`
  img {
    width: auto;
    height: auto;
    @media (max-width: 550px) {
      width: 100%;
    }
  }
`;
export const LandingImage = styled(Box)`
  text-align: end;
  img {
    width: 100%;
    height: auto;
    @media (max-width: 990px) {
      width: 40%;
      text-align: end;
    }
  }
  @media (max-width: 550px) {
    text-align: center;
    img{
    width: 80%;
    }
  }
`;

export const Section = styled(Box)`
  padding: 4rem 0;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: '30px 0px 0px 30px ', @media (max-width: 990px) {
    height: auto !important;
    padding: 2rem 0 !important;
  }
  @media (max-width: 550px) {
    padding: 2rem 0 !important;
    height: auto !important;
  }
`;
export const CollaboratorsSection = styled(Box)`
  padding: 4rem 0;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: '30px 0px 0px 30px ';
  @media (max-width: 990px) {
    height: 111vh !important;
    padding: 2rem 0 !important;
  }
  @media (max-width: 550px) {
    height: auto !important;
    padding: 2rem 0 !important;
  }
`;
export const ImgBox = styled(Box)`
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid #4c4848;
  border-radius:5px;
  overflow hidden;
  padding:1px;
`;
export const Section1 = styled(Box)`
  padding: 4rem 0;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 2rem 0;
    height: 500px !important;
    display: flex;
    align-items: center;
  }

  @media (max-width: 550px) : {
    padding: 2rem 0;
    height: 500px !important;
    display: flex;
    align-items: center;
  }
`;
export const AnimatedButton = styled(Button)`
  .cta-btn:hover .hover-frame[data-num='1'] {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 114%;
  }

  .cta-btn:hover .hover-frame {
    opacity: 1;
  }
  .cta-btn:hover .hover-frame[data-num='1']:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(https://barrowstreetnurseryschool.org/wp-content/themes/barrow/images/cta-hover2.svg)
      center center no-repeat;
    background-size: 100% 100%;
  }
  .cta-btn:hover .hover-frame[data-num='2'] {
    position: absolute;
    left: 0%;
    top: 0%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 118%;
  }
  .cta-btn:hover .hover-frame[data-num='2']:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(https://barrowstreetnurseryschool.org/wp-content/themes/barrow/images/cta-hover1.svg)
      center center no-repeat;
    background-size: 100% 100%;
  }
  .cta-btn {
    display: inline-block;
    padding: 24px 32px 22px;
    border-radius: 31px;
    border: 0.12em solid #08212c;
    color: #08212c;
    font: 400 13px/1 'polysansmedian', sans-serif;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    position: relative;
  }
  .bounce {
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
  .bounce:hover {
    -webkit-animation: bounce 0.25s 2 linear alternate;
    -moz-animation: bounce 0.25s 2 linear alternate;
    -o-animation: bounce 0.25s 2 linear alternate;
    animation: bounce 0.25s 2 linear alternate;
  }

  .infinite:hover {
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @-webkit-keyframes bounce {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(3deg);
    }
    100% {
      -webkit-transform: rotate(-3deg);
    }
  }
`;

export const StyledContainer = styled(Container)`
background: ${`url(${Art}) bottom right no-repeat`};

height:'700px',
"@media (max-width:550px)": {
    height:'700px',
    backgroundSize: "contain",
},
`;
