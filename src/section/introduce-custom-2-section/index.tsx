import React, { useState } from 'react';
import { MainContainer, IntroduceParagraph, IntroduceContainer } from '../section-styles';
import { CustomExampleContainer } from './style';
import { useMediaQuery } from 'react-responsive';
import { Box } from 'hoondesign';
import { MainHeading } from '../section-styles';
import Item from './item';
import { Reorder } from 'framer-motion';

function IntroduceCustomSection2() {
    const [items, setItems] = useState(['zombie', 'ghost', 'crown', 'skeleton']);
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });

    return (
        <MainContainer isPc={isPc}>
            <>
                <Box id="introduce-animate-heading-container">
                    <MainHeading size="4rem">6. CUSTOMIZED-2</MainHeading>
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
                        <CustomExampleContainer
                            type="secondary"
                            isPc={isPc}
                            width="80vw;"
                            backgroundColor="linear-gradient(135deg, #05f, #09f);"
                        >
                            <Reorder.Group axis="y" onReorder={setItems} values={items}>
                                {items.map((item) => (
                                    <Item key={item} item={item} />
                                ))}
                            </Reorder.Group>
                        </CustomExampleContainer>
                        <IntroduceContainer>
                            <Box
                                id="introduce-variants-paragraph-container"
                                width="90%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <IntroduceParagraph>
                                    Used with react-hooks, you can add customized interactions. Find various references
                                    on YouTube, Dribble, and other sites, and move them directly to your website. This
                                    interaction is inspired by Toss App.
                                </IntroduceParagraph>
                            </Box>
                        </IntroduceContainer>
                    </Box>
                </Box>
            </>
        </MainContainer>
    );
}

export default IntroduceCustomSection2;
