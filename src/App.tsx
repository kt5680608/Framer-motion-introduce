import React, { useState, useEffect } from 'react';
import {
    LandingSection,
    AnimateSection,
    GestureSection,
    VariantsSection,
    SequenceSection,
    ThreeSection,
    CustomSection,
    ReorderSection,
    ContactSection,
    LoadingSection,
} from './section';
import { Box } from 'hoondesign';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
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
                    <ReorderSection />
                    <ThreeSection />
                    <CustomSection />
                    <ContactSection />
                </>
            )}
        </Box>
    );
}

export default App;
