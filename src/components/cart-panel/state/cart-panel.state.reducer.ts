import { createSlice } from '@reduxjs/toolkit';
import { CART_PANEL_KEY } from './cart-panel.state.const';
import { cartInit } from './cart-panel.state.mock';
import { ICartPanel } from './cart-panel.state.model';

const changeSize = (state: ICartPanel, { payload }: { payload: string }) => {
    state.size = payload;
};

const clearSize = (state: ICartPanel) => {
    state.size = '';
};

export const cartPanelSlice = createSlice({
    name: CART_PANEL_KEY,
    initialState: cartInit,
    reducers: {
        changeSize,
        clearSize
    }
});

export const toCartPanelAction = cartPanelSlice.actions;
