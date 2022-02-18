import { IProductsData } from './products.state.model';

export const productsInit: IProductsData = {
    products: [],
    isLoad: true,
    isRefresh: false,
    error: '',
    currentPost: undefined,
    filters: {
        limit: 0,
        offset: 0
    },
    currentCat: 'all'
};
