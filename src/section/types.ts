export interface IDeviceProps {
    isPc?: boolean;
    isMobile?: boolean;
    useRerender?(): () => void;
}

export interface IMainHeadingProps {
    size?: string;
}

export interface IExampleContainerProps extends IDeviceProps {
    backgroundColor?: string;
    width?: string;
    type: 'primary' | 'secondary';
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

export interface IContactSectionProps extends IDeviceProps {
    sectionId: string;
}

export interface ILoadingFlexProps {
    direction?: 'row' | 'column';
}
