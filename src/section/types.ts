export interface IDeviceProps {
    isPc?: boolean;
    isMobile?: boolean;
}

export interface IMainHeadingProps {
    size?: string;
}

export interface IExampleContainerProps extends IDeviceProps {
    backgroundColor?: string;
    width?: string;
}
export interface ICustomSectionAnimatedCardProps {
    isPc?: boolean;
    isMobile?: boolean;

    index: number;
}

export interface IAnimatedCardParagraphProps {
    isPc?: boolean;
    isMobile?: boolean;
    fontSize?: string;
}

export interface IGestureContainerInfoProps {
    id: number;
    x: number;
    y: number;
    type: string;
}
