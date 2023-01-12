import { Box } from "@mui/material";
import React from "react";
import Share_card from "../Components/Share_card";
import Share_Landing from "../Components/Share_Landing";
import { DescriptionSection, ShareLanding } from "../Themes/StyledComponent";

const Share = () => {

    return (
        <>
            <ShareLanding>
                <Share_Landing />
            </ShareLanding>
            <DescriptionSection>
                <Share_card />
            </DescriptionSection>
        </>
    );
};

export default Share;
