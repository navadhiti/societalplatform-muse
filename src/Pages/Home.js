import React, { useState, useEffect } from "react";
import Blub2 from "../Components/Blub2";
import Blurb from "../Components/Blurb";
import Blurb_1 from "../Components/Blurb1";
import Collaborators from "../Components/Collaborators";
import Loader from "../Components/loader";
import Stories from "../Components/Stories";
import Values from "../Components/Values";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
const styles = {
    LandingBackground: {
        backgroundColor: "#E2D1ED",
    },
};

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://tm.navadhiti.com/wp-json/wp/v2/posts/3059")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                
                setTimeout(() => {
                    setLoading(false);
                }, 4000);
                
            })
            .catch((e) => setError(e));
    }, []);

    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : (
                <> */}
                    <div style={styles.LandingBackground}>
                        {/* <Loader /> */}
                        <Blurb />
                        <Blurb_1 />
                        <Stories />
                        <Blub2 />
                        <Collaborators />
                        <Values />
                    </div>
                {/* </>
            )} */}
        </>
    );
};

export default Home;
