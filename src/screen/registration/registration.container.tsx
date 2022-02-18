import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SCREENS, SCREENS_STACK } from '../../consts/screens';
import { Registration } from './registration.component';

export const RegistrationContainer = () => {
    const nav = useNavigation();
    const goAuth = () => {
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params: {
                screen: SCREENS.auth
            }
        });
    };
    return <Registration onRedirect={goAuth} />;
};
