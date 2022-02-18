import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    View,
    Text,
    FlatList,
    Image,
    RefreshControl,
    Animated,
    NativeSyntheticEvent,
    NativeScrollEvent
} from 'react-native';
import { IProductsProps } from './products.model';
import {
    styleFlatlistpanel,
    stylesFlatListEmpty,
    stylesFlatListSeporator
} from './products.styles';
import Constants from 'expo-constants';
import { CardHorizontal } from '../card/card-horizontal/card-horizontal.component';
import { ProductsPanelContainer } from '../products-panel/products-panel.container';

const renderSeparatorDefault = () => (
    <View style={stylesFlatListSeporator.seporator} />
);

const listEmptyComponentDefault = () => {
    const styles = stylesFlatListEmpty;
    const [t] = useTranslation();

    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('./resources/empty.png')}
            />
            <Text style={styles.text}>{t('page.post.empty')}</Text>
        </View>
    );
};

export const Products = ({ onRefresh, data, nav, isLoad }: IProductsProps) => {
    const styles = styleFlatlistpanel;
    const heightPanel = 120 + Constants.statusBarHeight;
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, heightPanel);
    const translateY = diffClamp.interpolate({
        inputRange: [0, heightPanel],
        outputRange: [0, heightPanel * -1]
    });

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollY.setValue(e.nativeEvent.contentOffset.y);
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    zIndex: 100000,
                    elevation: 40000,
                    transform: [{ translateY }]
                }}
            >
                <View
                    style={[
                        { height: heightPanel, backgroundColor: 'blue' },
                        styles.header
                    ]}
                >
                    <ProductsPanelContainer />
                </View>
            </Animated.View>
            <View style={{ margin: 10 }}>
                <Animated.View
                    style={[
                        styles.header,
                        {
                            backgroundColor: 'red',
                            height: heightPanel - Constants.statusBarHeight - 5,
                            width: '100%',
                            transform: [{ translateY }]
                        }
                    ]}
                ></Animated.View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.scrollView,
                        { marginTop: heightPanel, paddingBottom: heightPanel }
                    ]}
                    onScroll={onScroll}
                    refreshControl={
                        <RefreshControl
                            progressViewOffset={
                                heightPanel + Constants.statusBarHeight
                            }
                            refreshing={isLoad}
                            onRefresh={onRefresh}
                        />
                    }
                    data={data}
                    renderItem={({ item }) => (
                        <CardHorizontal data={item} height={124} nav={nav} />
                    )}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={listEmptyComponentDefault}
                    ItemSeparatorComponent={renderSeparatorDefault}
                />
            </View>
        </View>
    );
};
