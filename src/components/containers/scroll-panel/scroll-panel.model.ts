export interface IScrollPanelProps {
    isRefresh?: boolean;
    onRefresh?: () => void;
    progressViewOffset?: number;
    children: JSX.Element | JSX.Element[];
    panel: () => JSX.Element;
    heightPanel: number;
}
