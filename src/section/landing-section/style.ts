import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--g-color-background);
`;
export const MainHeading = styled.h1`
    font-family: "RFLEXBLACK";
    font-weight: 900;
    color: white;
    font-size: 6rem;
    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1rem;
    }
`;

export const StyledP = styled.p`
    color: white;
    font-family: "RFLEXBLACK";
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 1px;
    line-height: 1.4;
`;
