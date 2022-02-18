import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { DrawerContentContainer } from '../../drawer-menu/drawer-menu.container';
import { IDraweProps } from './drawer.model';
import { stylesDrawer } from './drawer.style';

const Drawer = createDrawerNavigator();

export const DrawerScreensNavigator = ({ screenDrawer, name }: IDraweProps) => {
    const styles = stylesDrawer;
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16]
    });
    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return (
        <View style={styles.container}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                drawerContentOptions={{
                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'white',
                    inactiveTintColor: 'white'
                }}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerContent={(props) => {
                    //@ts-ignore
                    setProgress(props.progress);
                    return <DrawerContentContainer {...props} />;
                }}
            >
                <Drawer.Screen name={name}>
                    {(props) =>
                        screenDrawer({ style: animatedStyle, ...props })
                    }
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};
