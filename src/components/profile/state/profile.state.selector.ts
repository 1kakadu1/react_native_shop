import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../helpers/store';
import { PROFILE_KEY } from './profile.state.const';
import { IProfile } from './profile.state.model';

export const userSelector = createFeatureSelector<IProfile>(PROFILE_KEY);

const isAuth = createSelector(userSelector, ({ isAuth }) => isAuth);

const orders = createSelector(userSelector, ({ orders }) => orders);

const error = createSelector(userSelector, ({ error }) => error);

const user = createSelector(userSelector, ({ user }) => user);

export const toProfileSelector = { isAuth, orders, error, user };
