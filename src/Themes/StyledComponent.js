import { styled } from '@mui/system';
import { Button, Grid } from '@mui/material';

import FONT from '../Themes/Font';
import PALETTE from '../Themes/Palette';

import Scribble from '../Assets/Images/scribble.png';

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
export const GRID11 = styled(Grid)`
  background-color:"red";
`;