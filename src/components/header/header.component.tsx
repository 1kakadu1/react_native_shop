import React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { IHeaderProps } from './header.mode';
import { stylesHeader } from './header.styles';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = ({
    title,
    onSetting,
    onHeaderLeft,
    icon = 'menu'
}: IHeaderProps) => {
    const styles = stylesHeader;

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Action icon={icon} onPress={onHeaderLeft} />
            {title && <Appbar.Content title={title} />}
            {onSetting && (
                <Appbar.Action icon={MORE_ICON} onPress={onSetting} />
            )}
        </Appbar.Header>
    );
};
