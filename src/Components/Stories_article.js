

import {
    Badge,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import card1 from "../Assets/Images/Card.png";
import card2 from "../Assets/Images/Card1.png";
import card3 from "../Assets/Images/Card2.png";
// import Divider from "../Assets/Images/Divider.png";

import Pen from "../Assets/Images/pen.png";
import Divider from "../Assets/Images/Vector 42.png";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import Slider from 'react-slick';

const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
];
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: 'red',
          borderRadius: '50%',
        }}
        onClick={onClick}
      />
    );
  }
  const styles = {
    LandingBackground: {
     backgroundImage: `linear-gradient(to bottom, #ECE4EF, #ECE4EF)`,
    }, 
  };
const Stories_article = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
      };
    return (
        <>
            <Box sx={{textAlign:'center'}}  py={6}
                         style={styles.LandingBackground}>
                {/* <Container textAlign="center"> */}
                <Typography variant="h2" textAlign="center">
                            Our{" "}
                            <span
                                style={{
                                    background: ` url(${Divider}) bottom no-repeat`,
                                    paddingBottom: "7px",
                                    backgroundSize: "contain",
                                }}
                            >
                                Stories
                            </span>
                            <img src={Pen} alt="img" />
                        </Typography>
                    
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                       
                    >
                            {/* <Slider {...settings}> */}
                            {[0, 1, 2, ].map((value) => (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}

                            // px={4}
                        >
                            <Card sx={{m:2,p:2,borderRadius:"25px"}} key={value}>
                                <CardActionArea  sx={{borderRadius:"25px"}}>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={card1}
                                        alt="green iguana"
                                       
                                    />
                                    <CardContent>

<Badge color="secondary" badgeContent="HEALTH"  variant="tag"></Badge>
                                       
                                            {/* <Badge variant="tag">HEALTH</Badge> */}
                                        
                                        <Typography variant="h4">
                                            All teach,all Learn
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            component="div"
                                            pt={3}
                                        >
                                            Edition 01,2022
                                            
                                        </Typography>

                                        {/* <CardActions> */}
                                       
                                            <Box
                                                sx={{
                                                    transform:
                                                        "translateZ(0px)",
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <SpeedDial
                                                    ariaLabel="SpeedDial basic example"
                                                    direction="down"
                                                    sx={{
                                                        position: "absolute",
                                                        bottom: "-2rem",
                                                        right: "-1rem",
                                                    }}
                                                    icon={
                                                        <ShareIcon
                                                            sx={{
                                                                width: "35px",
                                                                height: "35px",
                                                                border: "1px solid black",
                                                                backgroundColor:
                                                                    "#fff",
                                                                borderRadius:
                                                                    "50%",
                                                                p: 1,
                                                            }}
                                                        />
                                                    }
                                                >
                                                    {actions.map((action) => (
                                                        <SpeedDialAction
                                                            key={action.name}
                                                            icon={action.icon}
                                                            tooltipTitle={
                                                                action.name
                                                            }
                                                        />
                                                    ))}
                                                </SpeedDial>
                                            </Box>
                                       
                                        {/* </CardActions> */}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                            ))}
                            {/* </Slider> */}
                       
                    </Grid>
                    <Box my={3}>
                    <Button variant="contained"  
                       >READ ARTICLES</Button>
                    </Box>
                    
                {/* </Container> */}
            </Box>
        </>
    );
};

export default Stories_article;