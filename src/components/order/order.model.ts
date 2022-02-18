import { Observable } from 'redux';
import { IResponse } from '../../services/api';
import { IUser } from '../../store/user/user.model';
import { ICartItem } from '../cart/state/cart.state.model';

export interface IOrderForm {
    date: Date;
    email: string;
    name: string;
    address: string;
    comments: string;
    userID?: string;
}

export interface IUserOrder {
    userID: string;
    email: string;
    name: string;
    address: string;
    phone: string;
}
export interface IOrderProps {
    cart: ICartItem[];
    user: IUserOrder;
    sendOrder: (
        order: IOrderForm,
        value: ICartItem[],
        key: string
    ) => Promise<IResponse<{}, string, string>>;
    goHome: () => void;
    onClear: () => void;
}
