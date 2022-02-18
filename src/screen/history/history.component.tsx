import React from 'react';
import { View, Text } from 'react-native';
import { stylesHistory } from './history.styles';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';
import { PostDefault } from '../../components/containers/post/container.component';
import { CartBtnContainer } from '../../components/cart-btn/cart-brn.container';
import { HistoryContainer } from '../../components/history/components/history.container';

export const HistoryScreen = () => {
    const styles = stylesHistory;
    const [t] = useTranslation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[0]} style="light" />
            <PostDefault
                title={t('history')}
                back
                rightComponent={CartBtnContainer}
            >
                <HistoryContainer />
            </PostDefault>
        </View>
    );
};
