import { createSlice } from '@reduxjs/toolkit';
import { HISTORY_KEY } from './history.state.const';
import { historyInit } from './history.state.mock';
import { IHistory, IHistoryProducts } from './history.state.model';

export const historySlice = createSlice({
    name: HISTORY_KEY,
    initialState: historyInit,
    reducers: {
        historyRequest: (state: IHistory) => {
            state.isLoad = true;
            state.error = '';
        },
        historyRequestSuccess: (
            state: IHistory,
            { payload }: { payload: IHistoryProducts[] }
        ) => {
            return {
                ...state,
                isLoad: false,
                orders: [...payload]
            };
        },
        historyRequestFail: (
            state: IHistory,
            { payload }: { payload: string }
        ) => {
            state.isLoad = false;
            state.error = payload;
        }
    }
});

export const toHistoryAction = { ...historySlice.actions };
