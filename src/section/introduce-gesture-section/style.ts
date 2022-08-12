import styled from "styled-components";
import { motion } from "framer-motion";
import { IDeviceProps } from "../types";

export const AnimatedBox = styled(motion.div)`
    width: 10vw;
    height: 10vw;
    background-color: white;
    border-radius: 16px;
    cursor: grab;
`;
export const ConsoleContainer = styled.div<IDeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.isPc ? "35vw" : "80vw")};
    overflow: hidden;
    height: ${(props) => (props.isPc ? "70vh" : "35vh")};
    border-radius: ${(props) => (props.isPc ? "0 24px 24px 0" : "0")};
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
