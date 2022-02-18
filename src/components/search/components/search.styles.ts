import { StyleSheet } from 'react-native';
import { gray } from '../../../consts/colors.const';
import { windowWidth } from '../../../helpers/functions';

export const stylesSearch = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: gray[30],
        width: '100%',
        bottom: 0,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    loader: {
        position: 'absolute',
        bottom: -20,
        left: 20,
        width: '100%',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'red'
    },
    modal: {
        margin: 0,
        minHeight: Math.round(windowWidth)
    },
    hrWrap: {
        position: 'absolute',
        top: 4,
        width: '100%',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hr: {
        borderRadius: 10,
        width: 230,
        height: 6,
        backgroundColor: gray[50]
    },
    search: {
        padding: 20,
        position: 'relative'
    },
    result: {
        padding: 20
    },
    resultEmpty: {
        flex: 1,
        height: '100%',
        width: ' 100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 42
    }
});
