import { ICounter } from '../../post-screen/post-screen.model';

export interface ICart {
    products: ICartItem[];
    isOpen: boolean;
}

export interface ICartItem {
    title: string;
    preview: string;
    id: string;
    price:
        | {
              [key: string]: number;
          }
        | number;
    count: number;
    filters: {
        size: string[];
    };
    cat?: string;
    comments?: string;
    productSize: string;
    [key: string]: unknown;
}

export interface ICartComments {
    id: string;
    size: string;
    comments: string;
}
