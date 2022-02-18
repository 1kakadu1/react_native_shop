import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { stylesSearchItem } from './search-item.styles';
import { ISearchItemProps } from './search-item.model';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_STACK, SCREENS } from '../../../../consts/screens';
import { getPrice } from '../../../../helpers/cart';
import { text } from '../../../../consts/colors.const';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

export const SearchItem = ({
    title,
    price,
    preview,
    id,
    index,
    size,
    onClose
}: ISearchItemProps) => {
    const styles = stylesSearchItem;
    const navigation = useNavigation();
    const { t } = useTranslation();
    const priceCurrent = getPrice(price, size, size[0]);

    const nav = () =>
        navigation.navigate(SCREENS_STACK.modal, {
            screen: SCREENS.postItem,
            params: { id }
        });

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
                onClose();
                nav();
            }}
        >
            <Animatable.View
                animation={'fadeIn'}
                delay={200 * index}
                style={styles.container}
            >
                <View style={styles.colLeft}>
                    <View style={{ ...styles.preview }}>
                        {preview !== '' && preview ? (
                            <Image
                                style={styles.img}
                                source={{ uri: preview }}
                            />
                        ) : (
                            <Image
                                style={styles.img}
                                source={require('../resources/no-image.jpg')}
                            />
                        )}
                    </View>
                </View>

                <View style={styles.colRight}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>
                        {' '}
                        {t('search.price', { size: size[0] })} {priceCurrent}$
                    </Text>
                    <View style={styles.info}>
                        <Icon
                            style={styles.icon}
                            color={text.title}
                            name={'arrow-top-left-bottom-right-bold'}
                            size={20}
                        />
                        {size.map((item: string) => (
                            <Text style={styles.size} key={item}>
                                {item.toUpperCase()}
                            </Text>
                        ))}
                    </View>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    );
};
