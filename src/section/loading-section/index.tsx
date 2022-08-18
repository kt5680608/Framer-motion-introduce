import { Box } from "hoondesign";
import {
    LoadingBox,
    LoadingP,
    LoadingProgress,
    LoadingFlex,
    Circle,
} from "./style";
function LoadingSection() {
    return (
        <Box
            id="loading-section-main-container"
            width="100vw"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <LoadingBox>
                <LoadingFlex direction="column">
                    <LoadingFlex direction="row">
                        <LoadingFlex>
                            <LoadingProgress
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 120 }}
                                transition={{
                                    repeatType: "mirror",
                                    repeat: 2,
                                    duration: 0.5,
                                    type: "ease",
                                    repeatDelay: 1,
                                }}
                            />
                            <LoadingProgress
                                initial={{ rotate: 60 }}
                                animate={{ rotate: 0 }}
                                transition={{
                                    repeatType: "mirror",
                                    repeat: 2,
                                    duration: 0.5,
                                    type: "ease",
                                    repeatDelay: 1,
                                }}
                            />
                            <LoadingProgress
                                initial={{ rotate: 120 }}
                                animate={{ rotate: 60 }}
                                transition={{
                                    repeatType: "mirror",
                                    repeat: 2,
                                    duration: 0.5,
                                    type: "ease",
                                    repeatDelay: 1,
                                }}
                            />
                        </LoadingFlex>
                        <LoadingFlex>
                            <Circle
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1.0 }}
                                transition={{
                                    repeatType: "mirror",
                                    repeat: 2,
                                    duration: 0.5,
                                    type: "ease",
                                    repeatDelay: 1,
                                }}
                            />
                        </LoadingFlex>
                        <LoadingFlex
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 45 }}
                            transition={{
                                repeatType: "mirror",
                                repeat: 2,
                                duration: 0.5,
                                type: "ease",
                                repeatDelay: 1,
                            }}
                        >
                            <LoadingProgress
                                initial={{ rotate: 90 }}
                                transition={{
                                    repeatType: "mirror",
                                    repeat: 2,
                                    duration: 0.5,
                                    type: "ease",
                                    repeatDelay: 1,
                                }}
                            />
                            <LoadingProgress
                                initial={{ rotate: 0 }}
                                transition={{
                                    repeatType: "mirror",
                                    repeat: 2,
                                    duration: 0.5,
                                    type: "ease",
                                    repeatDelay: 1,
                                }}
                            />
                        </LoadingFlex>
                    </LoadingFlex>
                    <LoadingFlex>
                        <LoadingP>Hoon's Playground Coming</LoadingP>
                    </LoadingFlex>
                </LoadingFlex>
            </LoadingBox>
        </Box>
    );
}

export default LoadingSection;
