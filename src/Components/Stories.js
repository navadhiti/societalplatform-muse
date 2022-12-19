import React, { useState } from "react";
import {
    Grid,
    Typography,
    Container,
    List,
    ListItem,
    Link,
    Stack,
} from "@mui/material";
import Pen from "../Assets/Images/pen.png";
import Divider from "../Assets/Images/Vector 42.png";
import StoryImg from "../Assets/Images/image 50.png";
import LinkUnderline from "../Assets/Images/Vector 12.png";
import ArrowImage from "../Assets/Images/RightArrow.png";

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
        <div>
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
                    <Grid item xs={12} sm={6} mt={{xs:1,sm:5}} >
                        <Typography variant="h5" textAlign="left">
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
                    <Grid item xs={12} sm={6} alignItems="center">
                        <img src={StoryImg} alt="img" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* <List>
                            {arr.map((el, index) => (
                                // console.log(el)
                                <ListItem
                                // isHovering={isHovered[index]}
                                // key={index}
                                // style={
                                //   index ? { calssName: 'red' } : { calssName: 'green' }
                                // }
                                >
                                    <Link
                                        variant="h4"
                                        className='hoverable-item"'
                                        style={
                                            hover
                                                ? {
                                                      "&:hover": {
                                                          color: "white",
                                                      },
                                                  }
                                                : { color: "black" }
                                        }
                                        href="#"
                                        underline="none"
                                        key={index}
                                    >
                                        <span
                                            // onMouseEnter={() => handleMouseEnter()}
                                            // onMouseLeave={() => handleMouseLeave()}
                                            key={index}
                                            onMouseEnter={(e) => {
                                                handleMouseEnter(e, index);
                                            }}
                                            onMouseLeave={(e) => {
                                                handleMouseLeave(e, index);
                                            }}
                                            // className="flex gap-3"
                                            // hidden={hover[index]}
                                            className="hoverable-show"
                                            style={
                                                hover
                                                    ? {
                                                          background: ` url(${LinkUnderline}) bottom no-repeat`,
                                                          paddingBottom: "7px",
                                                          backgroundSize:
                                                              "contain",
                                                      }
                                                    : { color: "black" }
                                            }
                                        >
                                            {el.text}
                                        </span>
                                        <img
                                            style={{ marginLeft: "10px" }}
                                            src={ArrowImage}
                                            alt="img"
                                        />
                                    </Link>
                                </ListItem>
                            ))}
                        </List> */}
                        <List sx={{ pt: 9 }}>
                            <ListItem>
                            <Typography variant="caption" mr={-9}>
                                <Stack spacing={2} direction="row">
                                    <Typography variant="subtitle1">
                                        {" "}
                                        Reimagining{" "}
                                    </Typography>
                                    <Typography variant="caption" mr={-9}>
                                        disaster resilience{" "}
                                    </Typography>
                                </Stack>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="caption">
                                    All{" "}
                                    <Typography variant="subtitle">
                                        {" "}
                                        teach,{" "}
                                    </Typography>
                                    all learn
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography variant="h4">
                                    <Typography variant="link">
                                        Solve small,{" "}
                                    </Typography>
                                    dent big
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="h4">
                                    Striking{" "}
                                    <Typography variant="link">
                                        collaboration{" "}
                                    </Typography>
                                    gold
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="h4">
                                    When society, state and
                                    <br /> markets{" "}
                                    <Typography variant="link">
                                        work together
                                    </Typography>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="h4">
                                    Build{" "}
                                    <Typography variant="link">
                                        beyond
                                    </Typography>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="h4">
                                    The power of{" "}
                                    <Typography variant="link">
                                        public goods
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default Stories;
