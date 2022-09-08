import styled from 'styled-components';

export const MenuButton = styled.div`
    width: 100%;
    height: 36px;
    border-radius: 24px;
    background-color: black;
    border: none;
    padding: 12px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
    margin: 6px 0 6px 0;
`;

export const ButtonText = styled.p`
    font-family: RFLEXREGULAR;
    font-size: 1.2rem;
    color: white;
`;

export const MenuIcon = styled.img`
    width: 36px;
    height: 36px;
    pointer-events: none;
`;
