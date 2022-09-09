import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import { Box } from 'hoondesign';
import { motion } from 'framer-motion';
import { MdRefresh } from 'react-icons/md';
import { AnimatedBox, GlassBox, GlassButton, ControllerContainer, CodeParagraph, CodeSpan } from './style';
import {
    MainContainer,
    MainHeading,
    ExampleContainer,
    IntroduceParagraph,
    IntroduceContainer,
} from '../section-styles';

function VariantsSection() {
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });
    const [animationStart, setAnimationStart] = useState(false);
    const code = 'const';
    const rest = ', ';
    const code1 = ' container = {';
    const code2 = `     hidden: { opacity: `;
    const code3 = ' },';
    const code4 = '     show: { ';
    const code5 = 'y: ';
    const code6 = 'opacity: ';
    const code7 = '         transition: { ';
    const code8 = '             staggerChildren: ';
    const code9 = '             delayChildren: ';
    const code10 = '         }';
    const code11 = '     }';
    const code12 = '}';

    useEffect(() => {
        if (inView === true) {
            setAnimationStart(true);
        }
    }, [animationStart, inView]);

    const hoverParent = {
        rest: { scale: 1 },
        hover: {
            scale: 1.3,
        },
    };
    const hoverChild = {
        rest: { rotate: 0 },
        hover: { rotate: 180 },
    };
    const container = {
        hidden: { opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
                type: 'spring',
            },
        },
        exit: {
            opacity: 0,
        },
    };
    const item = {
        hidden: { y: 24, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,

            transition: {
                type: 'spring',
            },
        },
    };
    return (
        <MainContainer isPc={isPc}>
            {isPc ? (
                <>
                    <Box id="introduce-variants-heading-container">
                        <MainHeading size="4rem">3. VARIANTS</MainHeading>
                    </Box>
                    <Box
                        id="introduce-variants-content-container"
                        width="80vw"
                        backgroundColor="#1a1a1a"
                        display="flex"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Box
                            id="introduce-variants-example-container"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ExampleContainer
                                type="primary"
                                ref={ref}
                                isPc={isPc}
                                backgroundColor="linear-gradient(135deg, #40f, #05f)"
                            >
                                <GlassButton
                                    isMobile={isMobile}
                                    isPc={isPc}
                                    variants={hoverParent}
                                    initial="rest"
                                    whileHover="hover"
                                    onClick={() => setAnimationStart(false)}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        variants={hoverChild}
                                        initial="rest"
                                        whileHover="hover"
                                    >
                                        <MdRefresh color="white" />
                                    </motion.div>
                                </GlassButton>
                                {animationStart && (
                                    <GlassBox variants={container} animate="show" initial="hidden">
                                        <AnimatedBox variants={item} />
                                        <AnimatedBox variants={item} />
                                        <AnimatedBox variants={item} />
                                        <AnimatedBox variants={item} />
                                    </GlassBox>
                                )}
                            </ExampleContainer>
                        </Box>
                        <Box id="introudce-variants-controller">
                            <ControllerContainer isPc={isPc}>
                                <Box
                                    id="introduce-variants-controller-code-container"
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box id="introduce-variants-controller-code-detail">
                                        <CodeParagraph>
                                            <CodeSpan color="hsl(204, 100%, 50%)">{code}</CodeSpan>
                                            <CodeSpan>{code1}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code2}</CodeSpan>
                                            <CodeSpan color="#FF9977">0</CodeSpan>
                                            <CodeSpan>{code3}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code4}</CodeSpan>
                                            <CodeSpan>{code5}</CodeSpan>
                                            <CodeSpan color="#FF9977">0</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                            <CodeSpan>{code6}</CodeSpan>
                                            <CodeSpan color="#FF9977">1</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code7}</CodeSpan>
                                        </CodeParagraph>

                                        <CodeParagraph>
                                            <CodeSpan>{code8}</CodeSpan>
                                            <CodeSpan color="#ff9977">0.3</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code9}</CodeSpan>
                                            <CodeSpan color="#ff9977">0.3</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code10}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code11}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code12}</CodeSpan>
                                        </CodeParagraph>
                                    </Box>
                                </Box>
                            </ControllerContainer>
                        </Box>
                    </Box>
                    <IntroduceContainer isPc={isPc}>
                        <Box id="introduce-variants-paragraph-container" width="90%">
                            <IntroduceParagraph>
                                Variants are a declarative way to orchestrate complex animations throughout a component
                                tree. By providing multiple components with a variants object with visual states of the
                                same name, they can all be animated in sync by the switch of a single animate prop.
                            </IntroduceParagraph>
                        </Box>
                    </IntroduceContainer>
                </>
            ) : (
                <>
                    <Box id="introduce-variants-heading-container">
                        <MainHeading size="4rem">3. VARIANTS</MainHeading>
                    </Box>
                    <Box
                        id="introduce-variants-content-container"
                        width="80vw"
                        backgroundColor="#1a1a1a"
                        flexDirection="column"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            id="introduce-variants-example-container"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ExampleContainer
                                type="primary"
                                ref={ref}
                                isPc={isPc}
                                backgroundColor="linear-gradient(135deg, #40f, #05f)"
                            >
                                <GlassButton
                                    isMobile={isMobile}
                                    isPc={isPc}
                                    variants={hoverParent}
                                    initial="rest"
                                    whileHover="hover"
                                    onClick={() => setAnimationStart(false)}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        variants={hoverChild}
                                        initial="rest"
                                        whileHover="hover"
                                    >
                                        <MdRefresh color="white" />
                                    </motion.div>
                                </GlassButton>
                                {animationStart && (
                                    <GlassBox variants={container} animate="show" initial="hidden">
                                        <AnimatedBox variants={item} />
                                        <AnimatedBox variants={item} />
                                        <AnimatedBox variants={item} />
                                        <AnimatedBox variants={item} />
                                    </GlassBox>
                                )}
                            </ExampleContainer>
                        </Box>
                        <Box id="introudce-variants-controller">
                            <ControllerContainer isPc={isPc}>
                                <Box
                                    id="introduce-variants-controller-code-container"
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box id="introduce-variants-controller-code-detail">
                                        <CodeParagraph>
                                            <CodeSpan color="hsl(204, 100%, 50%)">{code}</CodeSpan>
                                            <CodeSpan>{code1}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code2}</CodeSpan>
                                            <CodeSpan color="#FF9977">0</CodeSpan>
                                            <CodeSpan>{code3}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code4}</CodeSpan>
                                            <CodeSpan>{code5}</CodeSpan>
                                            <CodeSpan color="#FF9977">0</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                            <CodeSpan>{code6}</CodeSpan>
                                            <CodeSpan color="#FF9977">1</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code7}</CodeSpan>
                                        </CodeParagraph>

                                        <CodeParagraph>
                                            <CodeSpan>{code8}</CodeSpan>
                                            <CodeSpan color="#ff9977">0.3</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code9}</CodeSpan>
                                            <CodeSpan color="#ff9977">0.3</CodeSpan>
                                            <CodeSpan>{rest}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code10}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code11}</CodeSpan>
                                        </CodeParagraph>
                                        <CodeParagraph>
                                            <CodeSpan>{code12}</CodeSpan>
                                        </CodeParagraph>
                                    </Box>
                                </Box>
                            </ControllerContainer>
                        </Box>
                    </Box>
                    <IntroduceContainer isPc={isPc}>
                        <Box id="introduce-variants-paragraph-container" width="90%">
                            <IntroduceParagraph>
                                Variants are a declarative way to orchestrate complex animations throughout a component
                                tree.
                                <br />
                                By providing multiple components with a variants object with visual states of the same
                                name,
                                <br />
                                they can all be animated in sync by the switch of a single animate prop.
                            </IntroduceParagraph>
                        </Box>
                    </IntroduceContainer>
                </>
            )}
        </MainContainer>
    );
}

export default VariantsSection;
