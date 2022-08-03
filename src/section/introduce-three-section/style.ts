import styled from "styled-components";
import { DeviceProps } from "../types";
import { motion } from "framer-motion";

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
    background-color: #141414;
    width: 80vw;
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
