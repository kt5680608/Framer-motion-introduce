import styled from "styled-components";
import { motion } from "framer-motion";
import {
    DeviceProps,
    CustomSectionAnimatedCardProps,
    AnimatedCardParagraphProps,
} from "../types";

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
    position: relative;
    background: linear-gradient(135deg, #05f, #09f);
    width: 80vw;
    height: ${(props) => (props.device ? "70vh" : "50vh")};
    border-radius: 24px 24px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ControllerContainer = styled.div<DeviceProps>`
    background-color: #141414;
    width: ${(props) => (props.device ? "35vw" : "80vw")};
    height: 70vh;
    border-radius: ${(props) => (props.device ? "0 24px 0 0" : "0 0 0 0")};
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const IntroduceContainer = styled.div`
    border-radius: 0 0 24px 24px;
    width: 80vw;
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 16px 0;
`;

export const AnimatedCard = styled(motion.div)<CustomSectionAnimatedCardProps>`
    width: calc(16vw * 1.618);
    height: 16vw;
    border-radius: 16px;
    position: absolute;
    box-shadow: 0 12px 12px 0 rgba(31, 38, 135, 0.6);
    display: flex;
    justify-content: space-around;
    padding: calc(1vw + 4px);
    background-color: #efeff1;
    align-items: space-around;
    flex-direction: column;
`;

export const ButtonBox = styled(motion.button)`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.6rem;
`;

export const InitialCardLocation = styled(AnimatedCard)``;

export const AnimatedCardImage = styled.img`
    max-width: calc(7vw + 12px);
    max-height: calc(7vw + 12px);
    position: relative;
`;

export const AnimatedCardParagraph = styled.p<AnimatedCardParagraphProps>`
    font-family: RFLEXREGULAR;
    font-weight: 900;
    font-size: ${(props) => props.fontSize && props.fontSize};
`;

export const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 4%;
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
