import React from "react";
import { Box, RollingText } from "hoondesign";
import { useMediaQuery } from "react-responsive";
import { MainHeading } from "../../globalStyles";
import {
    MainContainer,
    ExampleContainer,
    IntroduceContainer,
    IntroduceParagraph,
} from "./style";
function IntroduceSequenceSection() {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)",
    });
    return (
        <MainContainer>
            <>
                <Box id="introduce-animate-heading-container">
                    <MainHeading size="4rem">4. SEQUENCE</MainHeading>
                </Box>
                <Box
                    id="introduce-animate-content-container"
                    width="80vw"
                    backgroundColor="#1a1a1a"
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Box
                        id="introduce-animate-example-container"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ExampleContainer device={isPc}>
                            <RollingText
                                numberValue={24587893}
                                width="100%"
                                height="100%"
                                backgroundColor="#141414"
                                fontSize="lg"
                            />
                        </ExampleContainer>
                    </Box>
                </Box>
                <IntroduceContainer>
                    <Box
                        id="introduce-variants-paragraph-container"
                        width="90%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <IntroduceParagraph>
                            Declarative animations are ideal for most UI
                            interactions. But sometimes we need to orchestrate
                            more complex sequences.
                            <br />
                            The useAnimationControls hook can be used to
                            manually start/stop animations, and compose them
                            together.
                        </IntroduceParagraph>
                    </Box>
                </IntroduceContainer>
            </>
        </MainContainer>
    );
}

export default IntroduceSequenceSection;
