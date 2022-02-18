import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { PayloadAction } from '@reduxjs/toolkit';
import { map } from 'rxjs/operators';
import { toCatAction } from '../../components/cat/state/cat.state.reducer';
import { toProductsPanelAction } from '../../components/products-panel/state/products-panel.reducer';
import { ICatList } from '../../components/cat/state/cat.state.model';
import { toProductsAction } from '../../components/products/state/products.state.reducer';

export const setCatEffect = (
    action$: ActionsObservable<PayloadAction<ICatList>>
): Observable<PayloadAction<ICatList>> =>
    action$.pipe(
        ofType(toCatAction.setCat.type),
        map((action: PayloadAction<ICatList>) => {
            //toProductsAction.setCurrentCat(action.payload.name)
            return toProductsPanelAction.changeCat(action.payload);
        })
    );

export const setCurrentCatEffect = (
    action$: ActionsObservable<PayloadAction<ICatList>>
): Observable<PayloadAction<string>> =>
    action$.pipe(
        ofType(toCatAction.setCat.type),
        map((action: PayloadAction<ICatList>) => {
            return toProductsAction.setCurrentCat(action.payload.name);
        })
    );

export const initCatEffect = (
    action$: ActionsObservable<PayloadAction<ICatList[]>>
): Observable<PayloadAction<ICatList[]>> =>
    action$.pipe(
        ofType(toCatAction.catRequestSuccess.type),
        map((action: PayloadAction<ICatList[]>) => {
            return toProductsPanelAction.setInitCat(action.payload);
        })
    );
