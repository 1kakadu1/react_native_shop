import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProductsPanel } from './products-panel.component';
import { useDispatch, useSelector } from 'react-redux';
import { toProductsPanelAction } from './state/products-panel.reducer';
import { toProductPanelSelector } from './state/products-panel.selector';

export const ProductsPanelContainer = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const drawerOpen = () => navigation.openDrawer();
    const onOpenSearch = () => dispatch(toProductsPanelAction.onOpenSearch);
    const preview = useSelector(toProductPanelSelector.preview);

    return (
        <ProductsPanel
            drawerOpen={drawerOpen}
            preview={preview}
            onOpenSearch={onOpenSearch}
        />
    );
};
