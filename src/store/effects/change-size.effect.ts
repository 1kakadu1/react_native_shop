import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { PayloadAction } from '@reduxjs/toolkit';
import { map } from 'rxjs/operators';
import { toCartPanelAction } from '../../components/cart-panel/state/cart-panel.state.reducer';
import { toPostAction } from '../../components/post-screen/state/post-screen.state.reducer';

export const changeSizeProductEffect = (
    action$: ActionsObservable<PayloadAction<string>>
): Observable<PayloadAction<string>> =>
    action$.pipe(
        ofType(toCartPanelAction.changeSize.type),
        map((action: PayloadAction<string>) => {
            return toPostAction.changeProductSize(action.payload);
        })
    );

export const clearSizeProductEffect = (
    action$: ActionsObservable<PayloadAction>
): Observable<PayloadAction> =>
    action$.pipe(
        ofType(toPostAction.clearProduct.type),
        map(() => {
            return toCartPanelAction.clearSize();
        })
    );
