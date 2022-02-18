export interface ICatList {
    name: string;
    preview: string;
    id: string;
}

export interface ICatData {
    cat: ICatList[];
    currentCat: string;
    isLoad: boolean;
    error: string;
}
