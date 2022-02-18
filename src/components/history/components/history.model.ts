import { IHistoryProducts } from '../state/history.state.model';

export interface IHistoryProps {
    orders: IHistoryProducts[];
    isLoad: boolean;
}
