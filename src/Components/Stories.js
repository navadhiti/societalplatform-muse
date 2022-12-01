import {
    Badge,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import card1 from "../Assets/Images/Card.png";
import card2 from "../Assets/Images/Card.png";
import card3 from "../Assets/Images/Card.png";

const Stories = () => {
    return (
        <>
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
                                <IconButton aria-label="share" variants="share" className="share">
                                    <ShareIcon />
                                </IconButton>
                            </Stack>
                        {/* </CardActions> */}
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Stories;
