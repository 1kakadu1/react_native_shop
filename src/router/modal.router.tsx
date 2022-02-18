import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Post from '../screen/post/post.component';
import { SCREENS } from '../consts/screens';
import { horizontalAnimation } from '../helpers/screen';
import { Order } from '../screen/order/order.component';
import { HistoryScreen } from '../screen/history/history.component';

const ModalStack = createStackNavigator();

export const ModalScreen = () => {
    return (
        <ModalStack.Navigator
            screenOptions={horizontalAnimation}
            headerMode="none"
            mode="modal"
        >
            <ModalStack.Screen name={SCREENS.postItem} component={Post} />
            <ModalStack.Screen name={SCREENS.order} component={Order} />
            <ModalStack.Screen
                name={SCREENS.history}
                component={HistoryScreen}
            />
        </ModalStack.Navigator>
    );
};
