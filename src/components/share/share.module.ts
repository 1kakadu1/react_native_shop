import { ShareContainer } from './components/share.container';
import { SHARE_KEY } from './state/share.const';
import { shareSlice } from './state/share.reducer';

export const ShareModule = {
    component: ShareContainer,
    reducer: {
        [SHARE_KEY]: shareSlice.reducer
    },
    name: SHARE_KEY
};
