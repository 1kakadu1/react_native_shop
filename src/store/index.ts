import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { sliceKeys, slices } from './slices';
import rootEpic from './epics';
import logger from 'redux-logger';
import { throttle } from 'lodash';
import { storeLog } from '../helpers/store';
import { toCatAction } from '../components/cat/state/cat.state.reducer';
import { widthScreen } from '../consts/size';

const middlewareArr: any = [];

if (process.env.NODE_ENV === `development`) {
    //middlewareArr.push(logger)
}

const epicMiddleware = createEpicMiddleware({
    dependencies: {
        //storage: localStorage,
        location: window.location
    }
});

const createRootReducer = () =>
    combineReducers({
        ...slices
    });

export const store = configureStore({
    reducer: createRootReducer(),
    middleware: [epicMiddleware, ...middlewareArr, ...getDefaultMiddleware()]
});

if (process.env.NODE_ENV === `development`) {
    //storeLog(store, [sliceKeys[8]])
}

epicMiddleware.run(rootEpic);

store.dispatch(toCatAction.catRequest());
