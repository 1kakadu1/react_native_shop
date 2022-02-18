import { StyleSheet } from 'react-native';

export const styleFlatlistpanel = StyleSheet.create({
    header: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 10000,
        elevation: 4000,
        overflow: 'hidden'
    },
    scrollView: {
        width: '100%'
    },
    container: {
        maxHeight: '100%',
        height: '100%',
        width: '100%',
        flex: 1,
        position: 'relative'
    }
});

export const stylesFlatListSeporator = StyleSheet.create({
    seporator: {
        height: 10
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
