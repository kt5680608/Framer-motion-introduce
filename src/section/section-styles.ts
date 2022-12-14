import styled from 'styled-components';
import { IDeviceProps, IExampleContainerProps, IMainHeadingProps } from './types';
import { motion } from 'framer-motion';

export const MainContainer = styled.div<IDeviceProps>`
    width: 100vw;
    height: 100%;
    background-color: var(--g-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12vh;
`;

export const ExampleContainer = styled.div<IExampleContainerProps>`
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : '#141414')};
    width: ${(props) => (props.width ? '80vw' : props.isPc ? '45vw' : '80vw')};
    height: ${(props) => (props.isPc === true ? '70vh' : '35vh')};
    ${(props) =>
        props.type === 'primary' &&
        `
        border-radius: ${props.isPc ? '24px 0 0 0' : '24px 24px 0 0 '};
    `}
    ${(props) =>
        props.type === 'secondary' &&
        `
        border-radius: 24px 24px 0 0;
    `}
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

export const IntroduceParagraphSpan = styled.span`
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
    line-height: 2rem;
    color: ${(props) => (props.color ? props.color : 'white')};
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
export const MainHeading = styled(motion.h1)<IMainHeadingProps>`
    font-family: 'RFLEXBLACK';
    font-weight: 900;
    color: white;
    font-size: ${(props) => (props.size ? props.size : '1rem')};
    text-align: center;
    @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 4rem;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 3.5rem;
    }
    @media all and (max-width: 479px) {
        font-size: 2.5rem;
    }
`;

export const StyledP = styled.p`
    color: white;
    font-family: 'RFLEXBLACK';
    font-weight: 900;
    font-size: 1.3rem;
    letter-spacing: 1px;
    line-height: 1.4;
`;
