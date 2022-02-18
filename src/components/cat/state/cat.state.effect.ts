import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { getCatList } from '../../../services/api';
import { toCatAction } from './cat.state.reducer';

export const catSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toCatAction.catRequest.type),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getCatList().pipe(
                map((response) => {
                    if (response.error) {
                        return toCatAction.catRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data) {
                        return toCatAction.catRequestSuccess(response?.data);
                    }

                    return toCatAction.catRequestFailed('Data is empty');
                })
            );
        })
    );
