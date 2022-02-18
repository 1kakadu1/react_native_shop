import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { userSingOut, getUser, userSingInRemember } from '../../services/api';
import { toUserAction } from './user.reducer';
import { toUser } from './user.selector';
import { Alert } from 'react-native';

export const userSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toUserAction.loginActionRequest.type),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return userSingInRemember({
                email: toUser.email(state),
                password: toUser.password(state) || ''
            }).pipe(
                map((response) => {
                    if (response.error) {
                        Alert.alert(
                            '',
                            response.error.toString(),
                            [{ text: 'OK' }],
                            { cancelable: false }
                        );
                        return toUserAction.loginActionRequestFFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data) {
                        return toUserAction.loginActionRequestSuccess({
                            ...response.data,
                            email: toUser.email(state)
                        });
                    }

                    return toUserAction.loginActionRequestFFailed(
                        'Data is empty'
                    );
                })
            );
        })
    );

export const userCheckRememberEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toUserAction.getUserActionLaodingRequest),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getUser(toUser.userID(state)).pipe(
                map((response) => {
                    if (response.error) {
                        Alert.alert(
                            '',
                            response.error.toString(),
                            [{ text: 'OK' }],
                            { cancelable: false }
                        );
                        return toUserAction.getUserActionRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data) {
                        return toUserAction.getUserActionRequestSuccess({
                            ...response.data,
                            email: toUser.email(state)
                        });
                    }

                    return toUserAction.getUserActionRequestFailed(
                        'Data is empty'
                    );
                })
            );
        })
    );

export const userLogoutEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toUserAction.logoutRequest),
        switchMap(() => {
            return userSingOut().pipe(
                map((response) => {
                    if (response.error) {
                        Alert.alert(
                            '',
                            response.error.toString(),
                            [{ text: 'OK' }],
                            { cancelable: false }
                        );
                        return toUserAction.logoutRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data === null) {
                        return toUserAction.logoutRequestSuccess();
                    }

                    return toUserAction.logoutRequestFailed('Data is empty');
                })
            );
        })
    );
