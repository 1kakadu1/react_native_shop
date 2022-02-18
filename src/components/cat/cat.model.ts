import { ICatList } from './state/cat.state.model';

export interface ICatProps {
    cat: ICatList[];
    isLoad: boolean;
    currentCat: string;
    onChangeCat: (value: ICatList) => void;
}
