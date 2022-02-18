import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import Home from '../screen/home/home.component';
import About from '../screen/about/about.component';
import { SCREENS, SCREENS_STACK } from '../consts/screens';
import { stylesDrawerRoute } from './styles';
import { DrawerScreensNavigator } from '../components/containers/drawer/drawer.component';
import { Auth } from '../screen/auth/auth.compnent';
import { Cart } from '../screen/cart/cart.component';
import { RegistrationContainer } from '../screen/registration/registration.container';
import { Profile } from '../screen/profile/profile.component';
import { useSelector } from 'react-redux';
import { toUser } from '../store/user/user.selector';

const Stack = createStackNavigator();

const DrawerScreens = ({ style }: { style: any }) => {
    const styles = stylesDrawerRoute;
    const isAuth = useSelector(toUser.isAuth);
    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                initialRouteName={SCREENS.home}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={SCREENS.home} component={Home} />
                {!isAuth && (
                    <Stack.Screen name={SCREENS.auth} component={Auth} />
                )}
                {!isAuth && (
                    <Stack.Screen
                        name={SCREENS.registration}
                        component={RegistrationContainer}
                    />
                )}

                <Stack.Screen name={SCREENS.about} component={About} />
                {isAuth && (
                    <Stack.Screen name={SCREENS.user} component={Profile} />
                )}
                <Stack.Screen name={SCREENS.cart} component={Cart} />
            </Stack.Navigator>
        </Animated.View>
    );
};

export const DrawerInit = () => {
    return (
        <DrawerScreensNavigator
            name={SCREENS_STACK.drawlerChild}
            screenDrawer={DrawerScreens}
        />
    );
};
