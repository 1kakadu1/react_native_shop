import { ICartComments, ICartItem } from '../../cart/state/cart.state.model';

export interface ICardCart {
    data: ICartItem;
    onAdd?: (item: ICartItem, size: string) => void;
    onSub?: (item: ICartItem, size: string) => void;
    height?: string | number;
    width?: string | number;
    numberOfLines?: number;
    onLongPress?: (value: { id: string; size: string }) => void;
    onChangeComments?: (value: ICartComments) => void;
    onPress?: (id: string, size?: string ) => void;
}
