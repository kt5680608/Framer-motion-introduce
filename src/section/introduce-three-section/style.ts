import styled from "styled-components";
import { DeviceProps } from "../types";
import { motion } from "framer-motion";
import { StyledP } from "../../globalStyles";
export const MainContainer = styled.div<DeviceProps>`
    width: 100vw;
    height: 100%;
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ExampleContainer = styled(motion.div)<DeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.device ? "45vw" : "80vw")};
    height: ${(props) => (props.device ? "70vh" : "35vh")};
    border-radius: 24px 24px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const GlassButton = styled(motion.button)`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    z-index: 1;
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
        cursor: pointer;
        border: none;
    }
    &::-webkit-slider-runnable-track {
        border-radius: 8px;
        height: 30%;
        background-color: #707070;
    }
`;
