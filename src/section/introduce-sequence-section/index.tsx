import React, { useState, useEffect } from 'react';
import { Box, RollingText } from 'hoondesign';
import { useMediaQuery } from 'react-responsive';
import { MdRefresh } from 'react-icons/md';
import {
    MainContainer,
    MainHeading,
    ExampleContainer,
    IntroduceContainer,
    IntroduceParagraph,
} from '../section-styles';
import { motion } from 'framer-motion';
import { GlassButton } from './style';

function IntroduceSequenceSection() {
    const [randValueTrigger, setRandValueTrigger] = useState(false);
    const [number, setNumber] = useState(72317893);

    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });
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
    const handleClick = () => {
        setRandValueTrigger(!randValueTrigger);
    };

    useEffect(() => {
        setNumber(Math.floor(Math.random() * 90000000) + 10000000);
    }, [randValueTrigger]);

    return (
        <MainContainer isPc={isPc}>
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
                        <ExampleContainer isPc={isPc} width="80vw" type="secondary">
                            <GlassButton
                                isMobile={isMobile}
                                isPc={isPc}
                                variants={hoverParent}
                                initial="rest"
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    setNumber(Math.floor(Math.random() * 90000000) + 10000000);
                                    handleClick();
                                }}
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
                            <RollingText
                                numberValue={number}
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
                            Declarative animations are ideal for most UI interactions. But sometimes we need to
                            orchestrate more complex sequences.
                            <br />
                            The useAnimationControls hook can be used to manually start/stop animations, and compose
                            them together.
                        </IntroduceParagraph>
                    </Box>
                </IntroduceContainer>
            </>
        </MainContainer>
    );
}

export default IntroduceSequenceSection;
