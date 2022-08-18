import React, { useRef, useState } from "react";
import { Box } from "hoondesign";
import { useMediaQuery } from "react-responsive";
import {
    AnimatedBox,
    ConsoleContainer,
    CodeParagraph,
    CodeSpan,
} from "./style";
import {
    MainContainer,
    MainHeading,
    ExampleContainer,
    IntroduceParagraph,
    IntroduceContainer,
} from "../section-styles";
import { IGestureContainerInfoProps } from "../types";

function IntroduceGestureSection() {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)",
    });

    const constraintsRef = useRef(null);
    const [gestureInfo, setGestureInfo] = useState<
        IGestureContainerInfoProps[]
    >([]);
    const [arrId, setArrId] = useState(0);

    const listItems = gestureInfo.map((item, index) => (
        <CodeParagraph key={index}>
            <CodeSpan color="var(--system-palette-purpleLight)">
                {item.type}
            </CodeSpan>
            , x:{item.x}, y: {item.y}
        </CodeParagraph>
    ));
    return (
        <MainContainer isPc={isPc}>
            {isPc ? (
                <>
                    <Box id="introduce-gesture-heading-container">
                        <MainHeading size="4rem">2. GESTURE</MainHeading>
                    </Box>
                    <Box
                        id="introduce-gesture-main-container"
                        width="80vw"
                        backgroundColor="#1a1a1a"
                        display="flex"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Box
                            id="introduce-gesture-example-container"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ExampleContainer
                                type="primary"
                                ref={constraintsRef}
                                isPc={isPc}
                                backgroundColor="linear-gradient(135deg, #a2e, #d0e);"
                            >
                                <AnimatedBox
                                    onDragStart={() => {
                                        document.body.classList.add(
                                            "prevent-scroll"
                                        );
                                    }}
                                    onDragEnd={() => {
                                        document.body.classList.remove(
                                            "prevent-scroll"
                                        );
                                    }}
                                    whileDrag={{ borderRadius: "50%" }}
                                    whileHover={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={constraintsRef}
                                    onDrag={(_, info) => {
                                        const value = {
                                            x: Math.floor(info.point.x),
                                            y: Math.floor(info.point.y),
                                            type: "onDrag",
                                            id: arrId,
                                        };
                                        if (
                                            gestureInfo.length === 0 ||
                                            gestureInfo[gestureInfo.length - 1]
                                                .x !== value.x ||
                                            gestureInfo[gestureInfo.length - 1]
                                                .y !== value.y
                                        ) {
                                            setGestureInfo(
                                                gestureInfo.concat(value)
                                            );
                                            setArrId(arrId + 1);
                                        }
                                    }}
                                    onClick={(event) => {
                                        const value = {
                                            x: Math.floor(
                                                event.nativeEvent.pageX
                                            ),
                                            y: Math.floor(
                                                event.nativeEvent.pageY
                                            ),
                                            type: "onTap",
                                            id: arrId,
                                        };
                                        setGestureInfo(
                                            gestureInfo.concat(value)
                                        );
                                        setArrId(arrId + 1);
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            </ExampleContainer>
                        </Box>
                        <Box id="introduce-gesture-console-container">
                            <ConsoleContainer isPc={isPc}>
                                {listItems}
                            </ConsoleContainer>
                        </Box>
                    </Box>

                    <IntroduceContainer isPc={isPc}>
                        <Box
                            id="introduce-variants-paragraph-container"
                            width="90%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {" "}
                            <IntroduceParagraph>
                                Motion extends the basic set of event listeners
                                provided by React with simple yet powerful
                                gesture recognizers.
                                <br />
                                It currently has support for hover, tap, pan,
                                viewport and drag gesture detection. Each
                                gesture has a series of event listeners that you
                                can attach to your motion component.
                            </IntroduceParagraph>
                        </Box>
                    </IntroduceContainer>
                </>
            ) : (
                <>
                    <Box id="introduce-gesture-heading-container">
                        <MainHeading size="4rem">2. GESTURE</MainHeading>
                    </Box>
                    <Box
                        id="introduce-gesture-main-container"
                        width="80vw"
                        backgroundColor="#1a1a1a"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            id="introduce-gesture-example-container"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ExampleContainer
                                type="primary"
                                ref={constraintsRef}
                                isPc={isPc}
                                backgroundColor="linear-gradient(135deg, #a2e, #d0e);"
                            >
                                <AnimatedBox
                                    whileDrag={{ borderRadius: "50%" }}
                                    whileHover={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={constraintsRef}
                                    onDrag={(event, info) => {
                                        const value = {
                                            x: Math.floor(info.point.x),
                                            y: Math.floor(info.point.y),
                                            type: "onDrag",
                                            id: arrId,
                                        };
                                        if (
                                            gestureInfo.length === 0 ||
                                            gestureInfo[gestureInfo.length - 1]
                                                .x !== value.x ||
                                            gestureInfo[gestureInfo.length - 1]
                                                .y !== value.y
                                        ) {
                                            setGestureInfo(
                                                gestureInfo.concat(value)
                                            );
                                            setArrId(arrId + 1);
                                        }
                                    }}
                                    onClick={(event) => {
                                        const value = {
                                            x: Math.floor(
                                                event.nativeEvent.pageX
                                            ),
                                            y: Math.floor(
                                                event.nativeEvent.pageY
                                            ),
                                            type: "onTap",
                                            id: arrId,
                                        };
                                        setGestureInfo(
                                            gestureInfo.concat(value)
                                        );
                                        setArrId(arrId + 1);
                                        console.log(gestureInfo);
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            </ExampleContainer>
                            <Box id="introduce-gesture-console-container">
                                <ConsoleContainer isPc={isPc}>
                                    {listItems}
                                </ConsoleContainer>
                            </Box>
                            <IntroduceContainer isPc={isPc}>
                                <Box
                                    id="introduce-variants-paragraph-container"
                                    width="90%"
                                >
                                    <IntroduceParagraph>
                                        Motion extends the basic set of event
                                        listeners provided by React with simple
                                        yet powerful gesture recognizers.
                                        <br />
                                        It currently has support for hover, tap,
                                        pan, viewport and drag gesture
                                        detection. Each gesture has a series of
                                        event listeners that you can attach to
                                        your motion component.
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

export default IntroduceGestureSection;
