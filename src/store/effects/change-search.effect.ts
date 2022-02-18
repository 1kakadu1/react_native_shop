import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { PayloadAction } from '@reduxjs/toolkit';
import { map } from 'rxjs/operators';
import { toProductsPanelAction } from '../../components/products-panel/state/products-panel.reducer';
import { toSearchAction } from '../../components/search/state/search.reducer';

export const setOpenSearchEffect = (
    action$: ActionsObservable<PayloadAction>
): Observable<PayloadAction> =>
    action$.pipe(
        ofType(toProductsPanelAction.onOpenSearch.type),
        map(() => {
            return toSearchAction.onOpen();
        })
    );

export const setCloseSearchEffect = (
    action$: ActionsObservable<PayloadAction>
): Observable<PayloadAction> =>
    action$.pipe(
        ofType(toSearchAction.onClose.type),
        map(() => {
            return toProductsPanelAction.onCloseSearch();
        })
    );
