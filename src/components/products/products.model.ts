import { IProducts, IProductsExcept } from './state/products.state.model';

export interface IProductsProps {
    data: IProducts[];
    nav: (id: string) => void;
    isLoad: boolean;
    isRefresh?: boolean;
    onRefresh: () => void;
}

export interface IProductsItem {
    item: IProductsExcept;
    nav: (id: string) => void;
}
