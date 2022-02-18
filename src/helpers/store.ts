/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AnyAction,
    CombinedState,
    createSelector,
    EnhancedStore,
    OutputSelector
} from '@reduxjs/toolkit';
import { throttle } from 'lodash';

export function createFeatureSelector<TResult>(
    featureName: string
): OutputSelector<Object, TResult, (res: TResult) => TResult> {
    return createSelector(
        (state: any) => state[featureName],
        (feature) => feature
    );
}

export const storeLog = (
    store: EnhancedStore<CombinedState<any>, AnyAction, any[]>,
    keysFull?: string[],
    clear: boolean = false
) => {
    store.subscribe(
        throttle(() => {
            const currentdate = new Date();
            clear && console.clear();
            console.log(
                `******* START store ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}*******`
            );
            if (!keysFull) {
                console.log(`store:`, store.getState());
            }

            if (keysFull) {
                for (let i = 0; i < keysFull.length; i++) {
                    console.log(
                        `${keysFull[i]}:`,
                        store.getState()[keysFull[i]]
                    );
                }
            }
            console.log('*******  END store  *******');
        }, 1000)
    );
};
