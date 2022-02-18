import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PROFILE_KEY } from './profile.state.const';
import { profileInit } from './profile.state.mock';
import { IProfile, IProfileUser } from './profile.state.model';

export const profileSlice = createSlice({
    name: PROFILE_KEY,
    initialState: profileInit,
    reducers: {
        setProfile: (
            state: IProfile,
            { payload }: { payload: IProfileUser }
        ) => {
            return {
                ...state,
                isAuth: true,
                user: { ...payload }
            };
        },
        outProfile: () => {
            return {
                isAuth: false,
                orders: [],
                error: '',
                user: {
                    ...profileInit.user
                }
            };
        },
        updateProfile: (
            state: IProfile,
            { payload }: { payload: { data: string | []; field: string } }
        ) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    [payload.field]: payload.data
                }
            };
        }
    }
});

export const toProfileAction = { ...profileSlice.actions };
