import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { ISetting } from './setting.model';
import { stylesSettingMenu } from './setting.styles';

export const Settigs = ({ onClose, onOpen, isOpen }: ISetting) => {
    const styles = stylesSettingMenu;
    return (
        <View style={styles.container}>
            <Menu
                style={styles.menu}
                visible={isOpen}
                onDismiss={onClose}
                anchor={<Button onPress={onOpen}>Show menu</Button>}
            >
                <Menu.Item
                    onPress={() => {
                        onClose();
                    }}
                    title="Закрыть"
                />
                <Divider />
                <Menu.Item
                    onPress={() => {
                        onClose();
                    }}
                    title="Изменить"
                />
                <Divider />
            </Menu>
        </View>
    );
};
