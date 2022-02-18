import React from 'react';
import { View, Text } from 'react-native';
import { stylesCart } from './cart.styles';
import { statusBar } from '../../consts/colors.const';
import { StatusBar } from 'expo-status-bar';
import { CartContainer } from '../../components/cart/cart.container';

export const Cart = () => {
    const styles = stylesCart;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[60]} style="light" />
            <CartContainer />
        </View>
    );
};
