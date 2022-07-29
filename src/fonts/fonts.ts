import RFLEXBLACK from "./R-FLEX-BLACK.woff2";
import RFLEXREGULAR from "./R-FLEX-REGULAR.woff2";
import D2CODING from "./D2Coding.ttf";
import { createGlobalStyle } from "styled-components";

export const FontStyle = createGlobalStyle`		    
  @font-face {
    font-family: 'RFLEXBLACK';	
    src: url(${RFLEXBLACK}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face{
    font-family: "RFLEXREGULAR";
    src: url(${RFLEXREGULAR}) format('woff2');
  }
  @font-face{
    font-family: D2CODING;
    src:url(${D2CODING}) format('ttf');
  }
`;
