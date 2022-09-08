import { createGlobalStyle } from 'styled-components';

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
        background-color: #1a1a1a;
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
      
      @supports (-webkit-touch-callout: none) {
        min-height: -webkit-fill-available;
        }
      p{
            margin: 0;
            padding: 0;
        }
        hr{
        margin: 4px;
        width: 100%;
    }
 
    }
    pre{
        margin: 0;
        line-height: 1.5;
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
    li{
        list-style: none;
    }
`;
