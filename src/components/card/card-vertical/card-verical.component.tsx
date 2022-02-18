import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { ICardVertical } from './card-vertical.model';
import { stylesCardVertical } from './card-vertical.styles';

export const CardVerical = ({
    data,
    nav,
    height = '100%',
    width = '100%',
    numberOfLines = 3
}: ICardVertical) => {
    const styles = stylesCardVertical;

    return (
        <TouchableOpacity
            style={[{ height, width, padding: 10 }]}
            onPress={() => nav(data.id)}
        >
            <View style={[styles.container]}>
                {data.preview !== '' && data.preview ? (
                    <Image
                        style={styles.preview}
                        source={{ uri: data.preview }}
                    />
                ) : (
                    <Image
                        style={styles.preview}
                        source={require('../resources/no-image.jpg')}
                    />
                )}
                <View style={styles.postInfo}>
                    <TextTicker
                        style={styles.title}
                        loop
                        disabled={data.title.length > 49 ? false : true}
                        repeatSpacer={50}
                        marqueeDelay={1000}
                    >
                        {data.title}
                    </TextTicker>
                    <Text numberOfLines={numberOfLines} style={styles.desc}>
                        {data.desc}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
