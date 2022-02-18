import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { HISTORY_KEY } from './history.state.const';
import { IHistory } from './history.state.model';

export const userSelector = createFeatureSelector<IHistory>(HISTORY_KEY);

const isLoad = createSelector(userSelector, ({ isLoad }) => isLoad);

const orders = createSelector(userSelector, ({ orders }) => orders);

const error = createSelector(userSelector, ({ error }) => error);

export const toHistorySelector = { orders, error, isLoad };
