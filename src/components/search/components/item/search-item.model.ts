import { price } from '../../../products/state/products.state.model';

export interface ISearchItemProps {
    title: string;
    preview: string;
    price: price;
    id: string;
    index: number;
    size: string[];
    onClose: () => void;
}
