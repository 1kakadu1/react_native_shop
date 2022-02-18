import { ISearchResult } from '../state/search.model';

export interface ISearchProps {
    isOpen: boolean;
    onClose: () => void;
    deviceWidth?: number;
    height?: number;
    onChangeSearch: (text: string) => void;
    query: string;
    result: ISearchResult[];
    isLoad: boolean;
}
