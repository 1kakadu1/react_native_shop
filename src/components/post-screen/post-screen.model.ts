import { IProducts } from '../products/state/products.state.model';

export interface IPostItemProps {
    post: IProducts;
    count: ICounter;
    sliderData: IProducts[];
    isLoad: boolean;
    isRefresh: boolean;
    onRefresh: () => void;
    nav: (id: string) => void;
    size: string;
}

export interface ICounter {
    count: number;
    [key: string]: number;
}
