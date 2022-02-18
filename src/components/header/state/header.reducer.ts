import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HEADER_KEY } from './header.const';
import { settingInit } from './header.mock';
import { IHeader } from './header.model';

const onOpenSetting = (state: IHeader) => {
    state.isOpenSetting = true;
};

const onCloseSetting = (state: IHeader) => {
    state.isOpenSetting = false;
};

const onToggleSetting = (state: IHeader, { payload }: { payload: boolean }) => {
    state.isOpenSetting = payload;
};

export const headerSlice = createSlice({
    name: HEADER_KEY,
    initialState: settingInit,
    reducers: {
        onOpenSetting,
        onCloseSetting,
        onToggleSetting
    }
});

export const toHeaderAction = headerSlice.actions;
