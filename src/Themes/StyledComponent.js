import { styled } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';

import FONT from '../Themes/Font';
import PALETTE from '../Themes/Palette';

import Scribble from '../Assets/Images/scribble.png';
import ScribbleCircle from '../Assets/Images/scribble-circle.png';

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
    color: ${PALETTE.SENARY};
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
export const GRID11 = styled(Grid)`
  background-color: 'red';
`;
