import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { IMenuPanelProps } from './menu-panel.model';
import { stylesMenuPanel } from './menu-panel.styles';

export const MenuPanel = () => {
    const styles = stylesMenuPanel;

    return <View style={styles.container}></View>;
};
