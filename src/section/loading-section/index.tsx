import { Box } from 'hoondesign';
import { loadingMessageArray, loadingImageArray } from './loading-message';
import { LoadingBox, LoadingImage, LoadingText } from './style';

function LoadingSection() {
    const randomElement = loadingMessageArray[Math.floor(Math.random() * loadingMessageArray.length)];
    const randomImage = loadingImageArray[Math.floor(Math.random() * loadingImageArray.length)];

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
                    src={`${randomImage}.png`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
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
