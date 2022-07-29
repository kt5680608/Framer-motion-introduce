import React, { useState } from "react";
import { Box } from "hoondesign";
import { useMediaQuery } from "react-responsive";
import {
    MainContainer,
    ExampleContainer,
    ControllerContainer,
    IntroduceContainer,
    AnimatedBox,
    RangeInput,
    RangeNumber,
    CodeSpan,
    CodeParagraph,
    IntroduceParagraph,
} from "./style";
import { MainHeading } from "../../globalStyles";

function IntroduceAnimateSection() {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)",
    });

    const [animateX, setAnimateX] = useState(0);
    const [animateY, setAnimateY] = useState(0);
    const [animateScale, setAnimateScale] = useState(1);
    const [animateRotate, setAnimateRotate] = useState(0);
    const openTag = "<";
    const closeTag = "/>";
    const rest = ",";
    const code = `motion.div`;
    const code2 = `     animate`;
    const code3 = "={{";
    const code4 = "         x:";
    const code5 = "         y:";
    const code6 = "         scale:";
    const code7 = "         rotate:";
    const code8 = "     }}";

    return (
        <MainContainer device={isPc}>
            {isPc ? (
                <>
                    <Box id="introduce-animate-heading-container">
                        <MainHeading size="4rem">1. ANIMATE</MainHeading>
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
                                <AnimatedBox
                                    initial={{
                                        x: 0,
                                        y: 0,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    animate={{
                                        x: animateX,
                                        y: animateY,
                                        scale: animateScale,
                                        rotate: animateRotate,
                                    }}
                                />
                            </ExampleContainer>
                        </Box>
                        <Box id="introudce-section-controller" width="100%">
                            <ControllerContainer device={isPc}>
                                <Box
                                    id="introduce-animate-controller-code-container"
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box id="introduce-animate-controller-code-detail">
                                        <CodeParagraph>
                                            <CodeSpan>{openTag}</CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code}
                                            </CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint2)">
                                                {code2}
                                            </CodeSpan>
                                            <CodeSpan>{code3}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code4}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateX}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code5}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateY}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code6}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateScale}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code7}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateRotate}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code8}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{closeTag}</CodeSpan>
                                        </CodeParagraph>
                                    </Box>
                                </Box>
                                <Box
                                    id="introduce-animate-controller-detail-container"
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    flexDirection="column"
                                >
                                    <Box
                                        id="x-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            X : {animateX}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={-100}
                                            max={100}
                                            value={animateX}
                                            onChange={(e) => {
                                                setAnimateX(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        id="y-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            y : {animateY}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={-100}
                                            max={100}
                                            value={animateY}
                                            onChange={(e) => {
                                                setAnimateY(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        id="scale-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            scale : {animateScale}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            value={animateScale}
                                            onChange={(e) => {
                                                setAnimateScale(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        id="rotate-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            rotate : {animateRotate}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={0}
                                            max={360}
                                            value={animateRotate}
                                            onChange={(e) => {
                                                setAnimateRotate(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </ControllerContainer>
                        </Box>
                    </Box>
                    <IntroduceContainer>
                        <Box
                            id="introduce-variants-paragraph-container"
                            width="90%"
                        >
                            {" "}
                            <IntroduceParagraph>
                                When animating between two separate components,
                                <br />
                                Framer Motion will take care of everything in
                                between.
                            </IntroduceParagraph>
                        </Box>
                    </IntroduceContainer>{" "}
                </>
            ) : (
                <>
                    <Box id="introduce-animate-heading-container">
                        <MainHeading size="4rem">1. ANIMATE</MainHeading>
                    </Box>
                    <Box
                        id="introduce-animate-content-container"
                        width="80vw"
                        backgroundColor="#1a1a1a"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box
                            id="introduce-animate-example-container"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ExampleContainer device={isPc}>
                                <AnimatedBox
                                    initial={{
                                        x: 0,
                                        y: 0,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    animate={{
                                        x: animateX,
                                        y: animateY,
                                        scale: animateScale,
                                        rotate: animateRotate,
                                    }}
                                />
                            </ExampleContainer>
                        </Box>
                        <Box id="introudce-section-controller">
                            <ControllerContainer device={isPc}>
                                <Box
                                    id="introduce-animate-controller-detail-container"
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    flexDirection="column"
                                >
                                    <Box
                                        id="x-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            X : {animateX}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={-100}
                                            max={100}
                                            value={animateX}
                                            onChange={(e) => {
                                                setAnimateX(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        id="y-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            y : {animateY}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={-100}
                                            max={100}
                                            value={animateY}
                                            onChange={(e) => {
                                                setAnimateY(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        id="scale-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            scale : {animateScale}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            value={animateScale}
                                            onChange={(e) => {
                                                setAnimateScale(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        id="rotate-controller-container"
                                        width="70%"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        flexDirection="row"
                                    >
                                        <RangeNumber>
                                            rotate : {animateRotate}
                                        </RangeNumber>
                                        <RangeInput
                                            type="range"
                                            min={0}
                                            max={360}
                                            value={animateRotate}
                                            onChange={(e) => {
                                                setAnimateRotate(
                                                    Number(e.target.value)
                                                );
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    id="introduce-animate-controller-code-container"
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box id="introduce-animate-controller-code-detail">
                                        <CodeParagraph>
                                            <CodeSpan>{openTag}</CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code}
                                            </CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint2)">
                                                {code2}
                                            </CodeSpan>
                                            <CodeSpan>{code3}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code4}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateX}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code5}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateY}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code6}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateScale}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan color="var(--system-color-codeTint1)">
                                                {code7}
                                            </CodeSpan>
                                            <CodeSpan color="var(--system-color-codeTint3)">
                                                {animateRotate}
                                            </CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code8}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{closeTag}</CodeSpan>
                                        </CodeParagraph>
                                    </Box>
                                </Box>
                            </ControllerContainer>
                            <IntroduceContainer>
                                <Box
                                    id="introduce-variants-paragraph-container"
                                    width="90%"
                                >
                                    {" "}
                                    <IntroduceParagraph>
                                        When animating between two separate
                                        components,
                                        <br />
                                        Framer Motion will take care of
                                        everything in between.
                                    </IntroduceParagraph>
                                </Box>
                            </IntroduceContainer>
                        </Box>
                    </Box>
                </>
            )}
        </MainContainer>
    );
}

export default IntroduceAnimateSection;
