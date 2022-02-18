import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { PRODUCTS_KEY } from './products.state.const';
import { IProductsData } from './products.state.model';

export const productsSelector = createFeatureSelector<IProductsData>(
    PRODUCTS_KEY
);

const productsList = createSelector(
    productsSelector,
    ({ products }) => products
);

const getProduct = (id: string) =>
    createSelector(productsSelector, ({ products }) =>
        products.find((x) => x.id === id)
    );

const isLoad = createSelector(productsSelector, ({ isLoad }) => isLoad);

const filters = createSelector(productsSelector, ({ filters }) => filters);

const currentCat = createSelector(
    productsSelector,
    ({ currentCat }) => currentCat
);

export const toProducts = {
    productsList,
    filters,
    isLoad,
    getProduct,
    productsSelector,
    currentCat
};
