import { StyleSheet } from 'react-native';
import { primary, write } from '../../consts/colors.const';
import Constants from 'expo-constants';

export const stylesHeader = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 74
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    right: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    text: {
        color: write,
        marginLeft: 10,
        fontSize: 14,
        paddingBottom: 4,
        fontWeight: 'bold'
    }
});
