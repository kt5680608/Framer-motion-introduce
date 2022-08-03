import React, { Suspense, useState } from "react";
import { MainContainer, ExampleContainer, GlassButton } from "./style";
import { Box } from "hoondesign";
import { MainHeading } from "../../globalStyles";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "react-three-fiber";
import { motion } from "framer-motion-3d";
import { Html, useGLTF } from "@react-three/drei";

function IntroduceThreeSection() {
    const [isHover, setIsHover] = useState(false);
    const gltf = useGLTF("/thinking_emoji/scene.gltf", true);
    const Model = () => {
        return (
            <motion.primitive
                animate={{ rotateX: 6.3 }}
                transition={{ repeat: Infinity, duration: 2 }}
                object={gltf.scene}
                dispose={null}
            />
        );
    };
    const isPc = useMediaQuery({
        query: "(min-width:1024px)",
    });
    return (
        <MainContainer>
            <>
                <Box id="introduce-animate-heading-container">
                    <MainHeading size="4rem">5. Three</MainHeading>
                </Box>
                <Box
                    id="introduce-three-content-container"
                    width="80vw"
                    backgroundColor="#1a1a1a"
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Box
                        id="introduce-three-example-container"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ExampleContainer device={isPc}>
                            <Canvas>
                                <Suspense>
                                    <Lights />
                                    <Model />
                                </Suspense>
                            </Canvas>
                        </ExampleContainer>
                    </Box>
                </Box>
            </>
        </MainContainer>
    );
}

export default IntroduceThreeSection;

export function Lights() {
    return (
        <>
            <spotLight
                color="#61dafb"
                position={[-10, -10, -10]}
                intensity={0.2}
            />
            <spotLight
                color="#61dafb"
                position={[-10, 0, 15]}
                intensity={0.8}
            />
            <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={0.5} />
            <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
            <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
            <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
        </>
    );
}
