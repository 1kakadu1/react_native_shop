import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEARCH_KEY } from './search.const';
import { searchInit } from './search.mock';
import { ISearch, ISearchResult } from './search.model';

const onOpen = (state: ISearch) => {
    state.isOpen = true;
};
const onClose = (state: ISearch) => {
    state.isOpen = false;
};

const onChangeSearch = (state: ISearch, { payload }: { payload: string }) => {
    state.query = payload;
};

const clearSearchResult = (state: ISearch) => {
    state.result = [];
};

const setSearchResult = (
    state: ISearch,
    { payload }: { payload: ISearchResult[] }
) => {
    state.result = payload;
};

const searchRequest = (state: ISearch) => {
    state.isLoad = true;
};

const searchRequestSuccess = (
    state: ISearch,
    { payload }: { payload: ISearchResult[] }
) => {
    return {
        ...state,
        isLoad: false,
        error: '',
        result: payload
    };
};

const searchRequestFailed = (
    state: ISearch,
    { payload }: { payload: string }
) => {
    state.isLoad = false;
    state.error = payload;
};

export const searchSlice = createSlice({
    name: SEARCH_KEY,
    initialState: searchInit,
    reducers: {
        onOpen,
        onClose,
        onChangeSearch,
        setSearchResult,
        searchRequest,
        searchRequestSuccess,
        searchRequestFailed,
        clearSearchResult
    }
});

export const toSearchAction = searchSlice.actions;
