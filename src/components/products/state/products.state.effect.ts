import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { getProducts } from '../../../services/api';
import { toProductsAction } from './products.state.reducer';
import { toProducts } from './products.state.selector';

export const productsSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(toProductsAction.productsRequest.type),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getProducts(toProducts.currentCat(state)).pipe(
                map((response) => {
                    if (response.error) {
                        return toProductsAction.productsRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data) {
                        return toProductsAction.productsRequestSuccess(
                            response?.data
                        );
                    }

                    return toProductsAction.productsRequestFailed(
                        'Data is empty'
                    );
                })
            );
        })
    );
