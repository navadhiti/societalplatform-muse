import {
    Card,
    CardContent,
    Grid,
    Typography,
    Box,
    Container,
    Button,
} from "@mui/material";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

import Divider from "../Assets/Images/line.png";
import values_1 from "../Assets/Images/values.png";
import { Section } from "../Themes/StyledComponent";
import Carousel from "react-material-ui-carousel";
import data from "../db.json";
console.log(data.home.values,"data")

const Values = () => {
    const itemData = data.home.values;
    const [flipCard, setFlipCard] = useState(false);
    const [id, setId] = useState();
    // const handleClick = (id) => {
    //     // if(id !== id){
    //     setFlipCard(!flipCard);
    //     // }else{
    //     //     setFlipCard(true)
    //     // }
    //     // e.preventDefault();
    //     setId(id);
    // };
    function Item(props) {
        return (
            <Box>
                <Card classes={`${props.item.class}`}>
                    <Typography variant="h4">{props.item.title}</Typography>
                    <Typography>{props.item.blurb}</Typography>
                </Card>
            </Box>
        );
    }
    return (
        <>
            <Section>
                <Box>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="start"
                        px={{ xs: 2, sm: 2, md: 5 }}
                    >
                        <Grid item xs={12} sm={12} md={8} lg={7}>
                            <Typography variant="h1" textAlign="center">
                                Our{" "}
                                <span
                                    style={{
                                        background: ` url(${Divider}) bottom no-repeat`,
                                        paddingBottom: "05px",
                                        backgroundSize: "contain",
                                    }}
                                >
                                    Values{" "}
                                </span>
                                <span mt={0}>
                                    <img
                                        src={values_1}
                                        alt="img"
                                        width="10%"
                                        mt={5}
                                    />
                                </span>
                            </Typography>
                            <Box py={{ xs: 2, sm: 2, md: 5 }}>
                                <Typography variant="body" textAlign="center">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Vivamus eu aenean interdum in proin id ut.
                                    Lorem ipsum dolor sit amet consectetur.
                                    Sollicitudin vivamus eu aenean interdum in
                                    proin id ut. Sit nisi eget enim sed dui sed.
                                    Sed cras nibh vehicula at ac sed elit diam.
                                    Diam vel eu nunc eu at odio.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box display={{ xs: "none", md: "block" }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            sx={{ py: 5 }}
                        >
                            {itemData.map((item) => (
                                // <Box display={{ xs: "none", sm: "block" }}>
                                <Grid item xs={11} sm={6} md={2} lg={2}>
                                    <ReactCardFlip
                                        isFlipped={id === item.id && flipCard}
                                        flipDirection="horizontal"
                                        id={item.id}
                                    >
                                        <Card
                                            classes={`${item.class}`}
                                            onMouseEnter={() => {
                                                setId(item.id);
                                                setFlipCard(true);
                                            }}
                                        >
                                            <CardContent variant="card_content">
                                                <Typography variant="h4">
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card
                                            classes={`${item.class1}`}
                                            onMouseOut={() => {
                                                setId(null);
                                                setFlipCard(false);
                                            }}
                                        >
                                            <CardContent
                                                variant={item.contentclass}
                                            >
                                                <Typography>
                                                    {item.blurb}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </ReactCardFlip>
                                </Grid>
                                // </Box>
                            ))}
                        </Grid>
                    </Box>
                    <Box display={{ xs: "block", md: "none" }}>
                        <Carousel sx={{ p: 5 }}>
                            {itemData.map((item, i) => (
                                <Item key={i} item={item} />
                            ))}
                        </Carousel>
                    </Box>
                </Box>
            </Section>
        </>
    );
};

export default Values;
