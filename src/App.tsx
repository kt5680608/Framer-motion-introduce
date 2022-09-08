import React, { useState, useEffect } from 'react';
import {
    LandingSection,
    AnimateSection,
    GestureSection,
    VariantsSection,
    SequenceSection,
    ThreeSection,
    CustomSection,
    CustomSection2,
    ContactSection,
    LoadingSection,
} from './section';
import { Box } from 'hoondesign';

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4500);
    }, []);

    return (
        <Box id="main-container" isAnimated={false}>
            {loading ? (
                <LoadingSection />
            ) : (
                <>
                    <LandingSection />
                    <AnimateSection />
                    <GestureSection />
                    <VariantsSection />
                    <SequenceSection />
                    <ThreeSection />
                    <CustomSection />
                    <CustomSection2 />
                    <ContactSection />
                </>
            )}
        </Box>
    );
}

export default App;
