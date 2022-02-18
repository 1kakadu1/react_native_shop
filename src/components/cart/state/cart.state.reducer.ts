import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { size } from 'lodash';
import { dd } from '../../../helpers/functions';
import { CART_KEY } from './cart.state.const';
import { cartInit } from './cart.state.mock';
import { ICart, ICartComments, ICartItem } from './cart.state.model';

const add = (
    state: ICart,
    { payload }: { payload: { prod: ICartItem; size: string } }
) => {
    const item = [...state.products].findIndex(
        (x) => x.id === payload.prod.id && x.productSize === payload.size
    );

    if (item === -1) {
        state.products.push({
            ...payload.prod,
            count: 1,
            productSize: payload.size
        });
    } else {
        state.products[item].count += 1;
    }
};

const sub = (
    state: ICart,
    { payload }: { payload: { prod: ICartItem; size: string } }
) => {
    const item = [...state.products].findIndex(
        (x) => x.id === payload.prod.id && x.productSize === payload.size
    );

    if (item !== -1 && state.products[item].count - 1 > 0) {
        state.products[item].count -= 1;
    } else if (item !== -1 && state.products[item].count - 1 <= 0) {
        state.products.splice(item, 1);
    }
};

const remove = (
    state: ICart,
    { payload }: { payload: { id: string; size: string } }
) => {
    const item = [...state.products].findIndex(
        (x) => x.id === payload.id && x.productSize === payload.size
    );

    if (item !== -1) {
        state.products.splice(item, 1);
    }
};

const clear = (state: ICart) => {
    state.products = [];
};

const changeComments = (
    state: ICart,
    { payload }: { payload: ICartComments }
) => {
    const item = [...state.products].findIndex(
        (x) => x.id === payload.id && x.productSize === payload.size
    );

    if (item !== -1) {
        state.products[item].comments = payload.comments;
    }
};

export const cartSlice = createSlice({
    name: CART_KEY,
    initialState: cartInit,
    reducers: {
        add,
        sub,
        clear,
        remove,
        changeComments
    }
});

export const toCartAction = cartSlice.actions;
