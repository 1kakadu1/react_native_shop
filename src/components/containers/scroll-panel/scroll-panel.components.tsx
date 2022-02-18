import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    RefreshControl,
    Animated,
    NativeSyntheticEvent,
    NativeScrollEvent
} from 'react-native';
import { IScrollPanelProps } from './scroll-panel.model';
import { stylesScrollPanel } from './scroll-panel.styles';

export const ScrollPanel = ({
    isRefresh,
    onRefresh,
    progressViewOffset = 0,
    children,
    panel,
    heightPanel
}: IScrollPanelProps) => {
    const styles = stylesScrollPanel;
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
                    zIndex: 100,
                    elevation: 40,
                    transform: [{ translateY }]
                }}
            >
                <View style={[{ height: heightPanel }, styles.header]}>
                    {panel()}
                </View>
            </Animated.View>

            <ScrollView
                onScroll={onScroll}
                style={[styles.scrollView, { paddingTop: heightPanel }]}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh || false}
                        onRefresh={onRefresh}
                        progressViewOffset={progressViewOffset}
                    />
                }
            >
                <View style={[{ paddingBottom: heightPanel }]}>{children}</View>
            </ScrollView>
        </View>
    );
};
