import styled from "styled-components";
import { motion } from "framer-motion";
import { IDeviceProps } from "../types";

export const GlassButton = styled(motion.button)<IDeviceProps>`
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
    left: ${(props) => (props.isPc ? "95%" : "82%")};
    bottom: ${(props) => (props.isPc ? "90%" : "82%")};
    cursor: pointer;
`;
