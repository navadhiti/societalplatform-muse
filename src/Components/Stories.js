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
import Divider from "../Assets/Images/Divider.png";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";

const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
];

const Stories = () => {
    return (
        <>
            <Box sx={{textAlign:'center'}}>
                <Container textAlign="center">
                    <Typography variant="h4" textAlign="center">
                        Stories of change
                    </Typography>
                    <img src={Divider} alt="img" />
                    <Grid
                        container
                        spacing={6}
                        justifyContent="center"
                        alignItems="center"
                        py={2}
                        my={5}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={3}

                            // px={4}
                        >
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            component="div"
                                        >
                                            Edition 01,2022
                                            <Badge variant="tag">HEALTH</Badge>
                                        </Typography>
                                        <Typography variant="h4">
                                            All teach,all Learn
                                        </Typography>

                                        {/* <CardActions> */}
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                            p={2}
                                        >
                                            <Button
                                                size="small"
                                                color="primary"
                                                variant="contained"
                                                px={3}
                                            >
                                                Read
                                            </Button>

                                            <Box
                                                sx={{
                                                    transform:
                                                        "translateZ(0px)",
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <SpeedDial
                                                    ariaLabel="SpeedDial basic example"
                                                    sx={{
                                                        position: "absolute",
                                                        bottom: "-2rem",
                                                        right: "-1rem",
                                                    }}
                                                    direction="left"
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
                                        </Stack>
                                        {/* </CardActions> */}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                       
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Stories;
