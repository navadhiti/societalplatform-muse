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
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
const Header = (props) => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar elevation={0} className="AppBorder" color='inherit'>
          <Grid
            container
            spacing={0}
            justifyContent="flex-start"
            alignItems="center"
            className="p-5"
            sx={{ py: 2 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <NavigateBeforeIcon />
              <img src={frame} alt="img" />
            </Grid>
          </Grid>
          <Toolbar>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              alignItems="center"
              
            >
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <img src={logo} alt="img" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} justifyContent="flex-end" >
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  
                >
                  <Typography variant="body">GET IN TOUCH</Typography>

                  <Button variant="contained" elevation="3">
                    Read
                  </Button>
                  <Button variant="contained">EXPERIENCE</Button>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Container>
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
        </Container>
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
