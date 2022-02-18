import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { IHeaderProps } from './header.mode';
import { stylesHeader } from './header.styles';
import { IconButton } from 'react-native-paper';
import { write } from '../../consts/colors.const';

export const Header = ({
    title,
    onHeaderLeft,
    icon = 'menu',
    rightComponent
}: IHeaderProps) => {
    const styles = stylesHeader;

    return (
        <View style={styles.header}>
            <ImageBackground
                source={require('./resources/header3.png')}
                style={styles.image}
            >
                <View style={styles.container}>
                    <View style={styles.left}>
                        <IconButton
                            icon={icon}
                            color={write}
                            size={30}
                            onPress={onHeaderLeft}
                        />
                        {title && <Text style={styles.text}>{title}</Text>}
                    </View>
                    <View style={styles.right}>
                        {rightComponent && rightComponent({})}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
