import React from "react";
import { Box } from "hoondesign";
import { MainHeading } from "../../globalStyles";
import {
    MainContainer,
    IntroduceContainer,
    IntroduceParagraph,
    IntroduceParagraphSpan,
} from "../section-styles";
import { ContactLink } from "./style";

function ContactSection() {
    return (
        <MainContainer>
            <Box id="introduce-animate-heading-container">
                <MainHeading size="4rem">CONTACT ME</MainHeading>
            </Box>
            <Box
                id="contact-section-main-container"
                width="80vw"
                height="25vh"
                backgroundColor="#141414"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="24px"
            >
                <IntroduceContainer>
                    <IntroduceParagraph>
                        <IntroduceParagraphSpan color="var(--system-color-codeTint1)">
                            e-mail
                        </IntroduceParagraphSpan>
                        : gns7893@naver.com
                        <br />
                        <IntroduceParagraphSpan color="var(--system-color-codeTint1)">
                            open-kakao
                        </IntroduceParagraphSpan>
                        :{" "}
                        <ContactLink
                            href="https://open.kakao.com/o/sodUugve"
                            onClick={() =>
                                window.open("https://open.kakao.com/o/sodUugve")
                            }
                        >
                            https://open.kakao.com/o/sodUugve
                        </ContactLink>
                        <br />
                        <IntroduceParagraphSpan color="var(--system-color-codeTint1)">
                            github
                        </IntroduceParagraphSpan>{" "}
                        :{" "}
                        <ContactLink
                            href="https://github.com/kt5680608"
                            onClick={() =>
                                window.open("https://github.com/kt5680608")
                            }
                        >
                            https://github.com/kt5680608
                        </ContactLink>
                    </IntroduceParagraph>
                </IntroduceContainer>
            </Box>
            <Box id="main-footer-container" width="100vw" height="25vh"></Box>
        </MainContainer>
    );
}

export default ContactSection;
