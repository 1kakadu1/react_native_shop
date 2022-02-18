import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { CART_KEY } from './cart.state.const';
import { ICart } from './cart.state.model';

export const cartSelector = createFeatureSelector<ICart>(CART_KEY);

const isOpen = createSelector(cartSelector, ({ isOpen }) => isOpen);

const getCartProduct = (id: string) =>
    createSelector(cartSelector, ({ products }) =>
        products.filter((x) => x.id === id)
    );

const cart = createSelector(cartSelector, ({ products }) => products);

export const toCartSelector = { getCartProduct, cart, isOpen };
