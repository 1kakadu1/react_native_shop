import { ICounter } from '../post-screen/post-screen.model';
import { ICartComments, ICartItem } from './state/cart.state.model';

export interface ICartItemProps {
    title: string;
    preview: string;
    id: string;
    price:
        | {
              [key: string]: number;
          }
        | number;
    count: ICounter;
    filters: {
        size: string[];
    };
    cat?: string;
    [key: string]: unknown;
}

export interface ICartProps {
    cart: ICartItem[];
    count: number;
    totalPrice: number;
    goProducts: () => void;
    onAdd: (item: ICartItem, size: string) => void;
    onSub: (item: ICartItem, size: string) => void;
    goOrder: () => void;
    onClear: () => void;
    onRemove: (value: { id: string; size: string }) => void;
    onChangeComments?: (value: ICartComments) => void;
}
