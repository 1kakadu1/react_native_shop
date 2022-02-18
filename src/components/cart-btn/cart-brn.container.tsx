import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { SCREENS_STACK, SCREENS } from '../../consts/screens';
import { getCounterCounter } from '../../helpers/cart';
import { dd } from '../../helpers/functions';
import { toCartSelector } from '../cart/state/cart.state.selector';
import { CartBtn } from './cart-brn.component';
import { ICartBtnContainerProps } from './cart-brn.model';

export const CartBtnContainer = ({ icon = 'cart' }: ICartBtnContainerProps) => {
    const nav = useNavigation();
    const cart = useSelector(toCartSelector.cart);

    const goCart = () => {
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params: {
                screen: SCREENS.cart
            }
        });
    };

    return (
        <CartBtn
            count={getCounterCounter(cart, 'productCount') as number}
            goCart={goCart}
            icon={icon}
        />
    );
};
