import { StyleSheet } from 'react-native';

export const stylesScrollPanel = StyleSheet.create({
    header: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    },
    scrollView: {
        width: '100%'
    },
    container: {
        maxHeight: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
});
