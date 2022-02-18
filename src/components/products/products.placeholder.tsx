import React from 'react';
import { View } from 'react-native';

import { styleFlatlistpanel } from './products.styles';
import Constants from 'expo-constants';

import { ProductsPanelContainer } from '../products-panel/products-panel.container';
import {
    CardHorizontalPlaceholder,
    RenderItem
} from '../card/card-horizontal/card-horizontal.placeholder';

export const ProductsPlaceholder = () => {
    const styles = styleFlatlistpanel;

    return (
        <View style={styles.container}>
            <View
                style={[
                    {
                        height: 120 + Constants.statusBarHeight,
                        backgroundColor: 'blue'
                    }
                ]}
            >
                <ProductsPanelContainer />
            </View>

            <View style={{ margin: 10 }}>
                <CardHorizontalPlaceholder count={6} />
            </View>
        </View>
    );
};
