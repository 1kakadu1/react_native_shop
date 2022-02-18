import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { HeaderContainer } from '../../header/header.container';
import { SettigsContainer } from '../../setting/setting.container';
import { IContanerDefault } from './container.model';
import { stylesContainerDefault } from './container.styles';

export const ContainerDefault = ({
    children,
    back = false,
    title,
    settings
}: IContanerDefault) => {
    const styles = stylesContainerDefault;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderContainer
                    back={back}
                    title={title}
                    showSettings={settings}
                />

                {settings && <SettigsContainer />}

                <View style={styles.main}>{children}</View>
            </View>
        </SafeAreaView>
    );
};
