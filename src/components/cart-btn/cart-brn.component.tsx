import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton, Badge, Text } from 'react-native-paper';
import { write } from '../../consts/colors.const';
import { ICartBtn } from './cart-brn.model';
import { stylesCartBtn } from './cart-brn.styles';

export const CartBtn = ({
    count,
    goCart,
    color = write,
    size = 26,
    icon = 'cart'
}: ICartBtn) => {
    const styles = stylesCartBtn;
    return (
        <TouchableOpacity style={styles.container} onPress={goCart}>
            <Badge style={styles.badge} visible={true} size={16}>
                {count}
            </Badge>
            <IconButton
                icon={icon}
                color={color}
                size={size}
                onPress={() => true}
            />
        </TouchableOpacity>
    );
};
