export interface IFlatlistPanelProps {
    isRefresh?: boolean;
    onRefresh?: () => void;
    progressViewOffset?: number;
    listEmptyComponent?: () => JSX.Element;
    renderSeparator?: () => JSX.Element;
    panel: () => JSX.Element;
    heightPanel: number;
    renderItem: (data: any) => JSX.Element;
    data: any[];
}

export interface IRenderProps {
    data: any;
    height: number | string;
    nav: (id: string) => void;
}
