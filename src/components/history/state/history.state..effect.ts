import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { toHistoryAction } from './history.state.reducer';
import { getHistory } from '../../../services/api';
import { toProfileSelector } from '../../profile/state/profile.state.selector';

export const setHistoryProducts = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> => {
    return action$.pipe(
        ofType(toHistoryAction.historyRequest.type),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getHistory(toProfileSelector.user(state).userID).pipe(
                map((response) => {
                    if (response.error) {
                        return toHistoryAction.historyRequestFail(
                            response?.error.toString()
                        );
                    }
                    if (response.data) {
                        return toHistoryAction.historyRequestSuccess(
                            response?.data
                        );
                    }
                    return toHistoryAction.historyRequestFail('Data is empty');
                })
            );
        })
    );
};
