import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styleFlatlistpanel = StyleSheet.create({
    header: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: Constants.statusBarHeight
    },
    scrollView: {
        width: '100%'
    },
    container: {
        maxHeight: '100%',
        height: '100%',
        width: '100%',
        flex: 1
    }
});

export const stylesFlatListEmpty = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img: {
        height: 242,
        width: 242
    },
    text: {
        fontWeight: 'bold',
        fontSize: 22
    }
});

export const stylesFlatListSeporator = StyleSheet.create({
    seporator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE'
    }
});
