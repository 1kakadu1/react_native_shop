import { StyleSheet } from 'react-native';
import { black, gray, write } from '../../consts/colors.const';

export const stylesPrductsPanel = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    overlay: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000000a0',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: write
    },
    btn: {
        padding: 10
    },
    catListWrap: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        width: '100%',
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 12
    }
});
