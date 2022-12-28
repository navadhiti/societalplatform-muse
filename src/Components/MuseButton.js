import { InsertEmoticon } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../Themes/StyledComponent";

const MuseButton = ({title,link}) => {
    const navigate = useNavigate();

    return (
        <>
            <AnimatedButton>
                <Button className="cta-btn" >
                    <span
                        class="hover-frame  bounce infinite"
                        data-num="1"
                    ></span>
                    <span
                        class="hover-frame  bounce infinite"
                        data-num="2"
                    ></span>
                    {title}
                </Button>
            </AnimatedButton>
        </>
    );
};

export default MuseButton;
