import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Article_landing from "../Components/Article Landing";
import Stories_article from "../Components/Stories_article";
import Story_card from "../Components/Story_card";
import data from "../db.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import All_Articles_card from "../Components/All_Articles_card";
import FetchApiSetup from "../Components/Api_info";

const All_Articles = () => {
    const [age, setAge] = React.useState("");
    const [post, setPost] = React.useState();
  const [error, setError] = React.useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const itemData = data.Article.Stories;

    const styles = {
        LandingBackground: {
            backgroundColor: "#DC8F6E",
            color: "#fff",
            borderRadius: '30px 0px 30px 30px ',
        },
        LandingBackground1: {
            backgroundColor: "#EDEBEA",
            borderRadius: '30px 30px 30px 30px ',
        },
    };
    // const functionCallForFetchApi = async () => {
    //     await FetchApiSetup(
    //         console.log("result")
            
    //     ).then((res) => {
    //         const { data } = res;
    //         console.log(res,"result")
    //         // if (data?.Response === "True") {
    //         //     setPost(parseInt(data?.totalResults));
    //         // }
    //     });
    //     console.log("result")
    // };
    console.log(post,"post")
    useEffect(() => {
        fetch('https://tm.navadhiti.com/wp-json/wp/v2/posts/?per_page=6')
        .then((response) => response.json())
        .then((json) => setPost(json))
        .catch((e) => setError(e));

    }, []);
    console.log(post,"post")
    return (
        <>
            <Box style={styles.LandingBackground}>
                <Article_landing />
            </Box>
            <Box style={styles.LandingBackground1} py={5}>
                <All_Articles_card posts= {post} />
            </Box>
        </>
    );
};

export default All_Articles;
