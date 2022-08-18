import styled from "styled-components";
import { IntroduceContainer } from "../section-styles";

export const ContactLink = styled.a`
    color: white;
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    a:visited {
        text-decoration: none;
        color: white;
    }
`;

export const ContactInfoContainer = styled(IntroduceContainer)`
    border-radius: 24px;
`;
