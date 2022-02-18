import { ICartItem } from '../../cart/state/cart.state.model';

export interface IHistory {
    orders: IHistoryProducts[];
    isLoad: boolean;
    error: string;
}

export interface IHistoryProducts {
    id: string;
    date: any;
    products: ICartItem[];
}

export interface IProfileUser {
    preview?: string;
    email: string;
    phone: string;
    name: string;
    address: string;
    userID: string;
}
