import { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import {
    MainContainer,
    MainHeading,
    ExampleContainer,
    IntroduceContainer,
    IntroduceParagraph,
} from '../section-styles';
import { GlassButton, IconSpan, ButtonFrame } from './style';
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

    // mapping currentRotationValue position
    const currentRotationValueX = useMotionValue(0);
    const currentRotationValueY = useMotionValue(0);

    // 3D model load
    const Model = () => {
        return <motion.primitive object={gltf.scene} dispose={null} />;
    };

    // define PC size
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });

    // object rotate value
    const currentViewRotation = (v: number) => (1 * v) / 2;
    const currentViewRotationY = (v: number) => (1 * v) / 1000;
    const currentRotationValueRotateX = useSpring(useTransform(currentRotationValueX, currentViewRotation), spring);
    const currentRotationValueRotateY = useSpring(useTransform(currentRotationValueY, currentViewRotationY), spring);

    // user's current view point
    const [currentViewPositionX, setCurrentViewPositionX] = useState(0);
    const [currentViewPositionY, setCurrentViewPositionY] = useState(0);

    // user's device
    const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>();

    // customization DeviceOrientationEvnet.requestPermission
    interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
        requestPermission?: () => Promise<'granted' | 'denied'>;
    }

    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;

    // change orientation value
    const handleCustomOrientation = useCallback(
        (event: DeviceOrientationEventiOS) => {
            if (
                event.beta &&
                event.gamma &&
                Number((event.beta / 15 - 1.8).toFixed(2)) !== currentViewPositionY &&
                Number((event.gamma / 30).toFixed(2)) !== currentViewPositionX &&
                deviceType !== 'desktop'
            ) {
                setCurrentViewPositionY(Number(-(event.beta / 15 - 1.8).toFixed(2)));
                setCurrentViewPositionX(Number((event.gamma / 15).toFixed(2)));
                currentRotationValueY.set(Number((event.beta / 300).toFixed(2)));
                currentRotationValueX.set(Number((event.gamma / 300).toFixed(2)));
            }
        },
        [deviceType, currentViewPositionX, currentViewPositionY, currentRotationValueX, currentRotationValueY],
    );

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
        window.addEventListener('deviceorientation', handleCustomOrientation, false);
        const response = checkDeviceType();
        setDeviceType(response);
    }, [handleCustomOrientation]);

    return (
        <MainContainer isPc={isPc}>
            <>
                <Box id="introduce-animate-heading-container">
                    <MainHeading size="4rem">6. Three</MainHeading>
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
                                        currentRotationValueX.set(
                                            (e.nativeEvent.offsetX / exampleContainerRef.current.offsetWidth) * 2 - 1,
                                        );
                                        currentRotationValueY.set(
                                            exampleContainerRef.current.offsetHeight / -2 + e.nativeEvent.offsetY * 1.2,
                                        );
                                        setCurrentViewPositionX(
                                            (e.nativeEvent.offsetX / exampleContainerRef.current.offsetWidth) * 2 - 1,
                                        );
                                        setCurrentViewPositionY(
                                            (e.nativeEvent.offsetY / exampleContainerRef.current.offsetHeight) * -2 + 1,
                                        );
                                    }
                                }
                            }}
                        >
                            <ButtonFrame>
                                <GlassButton
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => {
                                        checkiOS();
                                    }}
                                >
                                    <IconSpan>ios</IconSpan>
                                </GlassButton>
                            </ButtonFrame>
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
                                            x: currentViewPositionX / 2,
                                            y: currentViewPositionY / 2,
                                        }}
                                        rotation={[currentRotationValueRotateY, currentRotationValueRotateX, 0]}
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
                            most of the same functionality as Framer Motion for declarative 3D scenes. This 3d
                            interaction works through the user's mouse position in the computer environment. On the
                            other hand, in a mobile environment, it works by tilting the device's gyro sensor. If you
                            are in an iOS environment such as iphone, click the upper right button to activate the
                            sensor.
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
