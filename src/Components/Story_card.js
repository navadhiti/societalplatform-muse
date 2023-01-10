import {
  Chip,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  SpeedDial,
  Typography,
  Button,
} from '@mui/material';
import {
  useNavigate,
  Route,
  Routes,
  HashRouter as Router,
  ReactDOM,
} from 'react-router-dom';
import { useLocation } from 'react-router';

import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import card1 from '../Assets/Images/Card.png';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const styles = {
  LandingBackground: {
    backgroundImage: `linear-gradient(to bottom, #ECE4EF, #ECE4EF)`,
  },
};

const actions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const Story_card = ({ value, image, tag, title, blurb, edition,Number }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  // console.log(path, "currect path");
  const LongText = ({ content,limit}) => {
    const [showAll, setShowAll] = useState(false);
  
  
    if (content.length <= limit) {
      // there is nothing more to show
      return <div>{content}</div>
    }
  
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      
    </div>
  }
  return (
    <>
      <Card
        sx={{ m: 2, p: 2, borderRadius: '25px', minHeight: {xs:'15rem',md:"25rem"} }}
        key={value}
        onClick={() => {
          navigate('/indiviual-articles');
          window.scrollTo(0, 0);
        }}
      >
        <CardActionArea sx={{ borderRadius: '25px' }}>
          <CardMedia
            component="img"
            height={{xs:100,md:120}}
            image={card1}
            alt="green iguana"
          />
          <CardContent>
          {path != '/experince' ? (
            <Chip
              color="success"
              label={tag}
              sx={{ color: '#fff', fontWeight: 800, mb: 2 }}
            ></Chip>):""}

            {/* <Chip variant="tag">HEALTH</Chip> */}
            {path == '/experince' ? (
            <Box>
              <Typography variant="h5" textAlign="left"> {Number}</Typography>
            <Typography variant="h4" textAlign="left">{title}</Typography>
            </Box>
            )
            :<Typography variant="subtitle2"> <LongText content = {title} limit = {20} /></Typography>}
            
            {path == '/articles' ? (
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ minHeight: '2.5rem' }}
                pt={1}
              >
                 <LongText content = {blurb} limit = {75} />
                
              </Typography>
            ) : (
              ''
            )}
            <Typography gutterBottom variant="body1" component="div" pt={3}>
              {edition}
            </Typography>
            
            {/* <Button variant="outlined" endIcon={<SaveAltIcon />} sx={{borderRadius:"25px"}}>Download</Button>  */}
            {path == '/share' ? (
              <>
                <Button
                  variant="outlined"
                  endIcon={<SaveAltIcon />}
                  size="large"
                  sx={{ borderRadius: '25px',color:"#000",border: '1px solid black',textAlign:"left",ml:-12 }}
                >
                  Download
                </Button>
                <Box
                  sx={{
                    transform: 'translateZ(0px)',
                    flexGrow: 1,
                  }}
                >
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    direction="up"
                    sx={{
                      position: 'absolute',
                      bottom: '-0.5rem',
                      right: '1rem',
                      boxShadow: 'none',
                    }}
                    style={{boxShadow:"none !important"}}
                    icon={
                      <ShareIcon
                        sx={{
                          width: '35px',
                          height: '35px',
                          border: '1px solid black',
                          backgroundColor: '#fff',
                          borderRadius: '50%',
                          p: 1,
                          // boxShadow:
                          //   '0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)',
                            boxShadow:"none,"
                        }}
                        style={{boxShadow:"none !important"}}
                      />
                    }
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </SpeedDial>
                </Box>
              </>
            ) : (
             path != '/experince'?
             <Box
                sx={{
                  transform: 'translateZ(0px)',
                  flexGrow: 1,
                }}
              >
                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  direction="down"
                  sx={{
                    position: 'absolute',
                    bottom: {xs:'6rem',md:'9rem'},
                    right: '-1rem',
                    boxShadow: 'none',
                  }}
                  icon={
                    <ShareIcon
                      sx={{
                        width: '35px',
                        height: '35px',
                        border: '1px solid black',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        p: 1,
                        boxShadow:
                          '0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)',
                      }}
                    />
                  }
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>:""
            )}

            {/* <CardActions> */}

            {/* </CardActions> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Story_card;
