import { IProductsExcept } from '../../products/state/products.state.model';

export interface ICardVertical {
    data: IProductsExcept;
    nav: (id: string) => void;
    height?: string | number;
    width?: string | number;
    numberOfLines?: number;
}
