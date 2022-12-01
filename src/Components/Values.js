import { Card, Container, Grid, Typography } from "@mui/material";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Divider from "../Assets/Images/Divider.png";

const Values = () => {
    const [flipCard, setFlipCard] = useState(false);
    const [id,setId]=useState();
    const handleClick = (id) => {
        // if(id !== id){
            setFlipCard(!flipCard)
        // }else{
        //     setFlipCard(true)   
        // }
        // e.preventDefault();
        setId(id)
    };

    return (
        <>
            <Container sx={{ textAlign: "center", my: 5 }}>
                <Typography variant="h4" textAlign="center">
                    Our values
                </Typography>
                <img src={Divider} alt="img" />
                <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                    py={2}
                >
                    {[0, 1, 2, 3,].map((value,index) => (
                        
                             <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        sx={{ textAlign: "center" }}
                        // px={4}
                    >
                        <ReactCardFlip
                            isFlipped={id===index  && flipCard}
                            flipDirection="horizontal"
                            id={index}

                        >
                            <Card classes="values" onMouseEnter={()=>{setId(index);setFlipCard(true)}}>
                                Catalyse
                                <br />
                                Interactions
                            </Card>
                            <Card classes="values1"  onMouseOut={()=>{setId(null);setFlipCard(false)}}>
                                Energize co-creation by leveraging technology
                                and orchestrating ecosystems where assets are
                                accessible and shared, allowing for inclusive
                                problem-solving
                            </Card>
                        </ReactCardFlip>
                    </Grid>
                        )
                    )}
                    
                </Grid>
            </Container>
        </>
    );
};

export default Values;
