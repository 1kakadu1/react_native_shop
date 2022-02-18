import { HistoryContainer } from './components/history.container';
import { HISTORY_KEY } from './state/history.state.const';
import { historySlice } from './state/history.state.reducer';

export const HistoryModule = {
    component: HistoryContainer,
    reducer: {
        [HISTORY_KEY]: historySlice.reducer
    },
    name: HISTORY_KEY
};
