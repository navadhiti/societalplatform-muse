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
} from "@mui/material";
import {
    useNavigate,
    Route,
    Routes,
    HashRouter as Router,
    ReactDOM,
} from "react-router-dom";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import card1 from "../Assets/Images/Card.png";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
const styles = {
    LandingBackground: {
        backgroundImage: `linear-gradient(to bottom, #ECE4EF, #ECE4EF)`,
    },
};

const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
];

const Story_card = ({ value, image, tag, title, blurb, edition }) => {
    const navigate = useNavigate();

    return (
        <>
            <Card
                sx={{ m: 2, p: 2, borderRadius: "25px" }}
                key={value}
                onClick={() =>{
                                                          
                    navigate("/indiviual-articles");
                    window.scrollTo(0, 0);
                } }
            >
                <CardActionArea sx={{ borderRadius: "25px" }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={card1}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Chip
                            color="success"
                            label={tag}
                            sx={{ color: "#fff", fontWeight: 800 }}
                        ></Chip>

                        {/* <Chip variant="tag">HEALTH</Chip> */}

                        <Typography variant="h4" sx={{ minHeight: "3rem" }}>
                            {title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body"
                            component="div"
                            pt={3}
                        >
                            {blurb}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            pt={3}
                        >
                            {edition}
                        </Typography>
                        {/* <Button variant="outlined" endIcon={<SaveAltIcon />} sx={{borderRadius:"25px"}}>Download</Button> */}

                        {/* <CardActions> */}

                        <Box
                            sx={{
                                transform: "translateZ(0px)",
                                flexGrow: 1,
                            }}
                        >
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                direction="down"
                                sx={{
                                    position: "absolute",
                                    bottom: "7rem",
                                    right: "-1rem",
                                    boxShadow:"none"
                                }}
                                icon={
                                    <ShareIcon
                                        sx={{
                                            width: "35px",
                                            height: "35px",
                                            border: "1px solid black",
                                            backgroundColor: "#fff",
                                            borderRadius: "50%",
                                            p: 1,
                                            boxShadow:"0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
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
                        </Box>

                        {/* </CardActions> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default Story_card;
