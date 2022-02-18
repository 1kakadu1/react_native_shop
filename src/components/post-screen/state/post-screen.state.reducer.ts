import { createSlice } from '@reduxjs/toolkit';
import { POST_KEY } from './post-screen.state.const';
import { cartInit } from './post-screen.state.mock';
import { IPost, IPostItem } from './post-screen.state.model';

const setPostParam = (
    state: IPost,
    { payload }: { payload: { id: string; size: string } }
) => {
    state.post = undefined;
    state.id = payload.id;
    state.size = payload.size;
};

const postRequest = (
    state: IPost,
    { payload }: { payload: { id: string; size: string } }
) => {
    return {
        ...state,
        isLoad: true,
        post: undefined,
        id: payload.id,
        size: payload.size
    };
};

const postRequestSuccess = (
    state: IPost,
    { payload }: { payload: IPostItem }
) => {
    return {
        ...state,
        post: payload,
        isLoad: false,
        error: ''
    };
};

const postRequestFailed = (state: IPost, { payload }: { payload: string }) => {
    state.isLoad = false;
    state.error = payload;
};

const postRefreshRequest = (state: IPost) => {
    state.isRefresh = true;
};

const changeProductSize = (state: IPost, { payload }: { payload: string }) => {
    state.size = payload;
};

const clearProductSize = (state: IPost) => {
    state.size = '';
};
const clearProduct = (state: IPost) => {
    state.post = undefined;
    state.size = '';
};
const postRefreshRequestSuccess = (
    state: IPost,
    { payload }: { payload: IPostItem }
) => {
    return {
        ...state,
        post: payload,
        isRefresh: false,
        error: ''
    };
};

const postRefreshRequestFailed = (
    state: IPost,
    { payload }: { payload: string }
) => {
    state.isRefresh = false;
    state.error = payload;
};

export const postSlice = createSlice({
    name: POST_KEY,
    initialState: cartInit,
    reducers: {
        postRequest,
        postRequestSuccess,
        postRequestFailed,
        setPostParam,
        postRefreshRequest,
        postRefreshRequestSuccess,
        postRefreshRequestFailed,
        changeProductSize,
        clearProductSize,
        clearProduct
    }
});

export const toPostAction = postSlice.actions;
