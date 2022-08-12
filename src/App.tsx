import React from "react";
import {
    LandingSection,
    AnimateSection,
    GestureSection,
    VariantsSection,
    SequenceSection,
    ThreeSection,
    CustomSection,
    ContactSection,
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
            {/* <ThreeSection /> */}
            <CustomSection />
            <ContactSection />
        </Box>
    );
}

export default App;
