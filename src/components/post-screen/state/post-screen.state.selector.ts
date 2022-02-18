import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { POST_KEY } from './post-screen.state.const';
import { IPost } from './post-screen.state.model';

export const postSelector = createFeatureSelector<IPost>(POST_KEY);

const size = createSelector(postSelector, ({ size }) => size);

const id = createSelector(postSelector, ({ id }) => id);

const post = createSelector(postSelector, ({ post }) => post);

const isLoad = createSelector(postSelector, ({ isLoad }) => isLoad);

const isRefresh = createSelector(postSelector, ({ isRefresh }) => isRefresh);

export const toPostSelector = { size, isRefresh, isLoad, post, id };
