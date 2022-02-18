import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS_STACK, SCREENS } from '../../consts/screens';
import { getCounterCounter, getTotalPrice } from '../../helpers/cart';
import { Cart } from './cart.component';
import { ICartComments, ICartItem } from './state/cart.state.model';
import { toCartAction } from './state/cart.state.reducer';
import { toCartSelector } from './state/cart.state.selector';

export const CartContainer = () => {
    const nav = useNavigation();
    const cart = useSelector(toCartSelector.cart);

    const dispatch = useDispatch();
    const onAdd = (item: ICartItem, size: string) =>
        dispatch(toCartAction.add({ prod: item, size }));
    const onSub = (item: ICartItem, size: string) =>
        dispatch(toCartAction.sub({ prod: item, size }));

    const goProducts = () => {
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params: {
                screen: SCREENS.home
            }
        });
    };

    const goOrder = () => {
        nav.navigate(SCREENS_STACK.modal, {
            screen: SCREENS.order
        });
    };

    const onClear = () => dispatch(toCartAction.clear());
    const onRemove = (value: { id: string; size: string }) =>
        dispatch(toCartAction.remove(value));
    const onChangeComments = (value: ICartComments) =>
        dispatch(toCartAction.changeComments(value));

    return (
        <Cart
            cart={cart}
            onAdd={onAdd}
            onSub={onSub}
            count={getCounterCounter(cart, 'productCount') as number}
            goProducts={goProducts}
            goOrder={goOrder}
            onClear={onClear}
            totalPrice={getTotalPrice(cart)}
            onRemove={onRemove}
            onChangeComments={onChangeComments}
        />
    );
};
