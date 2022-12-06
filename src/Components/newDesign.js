import { Container, Typography } from "@mui/material";
import React from "react";
import Divider from "../Assets/Images/Divider.png";

const NewDesign = () => {
    return (
        <>
            <Container sx={{ mt: 5 }}>
                <span>
                    <Typography variant="body1" textAlign="center">
                        Can
                    
                       <u style={{textDecorationStyle: "wavy",background:` url(${Divider}) bottom repeat-x`,paddingBottom:'20px',backgroundSize: 'contain'} }> anyone </u>
                    </Typography>
                    <img src={Divider} alt="img" />
                </span>
                <span>
                    <Typography variant="body1" textAlign="center" style={{paddingBottom:'20px',background:` url(${Divider}) bottom no-repeat`,backgroundSize: 'contain'} }>
                        clean become a hero?
                    </Typography>
                </span>
            </Container>
        </>
    );
};

export default NewDesign;
