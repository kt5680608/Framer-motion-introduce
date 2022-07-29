import styled from "styled-components";
import { motion } from "framer-motion";
import { DeviceProps } from "../types";

export const MainContainer = styled.div<DeviceProps>`
    width: 100vw;
    height: ${(props) => (props.device ? "120vh" : "120vh")};
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ExampleContainer = styled(motion.div)<DeviceProps>`
    background: linear-gradient(135deg, #a2e, #d0e);
    width: ${(props) => (props.device ? "45vw" : "80vw")};
    height: ${(props) => (props.device ? "70vh" : "35vh")};
    border-radius: ${(props) =>
        props.device ? "24px 0 0 0" : "24px 24px 0 0"};
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
    cursor: grab;
`;
export const ConsoleContainer = styled.div<DeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.device ? "35vw" : "80vw")};
    overflow: hidden;
    height: ${(props) => (props.device ? "70vh" : "35vh")};
    border-radius: ${(props) => (props.device ? "0 24px 24px 0" : "0")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CodeParagraph = styled.p`
    font-family: D2CODING;
    white-space: pre-wrap;
    font-size: 1.2rem;
    @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1rem;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 1rem;
    }
    @media all and (max-width: 479px) {
        font-size: 0.8rem;
    }
    color: #999999;
`;

export const CodeSpan = styled.span`
    color: ${(props) => (props.color ? props.color : "#999")};
`;

export const IntroduceContainer = styled.div<DeviceProps>`
    border-radius: 0 0 24px 24px;
    width: ${(props) => (props.device ? "80%" : "100%")};
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
    color: white;
    line-height: 2rem;
    @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.2rem;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 1.2rem;
    }
    @media all and (max-width: 479px) {
        font-size: 1rem;
    }
`;
