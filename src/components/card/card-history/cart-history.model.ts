import { IHistoryProducts } from '../../history/state/history.state.model';
import { ICartComments, ICartItem } from '../../cart/state/cart.state.model';

export interface ICartHistory {
    data: IHistoryProducts;
    height?: string | number;
    width?: string | number;
    onLongPress?: (value: { id: string; size: string }) => void;
    onChangeComments?: (value: ICartComments) => void;
    onPress?: (value: { id: string; size?: string }) => void;
}
