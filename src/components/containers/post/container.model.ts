export interface IContanerDefault {
    children: JSX.Element | JSX.Element[];
    back?: boolean;
    title?: string;
    rightComponent?: (props?: any) => JSX.Element | JSX.Element[];
}
