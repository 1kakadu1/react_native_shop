import * as React from 'react';
import { FAB } from 'react-native-paper';
import { IFabProps } from './fab.model';
import { stylesFab } from './fab.styles';

export const Fab = ({
    onPress,
    icon = 'plus',
    small = false,
    disabled = false,
    visible = true,
    onLongPress
}: IFabProps) => {
    const styles = stylesFab;

    return (
        <FAB
            style={styles.fab}
            small={small}
            icon={icon}
            disabled={disabled}
            visible={visible}
            onPress={onPress}
            onLongPress={onLongPress}
        />
    );
};
