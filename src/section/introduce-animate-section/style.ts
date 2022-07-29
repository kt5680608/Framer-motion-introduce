import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledP } from "../../globalStyles";
import { DeviceProps } from "../types";

export const MainContainer = styled.div<DeviceProps>`
    width: 100vw;
    height: ${(props) => (props.device ? "120vh" : "160vh")};
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ExampleContainer = styled(motion.div)<DeviceProps>`
    background: linear-gradient(135deg, #e09, #d0e);
    width: ${(props) => (props.device ? "45vw" : "80vw")};
    height: ${(props) => (props.device ? "70vh" : "35vh")};
    border-radius: ${(props) =>
        props.device ? "24px 0 0 0" : "24px 24px 0 0 "};
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
`;

export const ControllerContainer = styled.div<DeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.device ? "35vw" : "80vw")};
    height: 70vh;
    border-radius: ${(props) => (props.device ? "0 24px 0 0" : "0 0 0 0")};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
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

export const RangeInput = styled.input`
    width: 50%;
    appearance: none;
    background-color: transparent;
    &:focus {
        outline: none;
    }
    &::-webkit-slider-thumb {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background-color: #e09;
        border-radius: 50%;
        box-shadow: none;
        cursor: pointer;
        box-shadow: 0 0 2px 0 #555;
    }
    &::-webkit-slider-runnable-track {
        border-radius: 8px;
        height: 30%;
        background-color: #707070;
    }
`;

export const RangeNumber = styled(StyledP)`
    width: 8rem;
    @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.3rem;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 1.2rem;
    }
    @media all and (max-width: 479px) {
        font-size: 1rem;
    }
`;

export const CodeParagraph = styled.p`
    font-family: D2CODING;
    white-space: pre-wrap;
    font-size: 1.2rem;
    color: #999999;
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
export const CodeSpan = styled.span`
    color: ${(props) => (props.color ? props.color : "#999")};
`;
