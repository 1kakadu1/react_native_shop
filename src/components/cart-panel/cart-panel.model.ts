import { ICartItemProps } from '../cart/cart.model';
import { ICartItem } from '../cart/state/cart.state.model';

export interface ICartPanelProps {
    item: ICartItemProps;
    size: string;
    onAdd: (item: ICartItem, size: string) => void;
    onSub: (item: ICartItem, size: string) => void;
    onSize: (val: string) => void;
}
