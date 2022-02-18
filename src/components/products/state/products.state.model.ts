export interface IProductsExcept {
    title: string;
    preview: string;
    desc: string;
    id: string;
    price: price;
    cat: string[];
    isTop: boolean;
    filters: {
        size: string[];
    };
}

export type price = { [key: string]: number } | number;

export interface IProducts extends IProductsExcept {
    status: string;
    desc: string;
    name: string;
    code: number;
    [key: string]: unknown;
}
export interface IProductsData {
    products: IProducts[];
    isLoad: boolean;
    isRefresh: boolean;
    error: string;
    currentPost?: IProducts;
    filters: IProductsFilters;
    currentCat: string;
}

interface IProductsFilters {
    limit: number;
    offset: number;
}
