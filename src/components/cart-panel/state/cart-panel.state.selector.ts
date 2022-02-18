import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { CART_PANEL_KEY } from './cart-panel.state.const';
import { ICartPanel } from './cart-panel.state.model';

export const cartPanelSelector = createFeatureSelector<ICartPanel>(
    CART_PANEL_KEY
);

const size = createSelector(cartPanelSelector, ({ size }) => size);

export const toCartPanelSelector = { size };
