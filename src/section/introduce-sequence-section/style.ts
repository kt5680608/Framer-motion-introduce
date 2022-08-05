import { motion } from "framer-motion";
import styled from "styled-components";
import { DeviceProps } from "../types";

export const MainContainer = styled.div<DeviceProps>`
    width: 100vw;
    min-height: ${(props) => (props.device ? "120vh" : "160vh")};
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ExampleContainer = styled(motion.div)<DeviceProps>`
    background-color: #141414;
    width: 80vw;
    height: ${(props) => (props.device ? "70vh" : "35vh")};
    border-radius: 24px 24px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const AnimatedBox = styled(motion.div)`
    width: 8vw;
    height: 8vw;
    background-color: white;
    border-radius: 16px;
    body.prevent-scroll {
        overflow-y: hidden;
    }
`;

export const IntroduceContainer = styled.div<DeviceProps>`
    border-radius: 0 0 24px 24px;
    width: ${(props) => (props.device ? "80%" : "80vw")};
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 16px 0;
`;

export const IntroduceParagraph = styled.p`
    font-family: RFLEXREGULAR;
    white-space: pre-wrap;
    font-size: 1.4rem;
    @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.2rem;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 1.2rem;
    }
    @media all and (max-width: 479px) {
        font-size: 1rem;
    }
    color: white;
    line-height: 2rem;
`;
