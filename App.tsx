import 'react-native-gesture-handler';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import './src/i18n/i18n';
import { store } from './src/store';
import { Router } from './src/router/route';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = (message: any) => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
