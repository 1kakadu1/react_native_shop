import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../helpers/store';
import { IUser } from './user.model';

export const userSelector = createFeatureSelector<IUser>('userKey');

const name = createSelector(userSelector, ({ name }) => name);

const isLoad = createSelector(userSelector, ({ isLoad }) => isLoad);

const isAuth = createSelector(userSelector, ({ isAuth }) => isAuth);

const email = createSelector(userSelector, ({ email }) => email);

const password = createSelector(userSelector, ({ password }) => password);

const userID = createSelector(userSelector, ({ userID }) => userID);

const preview = createSelector(userSelector, ({ preview }) => preview);

const phone = createSelector(userSelector, ({ phone }) => phone);

const address = createSelector(userSelector, ({ address }) => address);

export const toUser = {
    name,
    isLoad,
    isAuth,
    password,
    preview,
    phone,
    userID,
    email,
    address,
    userFull: userSelector
};
