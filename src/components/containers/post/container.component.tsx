import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { HeaderPostContainer } from '../../header-post/header.container';
import { IContanerDefault } from './container.model';
import { stylesContainerDefault } from './container.styles';

export const PostDefault = ({
    children,
    back = false,
    title,
    rightComponent
}: IContanerDefault) => {
    const styles = stylesContainerDefault;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderPostContainer
                    back={back}
                    title={title}
                    rightComponent={rightComponent}
                />

                <View style={styles.main}>{children}</View>
            </View>
        </SafeAreaView>
    );
};
