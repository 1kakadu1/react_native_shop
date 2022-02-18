import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { toSettingAction } from './header.reducer';
export {};
/*
export const userSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(
            toUserAction.loginActionRequest.type,
        ),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return userSingInRemember({email: toUser.email(state), password: toUser.password(state) || ''})
            .pipe(
                map((response) => {
                    if (response.error) {
                        console.log("adaad",response.error)
                        Alert.alert(
                            "",
                            response.error.toString(),
                            [
                              { text: "OK" }
                            ],
                            { cancelable: false }
                          );
                        return toUserAction.loginActionRequestFFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data){
                        return toUserAction.loginActionRequestSuccess(
                            response?.data
                        );
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
            ofType(
                toUserAction.getUserActionLaodingRequest,
            ),
            withLatestFrom(state),
            switchMap(([, state]) => {
                return getUser(toUser.userID(state))
                .pipe(
                    map((response) => {
                        if (response.error) {
                            Alert.alert(
                                "",
                                response.error.toString(),
                                [
                                  { text: "OK" }
                                ],
                                { cancelable: false }
                              );
                            return toUserAction.getUserActionRequestFailed(
                                response.error.toString()
                            );
                        }
    
                        if (response.data){
                            return toUserAction.getUserActionRequestSuccess(
                                response?.data
                            );
                        }
    
                        return toUserAction.getUserActionRequestFailed(
                            'Data is empty'
                        );
                    })
                );
            })
        );
*/
