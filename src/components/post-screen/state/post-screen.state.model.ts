import { IProducts } from '../../products/state/products.state.model';
export interface IPostItem extends IProducts {}
export interface IPost {
    post?: IPostItem;
    id: string;
    size: string;
    isLoad: boolean;
    isRefresh: boolean;
    error: string;
}
