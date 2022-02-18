import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS, SCREENS_STACK } from '../../consts/screens';
import { Products } from './products.component';
import { ProductsPlaceholder } from './products.placeholder';
import { toProductsAction } from './state/products.state.reducer';
import { toProducts } from './state/products.state.selector';

export const ProductsContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector(toProducts.productsList);
    const isLoad = useSelector(toProducts.isLoad);
    const navigaion = useNavigation();
    const currentCat = useSelector(toProducts.currentCat);
    const nav = (id: string) =>
        navigaion.navigate(SCREENS_STACK.modal, {
            screen: SCREENS.postItem,
            params: { id }
        });
    const onRefresh = () => dispatch(toProductsAction.productsRequest());

    useEffect(() => {
        onRefresh();
    }, []);

    useEffect(() => {
        dispatch(toProductsAction.productsRequest());
    }, [currentCat]);

    return !isLoad ? (
        <Products isLoad={isLoad} data={data} onRefresh={onRefresh} nav={nav} />
    ) : (
        <ProductsPlaceholder />
    );
};
