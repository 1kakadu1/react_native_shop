import { IProductsExcept } from '../../products/state/products.state.model';

export interface ICardHorizontal {
    data: IProductsExcept;
    nav: (id: string) => void;
    height?: string | number;
    width?: string | number;
    numberOfLines?: number;
}

export interface ICardHorizontal {
    data: IProductsExcept;
    nav: (id: string) => void;
    height?: string | number;
    width?: string | number;
    numberOfLines?: number;
    hideButton?: boolean;
}

export interface ICardHorizontalPlaceholder {
    count: number;
    height?: string | number;
    width?: string | number;
}
