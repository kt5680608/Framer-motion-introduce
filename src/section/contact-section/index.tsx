import React from "react";
import { Box } from "hoondesign";
import { MainHeading } from "../../globalStyles";
import {
    MainContainer,
    IntroduceContainer,
    IntroduceParagraph,
    IntroduceParagraphSpan,
} from "../section-styles";

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
                        <a
                            onClick={() =>
                                window.open("https://open.kakao.com/o/sodUugve")
                            }
                        >
                            https://open.kakao.com/o/sodUugve
                        </a>
                        <br />
                        <IntroduceParagraphSpan color="var(--system-color-codeTint1)">
                            github
                        </IntroduceParagraphSpan>{" "}
                        :{" "}
                        <a
                            onClick={() =>
                                window.open("https://github.com/kt5680608")
                            }
                        >
                            https://github.com/kt5680608
                        </a>
                    </IntroduceParagraph>
                </IntroduceContainer>
            </Box>
            <Box id="main-footer-container" width="100vw" height="25vh"></Box>
        </MainContainer>
    );
}

export default ContactSection;
