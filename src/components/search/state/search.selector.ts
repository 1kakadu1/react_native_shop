import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { SEARCH_KEY } from './search.const';
import { ISearch } from './search.model';

export const userSelector = createFeatureSelector<ISearch>(SEARCH_KEY);

const isOpen = createSelector(userSelector, ({ isOpen }) => isOpen);

const query = createSelector(userSelector, ({ query }) => query);

const result = createSelector(userSelector, ({ result }) => result);

const isLoad = createSelector(userSelector, ({ isLoad }) => isLoad);

export const toSearchSelector = { isOpen, query, result, isLoad };
