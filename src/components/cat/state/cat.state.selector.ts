import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { CAT_KEY } from './cat.state.const';
import { ICatData } from './cat.state.model';

export const categorySelector = createFeatureSelector<ICatData>(CAT_KEY);

const category = createSelector(categorySelector, ({ cat }) => cat);

const getCat = (id: string) =>
    createSelector(categorySelector, ({ cat }) => cat.find((x) => x.id === id));

const isLoad = createSelector(categorySelector, ({ isLoad }) => isLoad);

const currentCat = createSelector(
    categorySelector,
    ({ currentCat }) => currentCat
);

export const toCategorySelector = {
    category,
    isLoad,
    getCat,
    categorySelector,
    currentCat
};
