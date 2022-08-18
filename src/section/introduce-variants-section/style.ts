import styled from "styled-components";
import { motion } from "framer-motion";
import { IDeviceProps } from "../types";

export const AnimatedBox = styled(motion.div)`
    width: 60px;
    height: 60px;
    background-color: white;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 50%;

    border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const InnerGlassBox = styled(motion.div)`
    display: grid;
    place-items: center center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const GlassBox = styled(motion.div)`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: grid;
    place-items: center center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 172px;
    height: 172px;
`;

export const GlassButton = styled(motion.div)<IDeviceProps>`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 888;
    left: ${(props) => (props.isPc ? "90%" : "82%")};
    bottom: ${(props) => (props.isPc ? "90%" : "82%")};
    cursor: pointer;
`;

export const ControllerContainer = styled.div<IDeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.isPc ? "35vw" : "80vw")};
    height: ${(props) => (props.isPc ? "70vh" : "35vh")};
    border-radius: 0 24px 0 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const CodeParagraph = styled.pre`
    font-family: D2CODING;
    white-space: pre-wrap;
    font-size: 1.2rem;
    color: #999999;
    @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1rem;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 1rem;
    }
    @media all and (max-width: 479px) {
        font-size: 0.8rem;
    }
`;
export const CodeSpan = styled.span`
    color: ${(props) => (props.color ? props.color : "#999")};
`;
