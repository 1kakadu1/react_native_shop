import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { ICardHorizontal } from './card-horizontal.model';
import { stylesCardHorizontal } from './card-horizontal.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { text } from '../../../consts/colors.const';

export const CardHorizontal = ({
    data,
    nav,
    height = '100%',
    width = '100%',
    numberOfLines = 3
}: ICardHorizontal) => {
    const styles = stylesCardHorizontal;
    const price =
        typeof data.price === 'number'
            ? data.price
            : data.price[data.filters.size[0]];
    return (
        <TouchableOpacity onPress={() => nav(data.id)}>
            <View style={[styles.item, { height, width }]}>
                {data.isTop === true ? (
                    <View style={styles.badgeWrap}>
                        <View style={styles.badgbe}>
                            <Image
                                style={styles.badgeImg}
                                source={require('../resources/bookmark.png')}
                            />
                            <Text style={styles.badgeText}>Top</Text>
                        </View>
                    </View>
                ) : null}

                <View style={styles.colLeft}>
                    <View style={{ ...styles.preview }}>
                        {data.preview !== '' && data.preview ? (
                            <Image
                                style={styles.img}
                                source={{ uri: data.preview }}
                            />
                        ) : (
                            <Image
                                style={styles.img}
                                source={require('../resources/no-image.jpg')}
                            />
                        )}
                    </View>
                    <View style={styles.infoWrap}>
                        <TextTicker
                            style={styles.text}
                            loop
                            scrollSpeed={4000}
                            repeatSpacer={50}
                            marqueeDelay={2000}
                        >
                            {data.title}
                        </TextTicker>
                        {data.filters.size && (
                            <View style={styles.info}>
                                <Icon
                                    style={styles.icon}
                                    color={text.title}
                                    name={'arrow-top-left-bottom-right-bold'}
                                    size={20}
                                />
                                {data.filters.size.map((item: string) => (
                                    <Text style={styles.size} key={item}>
                                        {item.toUpperCase()}
                                    </Text>
                                ))}
                            </View>
                        )}

                        <View style={styles.info}>
                            <Icon
                                style={styles.icon}
                                color={text.title}
                                name={'card-text-outline'}
                                size={20}
                            />
                            {data.cat.map((item: string) => (
                                <Text style={styles.size} key={item}>
                                    {item.toUpperCase()}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
                <View style={styles.colRight}>
                    <View style={styles.priceWrap}>
                        <Text style={styles.price}> {price} $</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
