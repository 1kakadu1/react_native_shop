import { SearchContainer } from './components/search.container';
import { SEARCH_KEY } from './state/search.const';
import { searchSlice } from './state/search.reducer';

export const SearchModule = {
    component: SearchContainer,
    reducer: {
        [SEARCH_KEY]: searchSlice.reducer
    },
    name: SEARCH_KEY
};
