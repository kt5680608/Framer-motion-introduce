import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledP } from "../section-styles";
import { IDeviceProps } from "../types";

export const AnimatedBox = styled(motion.div)`
    width: 10vw;
    height: 10vw;
    background-color: white;
    border-radius: 16px;
`;

export const ControllerContainer = styled.div<IDeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.isPc ? "35vw" : "80vw")};
    height: 70vh;
    border-radius: ${(props) => (props.isPc ? "0 24px 0 0" : "0 0 0 0")};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
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

export const CodeSpan = styled.span`
    color: ${(props) => (props.color ? props.color : "#999")};
`;
