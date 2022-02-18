import { IProducts } from '../../products/state/products.state.model';

export interface ISearch {
    isOpen: boolean;
    query: string;
    result: ISearchResult[];
    isLoad: boolean;
    error: string;
}

export interface ISearchResult extends IProducts {}
