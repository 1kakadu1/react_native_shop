import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { СatList } from './cat.component';
import { ICatList } from './state/cat.state.model';
import { toCatAction } from './state/cat.state.reducer';

import { toCategorySelector } from './state/cat.state.selector';

export const CatContainer = ({
    stylesContainer
}: {
    stylesContainer: StyleProp<ViewStyle>;
}) => {
    const dispatch = useDispatch();
    const category = useSelector(toCategorySelector.category);
    const currentCat = useSelector(toCategorySelector.currentCat);
    const isLoad = useSelector(toCategorySelector.isLoad);
    const onChangeCat = (value: ICatList) =>
        dispatch(toCatAction.setCat(value));

    return !isLoad === true ? (
        <View style={stylesContainer}>
            <СatList
                currentCat={currentCat}
                cat={category}
                isLoad={isLoad}
                onChangeCat={onChangeCat}
            />
        </View>
    ) : (
        <View style={stylesContainer} />
    );
};
