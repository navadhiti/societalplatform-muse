import React, { useState } from "react";
import {
    Grid,
    Typography,
    Container,
    List,
    ListItem,
    Link,
    Stack,
    Box,
} from "@mui/material";
import Pen from "../Assets/Images/pen.png";
import Divider from "../Assets/Images/Vector 42.png";
import StoryImg from "../Assets/Images/image 50.png";
import LinkUnderline from "../Assets/Images/Vector 12.png";
import ArrowImage from "../Assets/Images/RightArrow.png";
import { Section } from "../Themes/StyledComponent";

const Stories = () => {
    const [arr, setArr] = useState([{ text: "foo" }, { text: "bar" }]);
    const [hover, setHover] = useState(false);
    const handleMouseEnter = (event, index) => {
        console.log(event, "event", index);
        return { [index]: setHover(true) };
        // setHover((c) => {
        //   return {
        //     ...c,
        //     [index]: true,
        //   };
        // });
    };

    const handleMouseLeave = (event, index) => {
        return { [index]: setHover(false) };
        // setHover((c) => {
        //   return {
        //     ...c,
        //     [index]: false,
        //   };
        // });
    };

    // const handleMouseEnter = (event) => {
    //   // console.log(arrText.text, '-----------');
    //   // if (arrText.text === 'foo' && [index]) {
    //   return setHover(true);
    //   // }
    // };
    // const handleMouseLeave = (event) => {
    //   return setHover(false);
    // };

    return (
        <Section>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={6} alignItems="center">
                        <Typography variant="h2" textAlign="left">
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
                    </Grid>
                    <Grid item xs={12} sm={6} mt={{ xs: 1, sm: 5 }}>
                        <Typography variant="body" textAlign="left">
                            Lorem ipsum dolor sit amet consectetur. Sollicitudin
                            vivamus eu aenean interdum in proin id ut. Sit nisi
                            eget enim sed dui sed. Sed cras nibh vehicula at ac
                            sed elit diam. Diam vel eu nunc eu at odio.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        alignItems="center"
                        display={{ xs: "none", sm: "block" }}
                    >
                        <img src={StoryImg} alt="img" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <List pt={{ xs: 2, md: 9 }}>
                            <ListItem display={{ xs: "none", sm: "block" }}>
                                <Typography variant="caption" mr={-9} display={{ xs: "none", sm: "block" }}>
                                    <Stack spacing={2} direction="row">
                                        <Typography variant="subtitle1">
                                            {" "}
                                            Reimagining{" "} {" "}
                                        </Typography> {" "}
                                        {/* <Typography variant="caption" mr={-9}> */}
                                        {" "} disaster resilience{" "}
                                        {/* </Typography> */}
                                        <Box sx={{width:"3rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    <Stack spacing={2} direction="row">
                                        All{" "}
                                        <Typography variant="subtitle1">
                                            {" "}
                                            teach,{" "}
                                        </Typography>
                                        all learn
                                        <Box sx={{width:"3rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    <Stack spacing={2} direction="row">
                                        <Typography variant="subtitle1">
                                            Solve small,{" "}
                                        </Typography>
                                        dent big
                                        <Box sx={{width:"3rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    <Stack spacing={2} direction="row">
                                        Striking{" "}
                                        <Typography variant="subtitle1">
                                            collaboration{" "}
                                        </Typography>
                                        gold
                                        <Box sx={{width:"3rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    <Stack spacing={2} direction="row">
                                        When society, state and
                                        <br /> markets{" "}
                                        {/* <Typography variant="subtitle1">
                                            work together
                                        </Typography> */}
                                        <Box sx={{width:"3rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    <Stack spacing={2} direction="row">
                                        Build{" "}
                                        <Typography variant="subtitle1">
                                            beyond
                                        </Typography>
                                        <Box sx={{width:"3rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    <Stack spacing={0} direction="row">
                                        The power of{" "}
                                        <Typography variant="subtitle1">
                                            public goods
                                        </Typography>
                                        <Box sx={{width:"4rem"}}></Box>
                                    </Stack>
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
};
export default Stories;
