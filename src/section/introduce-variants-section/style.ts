import styled from "styled-components";
import { motion } from "framer-motion";
import { DeviceProps } from "../types";

export const MainContainer = styled.div<DeviceProps>`
    width: 100vw;
    height: 100%;
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ExampleContainer = styled.div<DeviceProps>`
    background: linear-gradient(135deg, #40f, #05f);
    width: ${(props) => (props.device ? "45vw" : "80vw")};
    height: ${(props) => (props.device ? "70vh" : "35vh")};
    border-radius: ${(props) =>
        props.device ? "24px 0 0 0" : "24px 24px 0 0"};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

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

export const GlassButton = styled(motion.div)<DeviceProps>`
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
    left: ${(props) => (props.isMobile ? "84%" : "90%")};
    bottom: ${(props) => (props.device ? "90%" : "80%")};
    cursor: pointer;
`;

export const ControllerContainer = styled.div<DeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.device ? "35vw" : "80vw")};
    height: ${(props) => (props.device ? "70vh" : "35vh")};
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

export const IntroduceContainer = styled.div<DeviceProps>`
    border-radius: 0 0 24px 24px;
    width: ${(props) => (props.device ? "80%" : "80vw")};
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 16px 0;
`;
