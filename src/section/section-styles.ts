import styled from "styled-components";
import { motion } from "framer-motion";
import { IDeviceProps, IExampleContainerProps } from "./types";

export const MainContainer = styled.div<IDeviceProps>`
    width: 100vw;
    height: 100%;
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ExampleContainer = styled(motion.div)<IExampleContainerProps>`
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "#141414"};
    width: ${(props) => (props.width ? "80vw" : props.isPc ? "45vw" : "80vw")};
    height: ${(props) => (props.isPc === true ? "70vh" : "35vh")};
    border-radius: ${(props) => (props.isPc ? "24px 0 0 0" : "24px 24px 0 0 ")};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
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

export const IntroduceContainer = styled.div<IDeviceProps>`
    border-radius: 0 0 24px 24px;
    width: 80vw;
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 16px 0;
`;
