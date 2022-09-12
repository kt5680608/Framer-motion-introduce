import React from 'react';
import { Box } from 'hoondesign';
import { MainHeading } from '../section-styles';
import { MainContainer } from './style';
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
                <MainHeading
                    size="5rem"
                    initial={{
                        y: 30,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                        },
                    }}
                >
                    HOON'S ANIMATION
                    <br />
                    PLAYGROUND
                </MainHeading>
            </Box>
        </MainContainer>
    );
}

export default LandingSection;
