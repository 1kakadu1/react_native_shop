import { StyleSheet } from 'react-native';
import { black, gray, primary, write } from '../../consts/colors.const';
import { cartPanel, sizeOffset } from '../../consts/size';

export const stylesCartPanel = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: cartPanel,
        width: '100%',
        backgroundColor: '#191919',
        zIndex: 400,
        borderTopLeftRadius: 14,
        borderTopEndRadius: 14,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center'
    },
    size: {
        flexDirection: 'row'
    },
    sizeBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sizeBtn: {
        position: 'relative',
        width: 40 * sizeOffset(),
        height: 40 * sizeOffset(),
        borderRadius: 40,
        backgroundColor: '#333939',
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12
    },
    sizeLabel: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 10 * sizeOffset(),
        textTransform: 'uppercase'
    },
    sizeBtnActive: {
        backgroundColor: primary[1]
    },
    sizeLabelActive: {
        color: '#191919'
    },
    counter: {
        marginLeft: 3,
        marginRight: 3,
        width: 26 * sizeOffset(),
        height: 26 * sizeOffset(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        color: write,
        fontSize: 16 * sizeOffset(),
        fontWeight: 'bold'
    },
    colLeft: {
        width: '50%'
    },
    colRight: {
        padding: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});
