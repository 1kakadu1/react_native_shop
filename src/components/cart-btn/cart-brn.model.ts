export interface ICartBtn {
    count: number;
    goCart: () => void;
    icon?: string;
    size?: number;
    color?: string;
}

export interface ICartBtnContainerProps {
    icon?: string;
    size?: number;
    color?: string;
}
