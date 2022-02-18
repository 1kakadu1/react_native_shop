import { createSlice } from '@reduxjs/toolkit';
import { userInit } from './user.init';
import { IUser, IUserActionProps } from './user.model';
// TODO: перенести все в профиль
const loginRequest = (
    state: IUser,
    { payload }: { payload: IUserActionProps }
) => {
    state.isLoad = true;
    state.email = payload.email;
    state.password = payload.password;
};

const loginRequestSuccess = (
    state: IUser,
    { payload }: { payload: IUser | {} }
) => {
    return {
        ...state,
        isLoad: false,
        isAuth: true,
        error: '',
        password: '',
        ...payload
    };
};

const loginRequestFailed = (state: IUser, { payload }: { payload: string }) => {
    state.isLoad = false;
    state.isAuth = false;
    state.error = payload;
};

const getUserLaodingRequest = (
    state: IUser,
    { payload }: { payload: { userID: string; email: string | null } }
) => {
    state.isLoad = true;
    state.isAuth = false;
    state.userID = payload.userID;
    state.email = payload.email || '';
};

const getUserRequestSuccess = (
    state: IUser,
    { payload }: { payload: IUser }
) => {
    return {
        ...state,
        isLoad: false,
        isAuth: true,
        error: '',
        ...payload
    };
};

const getUserRequestFailed = (
    state: IUser,
    { payload }: { payload: string }
) => {
    state.isLoad = false;
    state.isAuth = false;
    state.error = payload;
};

const logoutRequest = (state: IUser) => {
    state.isLoad = true;
};
const logoutRequestSuccess = (state: IUser) => {
    return Object.assign(state, userInit);
};

const logoutRequestFailed = (
    state: IUser,
    { payload }: { payload: string }
) => {
    state.error = payload;
};

export const userSlice = createSlice({
    name: 'userKey',
    initialState: userInit,
    reducers: {
        loginActionRequest: loginRequest,
        loginActionRequestSuccess: loginRequestSuccess,
        loginActionRequestFFailed: loginRequestFailed,
        logoutRequest: logoutRequest,
        logoutRequestSuccess: logoutRequestSuccess,
        logoutRequestFailed: logoutRequestFailed,
        getUserActionRequestFailed: getUserRequestFailed,
        getUserActionRequestSuccess: getUserRequestSuccess,
        getUserActionLaodingRequest: getUserLaodingRequest
    }
});

export const toUserAction = userSlice.actions;
