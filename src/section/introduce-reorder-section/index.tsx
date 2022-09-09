import React, { useState, useEffect } from 'react';
import { MainContainer, IntroduceParagraph, IntroduceContainer } from '../section-styles';
import { CustomExampleContainer } from './style';
import { useMediaQuery } from 'react-responsive';
import { Box } from 'hoondesign';
import { MainHeading } from '../section-styles';
import Item from './item';
import { Reorder } from 'framer-motion';

function IntroduceReorderSection() {
    const [items, setItems] = useState(['demon', 'zombie', 'ghost', 'crown', 'skeleton']);
    useEffect(() => {
        console.log(items);
    }, [items]);
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    return (
        <MainContainer isPc={isPc}>
            <>
                <Box id="introduce-animate-heading-container">
                    <MainHeading size="4rem">5. REORDER</MainHeading>
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
                                    You can use framer-motion's Reorder function to manipulate the order of the array.
                                    With drag and drop gestures you can adjust the index of the array.
                                </IntroduceParagraph>
                            </Box>
                        </IntroduceContainer>
                    </Box>
                </Box>
            </>
        </MainContainer>
    );
}

export default IntroduceReorderSection;
