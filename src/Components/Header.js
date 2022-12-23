import React from 'react';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Box,
  Fab,
  Fade,
  Grid,
  Button,
  Stack,
  Slide,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PropTypes from 'prop-types';
import logo from '../Assets/Images/sp_muse_logo.png';
import frame from '../Assets/Images/Frame.png';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const styles = {
  LandingBackground: {
    backgroundImage: `linear-gradient(to bottom, #ECE4EF, #ECE4EF)`,
    // backgroundColor:`#fff`,
  },
};
const buttonName = [
  {
    name: 'HOME',
    backgroundColor: '#E2D1ED',
    link: '/',
  },
  {
    name: 'ARTICLES',
    backgroundColor: '#3E418A',
    link: '/all-articles',
  },
  {
    name: 'EXPIRIENCE',
    backgroundColor: '#DC8F6E',
    link: '',
  },
  {
    name: 'CONTACT',
    backgroundColor: '#22534F',
    link: '',
  },
  {
    name: 'SHARE',
    backgroundColor: '#C4BCB9',
    link: '',
  },
];
const Header = (props) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 400,
        height:'100vh',
        paddingRight: '10px',
        mt: 5,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        //   alignItems="center"
        spacing={2}
      >
        <List>
          {buttonName.map((item) => (
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: item.backgroundColor,
                  borderRadius: '0 50px 50px 0',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  textAlign: 'center',
                  height: 100,
                  justifyContent: 'center',
                }}
              >
                {item.name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box py={3} px={3}>
          <Typography variant="h5">info@societalplatform.org</Typography>
          <ListItem
            disablePadding
            sx={{
              px: 1,
              width: '90px',
              backgroundColor: '#f2f0ed',
            }}
          >
            {/* <ListItemIcon> */}
            <FacebookOutlinedIcon color="secondary" />
            <InstagramIcon color="secondary" />
            <TwitterIcon color="secondary" />
            <LinkedInIcon color="secondary" />

            {/* </ListItemIcon> */}
          </ListItem>
        </Box>
      </Stack>
    </Box>
  );

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar elevation={0} className="AppBorder" color="inherit" pt={3}>
          <Box px={{ xs: 2, md: 8 }} py={{ xs: 2, sm: 0 }}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Grid item xs={2} sm={3} md={3} lg={3}>
                <img src={frame} alt="img" />
              </Grid>
              <Grid
                item
                xs={7}
                sm={6}
                md={6}
                lg={6}
                justifyContent="center"
                sx={{ textAlign: 'center' }}
                alignItems="center"
              >
                <img src={logo} alt="img" />
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <Box display={{ xs: 'block', md: 'none' }}>
                  {['Menu'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        onClick={toggleDrawer(anchor, true)}
                        variant="Menu-btn"
                      >
                        {anchor}
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Box>
          {/* <Box sx={{ my: 2 }}>
                        {[...new Array(120)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                            )
                            .join("\n")}
                    </Box> */}
        </Box>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </>
  );
};

export default Header;
