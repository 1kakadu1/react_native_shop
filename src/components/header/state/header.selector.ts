import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { HEADER_KEY } from './header.const';
import { IHeader } from './header.model';

export const userSelector = createFeatureSelector<IHeader>(HEADER_KEY);

const isOpenSetting = createSelector(
    userSelector,
    ({ isOpenSetting }) => isOpenSetting
);

export const toHeader = { isOpenSetting };
