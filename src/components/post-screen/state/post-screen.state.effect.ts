import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { toPostAction } from './post-screen.state.reducer';
import { getProductsById } from '../../../services/api';
import { toPostSelector } from './post-screen.state.selector';

export const postSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toPostAction.postRequest.type),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getProductsById(toPostSelector.id(state)).pipe(
                map((response) => {
                    if (response.error) {
                        return toPostAction.postRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data) {
                        return toPostAction.postRequestSuccess(response?.data);
                    }

                    return toPostAction.postRequestFailed('Data is empty');
                })
            );
        })
    );

export const postRefreshSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toPostAction.postRefreshRequest.type),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getProductsById(toPostSelector.id(state)).pipe(
                map((response) => {
                    if (response.error) {
                        return toPostAction.postRefreshRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data) {
                        return toPostAction.postRefreshRequestSuccess(
                            response?.data
                        );
                    }

                    return toPostAction.postRefreshRequestFailed(
                        'Data is empty'
                    );
                })
            );
        })
    );
