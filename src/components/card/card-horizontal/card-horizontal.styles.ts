import { StyleSheet } from 'react-native';
import {
    black,
    gray,
    primary,
    text,
    write
} from '../../../consts/colors.const';
import { sizeOffset } from '../../../consts/size';

export const stylesCardHorizontal = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: write,
        position: 'relative'
    },
    itemPlaceholderWrap: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    itemPlaceholder: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: write,
        marginBottom: 10
    },
    infoWrap: {
        flex: 1,
        flexDirection: 'column',
        margin: 14,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
    colRight: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    colLeft: {
        flexDirection: 'row',
        flex: 7
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4
    },
    text: {
        color: text.title,
        fontSize: 24 * sizeOffset()
    },
    desc: {
        color: black[60],
        fontSize: 14 * sizeOffset()
    },
    preview: {
        backgroundColor: gray[100],
        width: 124,
        height: 124,
        borderRadius: 12
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },
    size: {
        marginLeft: 6,
        marginRight: 6,
        color: text.title,
        fontSize: 14 * sizeOffset()
    },
    priceWrap: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        fontSize: 22,
        color: primary[1]
    },
    icon: {
        color: text.title
    },
    badgeWrap: {
        position: 'absolute',
        top: 0,
        right: 4
    },
    badgbe: {
        height: 48,
        width: 48
    },
    badgeImg: {
        width: '100%',
        height: '100%'
    },
    badgeText: {
        color: write,
        fontSize: 8,
        fontWeight: 'bold',
        position: 'absolute',
        top: '30%',
        left: '33%'
    }
});
