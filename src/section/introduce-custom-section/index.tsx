import React, { useState, useEffect } from "react";
import {
    AnimatedCard,
    AnimatedCardImage,
    AnimatedCardParagraph,
    ButtonBox,
    ButtonContainer,
} from "./style";
import {
    MainContainer,
    ExampleContainer,
    IntroduceParagraph,
    IntroduceContainer,
} from "../section-styles";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { Box } from "hoondesign";
import { MainHeading } from "../../globalStyles";

function IntroduceCustomSection() {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)",
    });
    const isMobile = useMediaQuery({
        query: "(max-width:435px)",
    });
    const [cards, setCards] = useState([1]);
    const onClickPlusBtn = () => {
        if (cards.length <= 4) {
            setCards((prev) => [...prev, 1]);
        }
    };
    const onClickMinusBtn = () => {
        if (cards.length > 1) {
            setCards(cards.splice(1, cards.length));
        }
    };
    useEffect(() => {
        if (cards.length > 4) {
            setTimeout(() => {
                setCards(cards.splice(1, cards.length));
            }, 60);
        }
    }, [cards.length]);
    return (
        <MainContainer isPc={isPc}>
            <>
                <Box id="introduce-animate-heading-container">
                    <MainHeading size="4rem">6. CUSTOMIZED</MainHeading>
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
                        flexDirection="column"
                    >
                        <ExampleContainer
                            isPc={isPc}
                            width="80vw;"
                            backgroundColor="linear-gradient(135deg, #05f, #09f);"
                        >
                            <ButtonContainer>
                                <ButtonBox
                                    onClick={(e) => {
                                        onClickMinusBtn();
                                        e.stopPropagation();
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                >
                                    <CgMathMinus color="white" size={30} />
                                </ButtonBox>
                                <ButtonBox
                                    onClick={() => {
                                        onClickPlusBtn();
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                >
                                    <CgMathPlus color="white" size={30} />
                                </ButtonBox>
                            </ButtonContainer>
                            {cards.map((_, index) => (
                                <AnimatedCard
                                    isMobile={isMobile}
                                    isPc={isPc}
                                    style={{
                                        originX: 0,
                                        originY: 0,

                                        zIndex: 999 - index,
                                    }}
                                    initial={{
                                        rotate: 0,
                                    }}
                                    animate={{
                                        rotate: 1.3 * index - cards.length,
                                        y: 1 * (4 * index + -4 * cards.length),
                                        x: 1 * (2 * index + -2 * cards.length),
                                    }}
                                >
                                    {index === 0 && (
                                        <>
                                            <Box
                                                id="animated-box-header"
                                                display="flex"
                                                justifyContent="space-around"
                                                alignItems="center"
                                                width="100%"
                                                height="50%"
                                            >
                                                <AnimatedCardImage
                                                    src={"/profile.png"}
                                                />

                                                <Box
                                                    id="animate-box-header-paragraph-container"
                                                    display="flex"
                                                    flexDirection="column"
                                                    alignItems="center"
                                                >
                                                    <AnimatedCardParagraph fontSize="3vw">
                                                        hoon
                                                    </AnimatedCardParagraph>
                                                    <hr />
                                                    <AnimatedCardParagraph fontSize="1.2vw">
                                                        ux engineer
                                                    </AnimatedCardParagraph>
                                                </Box>
                                            </Box>

                                            {!isMobile && (
                                                <>
                                                    <Box
                                                        id="animate-box-foote-container"
                                                        display="flex"
                                                        justifyContent="center"
                                                    >
                                                        <AnimatedCardParagraph fontSize="1.8vw">
                                                            Aesthetics of
                                                            continuity.
                                                        </AnimatedCardParagraph>
                                                    </Box>
                                                </>
                                            )}
                                        </>
                                    )}
                                </AnimatedCard>
                            ))}
                        </ExampleContainer>
                        <IntroduceContainer>
                            <Box
                                id="introduce-variants-paragraph-container"
                                width="90%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <IntroduceParagraph>
                                    Used with react-hooks, you can add
                                    customized interactions.
                                    <br />
                                    Find various references on YouTube, Dribble,
                                    and other sites, and move them directly to
                                    your website. This interaction is inspired
                                    by Toss App.
                                </IntroduceParagraph>
                            </Box>
                        </IntroduceContainer>
                    </Box>
                </Box>
            </>
        </MainContainer>
    );
}

export default IntroduceCustomSection;
