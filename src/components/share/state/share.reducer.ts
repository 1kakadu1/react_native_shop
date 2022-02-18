import { createSlice } from '@reduxjs/toolkit';
import { SHARE_KEY } from './share.const';
import { shareInit } from './share.mock';
import { IShare, ISharePayload } from './share.model';

const setShare = (state: IShare, { payload }: { payload: ISharePayload }) => {
    return {
        ...state,
        url: payload.uri,
        message: payload.message,
        title: payload.title
    };
};

export const shareSlice = createSlice({
    name: SHARE_KEY,
    initialState: shareInit,
    reducers: {
        setShare
    }
});

export const toShareAction = shareSlice.actions;
