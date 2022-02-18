export interface IHeaderProps {
    title?: string;
    icon?: string;
    onHeaderLeft: () => void;
    rightComponent?: (props?: any) => JSX.Element | JSX.Element[];
}

export interface IHeaderContainerProps {
    back?: boolean;
    title?: string;
    icon?: string;
    rightComponent?: (props?: any) => JSX.Element | JSX.Element[];
}
