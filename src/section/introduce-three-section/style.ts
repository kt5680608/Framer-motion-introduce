import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledP } from "../section-styles";

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
