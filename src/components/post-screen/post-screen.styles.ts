import { StyleSheet } from 'react-native';
import { gray, primary, write } from '../../consts/colors.const';
import { cartPanel } from '../../consts/size';

export const stylesPostItem = StyleSheet.create({
    container: {
        maxHeight: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scrollView: {
        width: '100%',
        marginBottom: cartPanel
    },
    snackbar: {
        position: 'absolute',
        bottom: 10
    },
    section1: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        position: 'relative'
    },
    preview: {
        width: '100%',
        height: 320,
        borderRadius: 20
    },
    desc: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    descText: {
        color: gray[110]
    },
    info: {
        paddingLeft: 20,
        flex: 1
    },
    infoText: {
        paddingBottom: 12
    },
    wrapper: {
        height: 300
    },
    slide: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    },
    activeDot: {
        backgroundColor: primary[1]
    },
    text: {
        color: gray[110],
        fontSize: 30,
        fontWeight: 'bold'
    },
    h1: {
        padding: 20,
        fontSize: 28,
        color: gray[110],
        fontWeight: 'bold'
    },
    titleWrap: {
        paddingLeft: 20,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    badgeWrap: {
        position: 'absolute',
        top: 20,
        right: 26,
        zIndex: 2
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
    },
    catItem: {
        marginRight: 6,
        backgroundColor: primary[1],
        paddingBottom: 6,
        paddingTop: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 16
    },
    catText: {
        color: write,
        fontSize: 12
    },
    catList: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'nowrap'
    },
    titleLeft: {
        flex: 5
    },
    titleRight: {
        flex: 1
    },
    priceWrap: {
        backgroundColor: primary[1],
        paddingBottom: 16,
        paddingTop: 16,
        paddingLeft: 10,
        paddingRight: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    price: {
        color: write,
        fontWeight: 'bold'
    }
});
