export interface DeviceProps {
    isPc?: boolean;
    isMobile?: boolean;
}

export interface ExampleContainerProps extends DeviceProps {
    backgroundColor?: string;
    width?: string;
}
export interface CustomSectionAnimatedCardProps {
    isPc?: boolean;
    isMobile?: boolean;

    index: number;
}

export interface AnimatedCardParagraphProps {
    isPc?: boolean;
    isMobile?: boolean;
    fontSize?: string;
}
