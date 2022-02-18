import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICatList } from '../../cat/state/cat.state.model';
import { PRODUCTS_PANEL_KEY } from './products-panel.const';
import { productsPanelInit } from './products-panel.mock';
import { IProductsPanel } from './products-panel.model';

const onOpenSearch = (state: IProductsPanel) => {
    state.isSearch = true;
};

const onCloseSearch = (state: IProductsPanel) => {
    state.isSearch = false;
};

const changeCat = (
    state: IProductsPanel,
    { payload }: { payload: ICatList }
) => {
    return {
        ...state,
        preview: payload.preview,
        currentCat: payload.name
    };
};

const setInitCat = (
    state: IProductsPanel,
    { payload }: { payload: ICatList[] }
) => {
    const catAll = payload.find((x) => x.name === 'all');
    return {
        ...state,
        preview: catAll?.preview || '',
        currentCat: catAll?.name || 'all'
    };
};

export const productsPanelSlice = createSlice({
    name: PRODUCTS_PANEL_KEY,
    initialState: productsPanelInit,
    reducers: {
        onOpenSearch,
        onCloseSearch,
        changeCat,
        setInitCat
    }
});

export const toProductsPanelAction = productsPanelSlice.actions;
