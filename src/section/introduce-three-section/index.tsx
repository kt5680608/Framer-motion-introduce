import { Suspense, useLayoutEffect, useRef, useEffect, useState } from "react";
import {
    MainContainer,
    ExampleContainer,
    IntroduceContainer,
    IntroduceParagraph,
} from "./style";
import { Box } from "hoondesign";
import { MainHeading } from "../../globalStyles";
import { useMediaQuery } from "react-responsive";
import { Canvas, useThree } from "react-three-fiber";
import { motion } from "framer-motion-3d";
import {
    useMotionValue,
    MotionValue,
    useSpring,
    useTransform,
    MotionConfig,
} from "framer-motion";
import { useGLTF } from "@react-three/drei";

const spring = { stiffness: 600, damping: 30 };

function IntroduceThreeSection() {
    // model load
    const gltf = useGLTF("/thinking_emoji/scene.gltf", true);

    // ExampleContainer width height
    const exampleContainerRef = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        // set ExampleContainer width height
        if (exampleContainerRef.current) {
            setWidth(exampleContainerRef.current?.offsetWidth);
            setHeight(exampleContainerRef.current?.offsetHeight);
        }
    }, [width, height]);

    // mapping mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const mouseRotation = (v: number) => (1 * v) / 2000;
    const mouseRotationY = (v: number) => (1 * v) / 1000;
    const mouseRotateX = useSpring(useTransform(mouseX, mouseRotation), spring);
    const mouseRotateY = useSpring(
        useTransform(mouseY, mouseRotationY),
        spring
    );
    const Model = () => {
        return <motion.primitive object={gltf.scene} dispose={null} />;
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
                        <ExampleContainer
                            ref={exampleContainerRef}
                            device={isPc}
                            onPointerMove={(e) => {
                                mouseX.set(width / -2 + e.nativeEvent.offsetX);

                                mouseY.set(
                                    height / -2 + e.nativeEvent.offsetY * 1.2
                                );
                            }}
                        >
                            <Canvas>
                                <Suspense>
                                    <MotionConfig
                                        transition={{
                                            type: "spring",
                                            duration: 0.7,
                                            bounce: 0.2,
                                        }}
                                    />
                                    <motion.group
                                        rotation={[
                                            mouseRotateY,
                                            mouseRotateX,
                                            0,
                                        ]}
                                    >
                                        <Lights />
                                        <Model />
                                    </motion.group>
                                </Suspense>
                            </Canvas>
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
                            Framer Motion 3D is a simple yet powerful animation
                            library for React Three Fiber. It offers most of the
                            same functionality as Framer Motion for declarative
                            3D scenes.
                        </IntroduceParagraph>
                    </Box>
                </IntroduceContainer>
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
            <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={2} />
            <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
            <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
            <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
        </>
    );
}
