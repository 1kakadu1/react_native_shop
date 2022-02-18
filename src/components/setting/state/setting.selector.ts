import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { SETTING_KEY } from './setting.const';
import { ISetting } from './setting.model';

export const userSelector = createFeatureSelector<ISetting>(SETTING_KEY);

const isOpen = createSelector(userSelector, ({ isOpen }) => isOpen);

export const toSettingSelector = { isOpen };
