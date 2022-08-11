import React from "react";
import {
    LandingSection,
    AnimateSection,
    GestureSection,
    VariantsSection,
    SequenceSection,
    ThreeSection,
    CustomSection,
} from "./section";
import { Box } from "hoondesign";
function App() {
    return (
        <Box id="main-container" isAnimated={false}>
            <LandingSection />
            <AnimateSection />
            <GestureSection />
            <VariantsSection />
            <SequenceSection />
            <ThreeSection />
            <CustomSection />
        </Box>
    );
}

export default App;
