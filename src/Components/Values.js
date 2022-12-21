import {
    Card,
    CardContent,
    Grid,
    Typography,
    Box,
    Container,
} from "@mui/material";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Divider from "../Assets/Images/line.png";
import values_1 from "../Assets/Images/values.png";

const Values = () => {
    const itemData = [
        {
            id: "1",
            title: "Catalyse interactions",
            blurb: "Energize co-creation by leveraging technology and orchestrating ecosystems where assets are accessible and shared, allowing for inclusive problem-solving",
            class: "values",
            class1: "values_flip",
            contentclass: "card_content",
        },
        {
            id: "2",
            title: "Build public goods",
            blurb: "Energize co-creation by leveraging technology and orchestrating ecosystems where assets are accessible and shared, allowing for inclusive problem-solving",
            class: "values1",
            class1: "values1_flip",
            contentclass: "card_content1",
        },
        {
            id: "3",
            title: "Restore agency",
            blurb: "Energize co-creation by leveraging technology and orchestrating ecosystems where assets are accessible and shared, allowing for inclusive problem-solving",
            class: "values2",
            class1: "values2_flip",
            contentclass: "card_content2",
        },
        {
            id: "4",
            title: "Empower with data",
            blurb: "Energize co-creation by leveraging technology and orchestrating ecosystems where assets are accessible and shared, allowing for inclusive problem-solving",
            class: "values3",
            class1: "values3_flip",
            contentclass: "card_content3",
        },
        {
            id: "5",
            title: "Empower with data",
            blurb: "Energize co-creation by leveraging technology and orchestrating ecosystems where assets are accessible and shared, allowing for inclusive problem-solving",
            class: "values4",
            class1: "values4_flip",
            contentclass: "card_content4",
        },
    ];
    const [flipCard, setFlipCard] = useState(false);
    const [id, setId] = useState();
    const handleClick = (id) => {
        // if(id !== id){
        setFlipCard(!flipCard);
        // }else{
        //     setFlipCard(true)
        // }
        // e.preventDefault();
        setId(id);
    };
    return (
        <>
            <Box py={{ xs: 2, sm: 2, md: 5 }}>
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
                            <span mt={5}>
                                <img
                                    src={values_1}
                                    alt="img"
                                    width="10%"
                                    mt={5}
                                />
                            </span>
                        </Typography>
                        <Box py={{ xs: 2, sm: 2, md: 5 }}>
                        <Typography
                            variant="body"
                            
                            textAlign="center"
                        >
                            Lorem ipsum dolor sit amet consectetur. Vivamus eu
                            aenean interdum in proin id ut. Lorem ipsum dolor
                            sit amet consectetur. Sollicitudin vivamus eu aenean
                            interdum in proin id ut. Sit nisi eget enim sed dui
                            sed. Sed cras nibh vehicula at ac sed elit diam.
                            Diam vel eu nunc eu at odio.
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ py: 5 }}
                >
                    {itemData.map((item) => (
                        // <Box display={{ xs: "none", sm: "block" }}>
                            <Grid
                                item
                                xs={11}
                                sm={6}
                                md={2}
                                lg={2}
                                sx={{
                                    textAlign: "center",
                                    width: 343,
                                    scrollSnapType: "x mandatory",
                                    "& > *": {
                                        scrollSnapAlign: "center",
                                    },
                                    "::-webkit-scrollbar": { display: "none" },
                                    display: { xs: "none", sm: "block" }
                                }}
                                // px={4}
                            >
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
                    <Box
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            gap: 1,
                            py: 1,
                            overflow: "auto",
                            width: { xs: "300%", md: "100%" },
                            scrollSnapType: "x mandatory",
                            "& > *": {
                                scrollSnapAlign: "center",
                            },
                            "::-webkit-scrollbar": { display: "none" },
                        }}
                    >
                        {itemData.map((item) => (
                            <ReactCardFlip
                                isFlipped={id === item.id && flipCard}
                                flipDirection="horizontal"
                                id={item.id}
                                width={400}
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
                                    <CardContent variant={item.contentclass}>
                                        <Typography>{item.blurb}</Typography>
                                    </CardContent>
                                </Card>
                            </ReactCardFlip>
                        ))}
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default Values;
