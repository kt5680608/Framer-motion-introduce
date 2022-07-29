import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --g-color-black: #3A3A3A;
        --g-color-grey100: #616161;
        --g-color-grey50: #7F7F7F; 
        --g-color-background: #1a1a1a;
        --system-color-codeTint1: #fc6;
        --system-color-codeTint2: #adf;
        --system-color-codeTint3: #f97;
        --system-color-codeTint4: #2cd;
        --system-color-codeTint5: #b8f;
        --system-color-codeTint6: #0bf;
        --system-palette-purpleLight: hsl(259, 100%, 71%)
    }
    html{
        margin: 0;
        padding: 0;
        font-size: 16px;
       
    }
    body{
      display: flex;
      justify-content: center;
      background-color: #1a1a1a;
      max-width: 100vw;
      flex-direction: column;
      overflow-x: hidden;
      align-items: center;
      margin: 0;
      padding: 0;
      p{
            margin: 0;
            padding: 0;
        }
    }
    pre{
        margin: 0;
        line-height: 1.5;
    }
    a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    a:visited, a:focus, a:hover, a:active {
    text-decoration: none;
    }
    
    
    h1{
        font-family:   sans-serif;
        margin: 0;
        padding: 0;
        
    }
    p{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    h2{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    li{
        font-family:  sans-serif;
        margin: 0;
        padding: 0;
    }
}
`;

interface MainHeadingProps {
    size?: string;
}
export const MainHeading = styled.h1<MainHeadingProps>`
    font-family: "RFLEXBLACK";
    font-weight: 900;
    color: white;
    font-size: ${(props) => (props.size ? props.size : "1rem")};
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
    font-family: "RFLEXBLACK";
    font-weight: 900;
    font-size: 1.3rem;
    letter-spacing: 1px;
    line-height: 1.4;
`;
