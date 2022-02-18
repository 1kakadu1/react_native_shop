import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from './search.component';
import { toSearchAction } from '../state/search.reducer';
import { toSearchSelector } from '../state/search.selector';
import { sizeOffset } from '../../../consts/size';

export const SearchContainer = () => {
    const isOpen = useSelector(toSearchSelector.isOpen);
    const query = useSelector(toSearchSelector.query);
    const result = useSelector(toSearchSelector.result);
    const isLoad = useSelector(toSearchSelector.isLoad);

    const dispatch = useDispatch();
    const onClose = () => dispatch(toSearchAction.onClose());
    const onChangeSearch = (text: string) =>
        dispatch(toSearchAction.onChangeSearch(text));

    useEffect(() => {
        if (query.length > 3) {
            dispatch(toSearchAction.searchRequest());
        }

        if (query === '' || query.length === 0) {
            dispatch(toSearchAction.clearSearchResult());
        }
    }, [query]);

    return (
        <Search
            height={560 * sizeOffset()}
            query={query}
            result={result}
            onChangeSearch={onChangeSearch}
            isOpen={isOpen}
            onClose={onClose}
            isLoad={isLoad}
        />
    );
};
