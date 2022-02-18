import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { ICardCart } from './card-cart.model';
import { stylesCardCart } from './card-cart.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primary, text } from '../../../consts/colors.const';
import { TextInput } from 'react-native-paper';

export const CardCart = ({
    data,
    height = '100%',
    width = '100%',
    onAdd,
    onSub,
    onLongPress,
    onChangeComments,
    onPress,
    numberOfLines = 3
}: ICardCart) => {
    const styles = stylesCardCart;

    const price =
        typeof data.price === 'number'
            ? data.price
            : data.price[data.productSize];
    return (
        <TouchableOpacity
            onLongPress={() =>
                onLongPress &&
                onLongPress({ id: data.id, size: data.productSize })
            }
            onPress={()=>{
                onPress && onPress(data.id, data.productSize);
            }}
        >
            <View style={[styles.itemRow, { height, width }]}>
                <View style={[styles.item]}>
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
                            <View style={styles.info}>
                                <Icon
                                    style={styles.icon}
                                    color={text.title}
                                    name={'arrow-top-left-bottom-right-bold'}
                                    size={20}
                                />
                                <Text style={styles.size}>
                                    {data.productSize.toUpperCase()} /
                                </Text>
                                <Text style={styles.price}>{price}$</Text>
                            </View>

                            {data.cat && (
                                <View style={styles.info}>
                                    <Icon
                                        style={styles.icon}
                                        color={text.title}
                                        name={'card-text-outline'}
                                        size={20}
                                    />
                                    <Text style={styles.size}>
                                        {data.cat.toUpperCase()}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={styles.colRight}>
                        {onSub && (
                            <TouchableOpacity
                                style={styles.sizeBtn}
                                onPress={() => {
                                    onSub(data, data.productSize);
                                }}
                            >
                                <Text
                                    style={[
                                        styles.counterText,
                                        { color: '#fff' }
                                    ]}
                                >
                                    -
                                </Text>
                            </TouchableOpacity>
                        )}

                        <View style={styles.counter}>
                            <Text style={styles.counterText}>{data.count}</Text>
                        </View>
                        {onAdd && (
                            <TouchableOpacity
                                style={styles.sizeBtn}
                                onPress={() => onAdd(data, data.productSize)}
                            >
                                <Text
                                    style={[
                                        styles.counterText,
                                        { color: '#fff' }
                                    ]}
                                >
                                    +
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <TextInput
                    textAlign="left"
                    style={styles.input}
                    mode={'outlined'}
                    maxLength={120}
                    label="Пожелания"
                    value={data.comments || ''}
                    theme={{
                        colors: {
                            placeholder: '#333939',
                            text: '#333939',
                            primary: '#333939'
                        }
                    }}
                    disabled={!onAdd}
                    onChangeText={(text) => {
                        onChangeComments &&
                            onChangeComments({
                                id: data.id,
                                size: data.productSize,
                                comments: text
                            });
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};
