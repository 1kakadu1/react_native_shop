import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CAT_KEY } from './cat.state.const';
import { catInit } from './cat.state.mock';
import { ICatList, ICatData } from './cat.state.model';

const setCat = (state: ICatData, { payload }: { payload: ICatList }) => {
    return {
        ...state,
        currentCat: payload.name
    };
};

const catRequest = (state: ICatData) => {
    state.isLoad = true;
    state.error = '';
};

const catRequestSuccess = (
    state: ICatData,
    { payload }: { payload: ICatList[] }
) => {
    return {
        ...state,
        cat: payload,
        isLoad: false,
        error: ''
    };
};

const catRequestFailed = (
    state: ICatData,
    { payload }: { payload: string }
) => {
    state.isLoad = false;
    state.error = payload;
};

export const catSlice = createSlice({
    name: CAT_KEY,
    initialState: catInit,
    reducers: {
        setCat,
        catRequest,
        catRequestSuccess,
        catRequestFailed
    }
});

export const toCatAction = catSlice.actions;
