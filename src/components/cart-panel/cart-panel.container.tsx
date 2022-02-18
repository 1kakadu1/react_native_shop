import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dd } from '../../helpers/functions';
import { ICartItemProps } from '../cart/cart.model';
import { ICartItem } from '../cart/state/cart.state.model';
import { toCartAction } from '../cart/state/cart.state.reducer';
import { CartPanel } from './cart-panel.component';
import { toCartPanelAction } from './state/cart-panel.state.reducer';
import { toCartPanelSelector } from './state/cart-panel.state.selector';

export const CartPanelContainer = ({ item }: { item: ICartItemProps }) => {
    const dispatch = useDispatch();
    const onAdd = (item: ICartItem, size: string) =>
        dispatch(toCartAction.add({ prod: item, size }));
    const onSub = (item: ICartItem) =>
        dispatch(toCartAction.sub({ prod: item, size }));
    const onSize = (size: string) =>
        dispatch(toCartPanelAction.changeSize(size));
    const size = useSelector(toCartPanelSelector.size);

    React.useEffect(() => {
        onSize(item.filters.size[0]);
    }, []);

    return (
        <CartPanel
            item={item}
            size={size}
            onAdd={onAdd}
            onSub={onSub}
            onSize={onSize}
        />
    );
};
