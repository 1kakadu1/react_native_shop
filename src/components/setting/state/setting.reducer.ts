import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SETTING_KEY } from './setting.const';
import { settinggInit } from './setting.mock';
import { ISetting } from './setting.model';

const onOpen = (state: ISetting) => {
    state.isOpen = true;
};

const onClose = (state: ISetting) => {
    state.isOpen = false;
};

const onToggle = (state: ISetting, { payload }: { payload: boolean }) => {
    state.isOpen = payload;
};

export const settingSlice = createSlice({
    name: SETTING_KEY,
    initialState: settinggInit,
    reducers: {
        onOpen,
        onClose,
        onToggle
    }
});

export const toSettingAction = settingSlice.actions;
