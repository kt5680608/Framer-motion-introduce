import React, { useState, useEffect } from "react";
import {
    LandingSection,
    AnimateSection,
    GestureSection,
    VariantsSection,
    SequenceSection,
    ThreeSection,
    CustomSection,
    ContactSection,
    LoadingSection,
} from "./section";
import { Box } from "hoondesign";
function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4500);
    }, []);
    return (
        <Box id="main-container" isAnimated={false}>
            <LandingSection />
            <AnimateSection />
            <GestureSection />
            <VariantsSection />
            <SequenceSection />
            <ThreeSection />
            <CustomSection />
            <ContactSection />
            {loading && <LoadingSection />}
        </Box>
    );
}

export default App;
