import React from 'react';
import {
  Box,
  //   Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import LandingImage from '../Assets/Images/sp-muse-read-banner-04 2.png';
import Image from '../Assets/Images/sp-musebook-design.png';
import Image1 from '../Assets/Images/image_4.png';
import Blurb from './Blurb';

import PropTypes from 'prop-types';
import Blurb_1 from './Blurb1';
import Blub2 from './Blub2';
import Collaborators from './Collaborators';
import Values from './Values';
import Stories from './Stories';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



const TabSection = () => {
  const [value, setValue] = React.useState(0);

 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      
    </>
  );
};

export default TabSection;
