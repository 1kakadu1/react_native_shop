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
import { IFlatlistPanelProps } from './flatlist-panel.model';
import {
    styleFlatlistpanel,
    stylesFlatListEmpty,
    stylesFlatListSeporator
} from './flatlist-panel.styles';
import Constants from 'expo-constants';

const renderSeparatorDefalt = () => (
    <View style={stylesFlatListSeporator.seporator} />
);

const listEmptyComponentDefalt = () => {
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

export const FlatlistPanel = ({
    isRefresh,
    onRefresh,
    progressViewOffset = 0,
    panel,
    heightPanel,
    listEmptyComponent,
    renderSeparator,
    renderItem,
    data
}: IFlatlistPanelProps) => {
    const styles = styleFlatlistpanel;
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, heightPanel);
    const translateY = diffClamp.interpolate({
        inputRange: [0, heightPanel],
        outputRange: [0, heightPanel * -1]
    });

    const flatlistEmptyComponent = listEmptyComponent
        ? listEmptyComponent
        : listEmptyComponentDefalt;
    const flatlistRenderSeparator = renderSeparator
        ? renderSeparator
        : renderSeparatorDefalt;
    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollY.setValue(e.nativeEvent.contentOffset.y);
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    zIndex: 100,
                    elevation: 40,
                    transform: [{ translateY }]
                }}
            >
                <View style={[{ height: heightPanel }, styles.header]}>
                    {panel()}
                </View>
            </Animated.View>
            <FlatList
                contentContainerStyle={[
                    styles.scrollView,
                    {
                        width: '100%',
                        paddingTop: heightPanel + Constants.statusBarHeight
                    }
                ]}
                onScroll={onScroll}
                refreshControl={
                    <RefreshControl
                        progressViewOffset={
                            progressViewOffset + Constants.statusBarHeight
                        }
                        refreshing={isRefresh || false}
                        onRefresh={onRefresh}
                    />
                }
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item: any) => item + '-key'}
                ListEmptyComponent={flatlistEmptyComponent}
                ItemSeparatorComponent={flatlistRenderSeparator}
            />
        </View>
    );
};
