import React from "react";
import { Box } from "hoondesign";
import { MainHeading } from "../../globalStyles";
import { MainContainer } from "./style";
function LandingSection() {
    return (
        <MainContainer>
            <Box
                id="landing-section-content-container"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <MainHeading size="5rem">
                    FRAMER-MOTION
                    <br /> PLAYGROUND
                </MainHeading>
            </Box>
        </MainContainer>
    );
}

export default LandingSection;
