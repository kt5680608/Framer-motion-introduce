import styled from "styled-components";
import { motion } from "framer-motion";
import { ILoadingFlexProps } from "../types";
export const LoadingProgress = styled(motion.div)`
    width: 16px;
    height: 60px;
    background-color: white;
    position: absolute;
    @media (max-width: 426px) {
        width: 8px;
        height: 30px;
    }
`;

export const LoadingBox = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--g-color-background);
`;

export const LoadingFlex = styled(motion.div)<ILoadingFlexProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => props.direction && props.direction};
    min-width: 60px;
    gap: 12px;
    @media (max-width: 426px) {
        min-width: 24px;
    }
`;

export const LoadingP = styled.p`
    margin-top: 24px;
    position: absolute;
    font-family: RFLEXBLACK;
    color: white;
    @media (max-width: 426px) {
        font-size: 0.7rem;
    }
`;

export const Circle = styled(motion.div)`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--g-color-background);
    border: 16px solid white;
    @media (max-width: 426px) {
        width: 14px;
        height: 14px;
        border: 8px solid white;
    }
`;
