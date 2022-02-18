import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom, throttleTime } from 'rxjs/operators';
import { asyncScheduler, Observable } from 'rxjs';

import { toSearchAction } from './search.reducer';
import { getSearch } from '../../../services/api';
import { toSearchSelector } from './search.selector';

export const searchSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toSearchAction.searchRequest.type),
        throttleTime(1000, asyncScheduler, { leading: false, trailing: true }),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getSearch(toSearchSelector.query(state)).pipe(
                map((response) => {
                    if (response.error) {
                        return toSearchAction.searchRequestFailed(
                            response?.error.toString()
                        );
                    }
                    if (response.data) {
                        return toSearchAction.searchRequestSuccess(
                            response?.data
                        );
                    }
                    return toSearchAction.searchRequestFailed('Data is empty');
                })
            );
        })
    );
