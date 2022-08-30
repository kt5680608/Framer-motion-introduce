import { Suspense, useRef, useState, useEffect } from 'react';
import {
    MainContainer,
    MainHeading,
    ExampleContainer,
    IntroduceParagraph,
    IntroduceContainer,
} from '../section-styles';
import { Box } from 'hoondesign';
import { useMediaQuery } from 'react-responsive';
import { Canvas } from 'react-three-fiber';
import { motion } from 'framer-motion-3d';
import { useMotionValue, useSpring, useTransform, MotionConfig } from 'framer-motion';
import { useGLTF } from '@react-three/drei';

const spring = { stiffness: 600, damping: 30 };

function IntroduceThreeSection() {
    // model load
    const gltf = useGLTF('/thinking_emoji/scene.gltf', true);

    // ExampleContainer width height
    const exampleContainerRef = useRef<HTMLDivElement>(null);

    // mapping mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // object rotate value
    const mouseRotation = (v: number) => (1 * v) / 2000;
    const mouseRotationY = (v: number) => (1 * v) / 1000;
    const mouseRotateX = useSpring(useTransform(mouseX, mouseRotation), spring);
    const mouseRotateY = useSpring(useTransform(mouseY, mouseRotationY), spring);

    const [mousePointerX, setMousePointerX] = useState(0);
    const [mousePointerY, setMousePointerY] = useState(0);

    // orientation value
    const [deviceAlpha, setDeviceAlpha] = useState(0);

    const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>();

    // 3D moel load
    const Model = () => {
        return <motion.primitive object={gltf.scene} dispose={null} />;
    };

    // define PC size
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });

    // customization DeviceOrientationEvnet.requestPermission
    interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
        requestPermission?: () => Promise<'granted' | 'denied'>;
    }

    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;

    // change orientation value
    function handleCustomOrientation(event: DeviceOrientationEventiOS) {
        if (event.beta && event.beta !== mousePointerY) {
            if (Number((event.beta / 100).toFixed(2)) !== mousePointerY) {
                setMousePointerY(Number((event.beta / 25).toFixed(2)) - 1.8);
            }
        }
        if (event.alpha) {
            setDeviceAlpha(Math.floor(event.alpha));
        }
    }
    const checkiOS = async () => {
        const iOS = typeof requestPermission === 'function';
        if (iOS) {
            const response = await requestPermission();
            if (response === 'granted') {
                window.addEventListener('deviceorientation', handleCustomOrientation, false);
            }
        } else {
            console.log('not ios');
        }
    };

    window.addEventListener('deviceorientation', handleCustomOrientation, false);

    const checkDeviceType = () => {
        const ua = navigator.userAgent;
        console.log(ua);
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet';
        } else if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua,
            )
        ) {
            return 'mobile';
        }
        return 'desktop';
    };

    useEffect(() => {
        const response = checkDeviceType();
        setDeviceType(response);
    }, []);

    return (
        <MainContainer isPc={isPc}>
            <>
                <h1 style={{ color: 'white' }}>{mousePointerY}</h1>
                <h1 style={{ color: 'white' }}>{deviceAlpha}</h1>
                <button
                    onClick={() => {
                        checkiOS();
                    }}
                >
                    clcik
                </button>
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
                            type="secondary"
                            ref={exampleContainerRef}
                            isPc={isPc}
                            width="80vw"
                            onPointerMove={(e) => {
                                if (exampleContainerRef.current !== null) {
                                    if (deviceType === 'desktop') {
                                        mouseX.set(
                                            (e.nativeEvent.offsetX / exampleContainerRef.current.offsetWidth) * 2 - 1,
                                        );
                                        mouseY.set(
                                            exampleContainerRef.current.offsetHeight / -2 + e.nativeEvent.offsetY * 1.2,
                                        );
                                        setMousePointerX(
                                            (e.nativeEvent.offsetX / exampleContainerRef.current.offsetWidth) * 2 - 1,
                                        );
                                        setMousePointerY(
                                            (e.nativeEvent.offsetY / exampleContainerRef.current.offsetHeight) * -2 + 1,
                                        );
                                    }
                                }
                            }}
                        >
                            <Canvas>
                                <Suspense>
                                    <MotionConfig
                                        transition={{
                                            type: 'spring',
                                            duration: 0.7,
                                            bounce: 0.2,
                                        }}
                                    />

                                    <motion.group
                                        animate={{
                                            x: mousePointerX / 2,
                                            y: mousePointerY / 2,
                                        }}
                                        rotation={[mouseRotateY, mouseRotateX, 0]}
                                        whileHover={{
                                            scale: 1.1,
                                        }}
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
                            Framer Motion 3D is a simple yet powerful animation library for React Three Fiber. It offers
                            most of the same functionality as Framer Motion for declarative 3D scenes.
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
            <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={0.2} />
            <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={0.8} />
            <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={2} />
            <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
            <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
            <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
        </>
    );
}
