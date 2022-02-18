import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { SHARE_KEY } from './share.const';
import { IShare } from './share.model';

export const userSelector = createFeatureSelector<IShare>(SHARE_KEY);

const uri = createSelector(userSelector, ({ uri }) => uri);

const title = createSelector(userSelector, ({ title }) => title);

const message = createSelector(userSelector, ({ message }) => message);

export const toShareSelector = { uri, title, message };
