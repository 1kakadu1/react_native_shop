import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { IProductsPanelProps } from './products-panel.model';
import { stylesPrductsPanel } from './products-panel.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import { CatContainer } from '../cat/cat.container';
import { useTranslation } from 'react-i18next';

export const ProductsPanel = ({
    drawerOpen,
    onOpenSearch,
    preview
}: IProductsPanelProps) => {
    const [t] = useTranslation();
    const styles = stylesPrductsPanel;
    return (
        <View style={styles.container}>
            <ImageBackground
                source={
                    preview !== ''
                        ? { uri: preview }
                        : require('./resources/empty.jpg')
                }
                style={styles.image}
            >
                <View style={styles.overlay}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            drawerOpen();
                        }}
                    >
                        <Icon name={'menu'} color={'#fff'} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{t('panel.menu')}</Text>
                    <TouchableOpacity style={styles.btn} onPress={onOpenSearch}>
                        <Icon name={'magnify'} color={'#fff'} size={30} />
                    </TouchableOpacity>
                    <CatContainer stylesContainer={styles.catListWrap} />
                </View>
            </ImageBackground>
        </View>
    );
};
