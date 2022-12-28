import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Article_landing from "../Components/Article Landing";
import Stories_article from "../Components/Stories_article";
import Story_card from "../Components/Story_card";
import data from "../db.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import All_Articles_card from "../Components/All_Articles_card";

const All_Articles = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const itemData = data.Article.Stories;

    const styles = {
        LandingBackground: {
            backgroundColor: "#DC8F6E",
            color: "#fff",
        },
        LandingBackground1: {
            backgroundColor: "#EDEBEA",
        },
    };
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Article_landing />
            </Box>
            <Box style={styles.LandingBackground1} py={5}>
                <All_Articles_card />
            </Box>
        </>
    );
};

export default All_Articles;
