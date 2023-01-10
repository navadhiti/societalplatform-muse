import { Box } from "@mui/material";
import React from "react";
import Authors_Landing from "../Components/Authors_Landing";
import Author_details from "../Components/Author_details";
import { AuthorLanding, DescriptionSection } from "../Themes/StyledComponent";

const Authors = () => {
    const styles = {
        LandingBackground: {
            backgroundColor: "#22534F",
            color: "#fff",
            borderRadius: '30px 0px 30px 30px ',
        
            // backgroundColor: `#fff`,
        },
        LandingBackground1: {
          backgroundColor: "#EDEBEA",
          borderRadius: '30px 30px 30px 30px ',

      },
    };
    return (
        <>
            <AuthorLanding>
                <Authors_Landing />
            </AuthorLanding>
            <DescriptionSection>
                <Author_details />
            </DescriptionSection>
        </>
    );
};

export default Authors;
