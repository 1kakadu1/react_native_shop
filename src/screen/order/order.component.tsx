import React from 'react';
import { View, Text } from 'react-native';
import { stylesOrder } from './order.styles';
import { statusBar } from '../../consts/colors.const';
import { StatusBar } from 'expo-status-bar';
import { OrderContainer } from '../../components/order/order.container';
import { PostDefault } from '../../components/containers/post/container.component';
import { useTranslation } from 'react-i18next';

const OrderText = () => {
    const styles = stylesOrder;
    const [t] = useTranslation();
    return (
        <View>
            <Text style={styles.text}>{t('order.header.text')}</Text>
        </View>
    );
};

export const Order = () => {
    const styles = stylesOrder;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[60]} style="light" />
            <PostDefault back={true} rightComponent={OrderText}>
                <OrderContainer />
            </PostDefault>
        </View>
    );
};
