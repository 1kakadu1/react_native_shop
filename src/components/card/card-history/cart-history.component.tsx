import React from 'react';
import { View, Text } from 'react-native';
import { ICartHistory } from './cart-history.model';
import { stylesCardHistory } from './cart-history.styles';
import { CardCart } from '../card-cart/card-cart.component';
import { useTranslation } from 'react-i18next';
import { SCREENS, SCREENS_STACK } from '../../../consts/screens';
import { useNavigation } from '@react-navigation/native';

export const CardHistory = ({
    data,
    height = '100%',
    width = '100%',
}: ICartHistory) => {
    const styles = stylesCardHistory;
    const {t} = useTranslation();
    const navigaion = useNavigation();
    const nav = (id: string, size?: string) =>
        navigaion.navigate(SCREENS_STACK.modal, {
            screen: SCREENS.postItem,
            params: { id , size}
        });
    return (
        <View>
            <Text  style={[styles.date]}>{t("date")}: {data.date}</Text>

            {data.products.map((item) => (
                <View
                    key={data.id + '-' + item.id}
                    style={{ paddingBottom: 20 }}
                >
                    <CardCart height={height} width={width} data={item} onPress={()=>nav(item.id, item.productSize)} />
                </View>
            ))}
        </View>
    );
};
