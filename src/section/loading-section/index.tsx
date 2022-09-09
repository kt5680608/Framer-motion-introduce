import { Box } from 'hoondesign';
import { LoadingMessage } from './loading-message';
import { LoadingBox, LoadingImage, LoadingText } from './style';

function LoadingSection() {
    const randomElement = LoadingMessage[Math.floor(Math.random() * LoadingMessage.length)];

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
                <LoadingImage
                    animate={{
                        rotate: 360,
                        transition: {
                            type: 'spring',
                            duration: 0.9,
                            delay: 0.3,
                            repeatDelay: 1,
                            repeat: 1,
                        },
                    }}
                    src="sleeping.png"
                />
                <LoadingText
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
                >
                    {randomElement}
                </LoadingText>
            </LoadingBox>
        </Box>
    );
}

export default LoadingSection;
