import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { PRODUCTS_PANEL_KEY } from './products-panel.const';
import { IProductsPanel } from './products-panel.model';

export const userSelector = createFeatureSelector<IProductsPanel>(
    PRODUCTS_PANEL_KEY
);

const isSearch = createSelector(userSelector, ({ isSearch }) => isSearch);

const preview = createSelector(userSelector, ({ preview }) => preview);

export const toProductPanelSelector = { isSearch, preview };
