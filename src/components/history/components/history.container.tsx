import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toHistoryAction } from '../state/history.state.reducer';
import { toHistorySelector } from '../state/history.state.selector';
import { History } from './history.component';

export const HistoryContainer = () => {
    const dispatch = useDispatch();
    const orders = useSelector(toHistorySelector.orders);
    const isLoad = useSelector(toHistorySelector.isLoad);

    useEffect(() => {
        dispatch(toHistoryAction.historyRequest());
    }, []);

    return <History orders={orders} isLoad={isLoad} />;
};
