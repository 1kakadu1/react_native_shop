export interface IHeaderProps {
    onSetting?: () => void;
    title?: string;
    icon?: string;
    onHeaderLeft: () => void;
}

export interface IHeaderContainerProps {
    back?: boolean;
    title?: string;
    icon?: string;
    showSettings?: boolean;
}
