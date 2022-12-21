import { styled } from "@mui/system";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import FONT from "../Themes/Font";
import PALETTE from "../Themes/Palette";

import Scribble from "../Assets/Images/scribble.png";
import ScribbleCircle from "../Assets/Images/scribble-circle.png";
import Art from "../Assets/Images/Artwork_3.png";

export const StickyButton = styled(Button)`
    border: none;
    background: none;

    &:hover {
        background: ${`url(${Scribble}) bottom no-repeat`};
    }

  h2 {
    font-family: ${FONT.FAMILY.ASSISTANT};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: 18px;
    // color: ${PALETTE.BLACK};
    color: #241c15;
  }
`;

export const Title = styled(Typography)`
    span:first-of-type {
        background: ${`url(${Scribble}) bottom no-repeat`};
    }

    span:nth-of-type(2) {
        background: ${`url(${ScribbleCircle}) center no-repeat`};
        background-size: contain;
    }
`;
export const AnimatedButton = styled(Button)`
<<<<<<< HEAD
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
=======
    .cta-btn:hover .hover-frame[data-num="1"] {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 114%;
    }

    .cta-btn:hover .hover-frame {
        opacity: 1;
    }
    .cta-btn:hover .hover-frame[data-num="1"]:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: url(https://barrowstreetnurseryschool.org/wp-content/themes/barrow/images/cta-hover2.svg)
            center center no-repeat;
        background-size: 100% 100%;
    }
    .cta-btn:hover .hover-frame[data-num="2"] {
        position: absolute;
        left: 0%;
        top: 0%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 118%;
    }
    .cta-btn:hover .hover-frame[data-num="2"]:before {
        content: "";
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
        font: 400 13px/1 "polysansmedian", sans-serif;
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
export const Section = styled(Box)`
  padding:4rem 0,
  "@media (min-width:550px) and (max-width:780px) ": {
    padding:2rem 0,
  }
  "@media (max-width:550px)": {
    padding:2rem 0,
>>>>>>> 145e56381a0854fbd57461edb376a706cc349bde
  }
`;
