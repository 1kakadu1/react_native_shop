import { StyleSheet } from 'react-native';
import { primary, write } from '../../consts/colors.const';
import { heightScreen, sizeOffset } from '../../consts/size';

export const stylesFlatListSeparator = StyleSheet.create({
    separator: {
        height: 10
    }
});

export const stylesCart = StyleSheet.create({
    scrollView: {
        width: '100%',
        paddingBottom: 120
    },
    navBtnWrap: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row'
    },
    navBtn: {
        backgroundColor: primary[1],
        borderRadius: 40
    },
    container: {
        margin: 10,
        position: 'relative',
        paddingBottom: 80
    },
    imageHeader: {
        width: '100%',
        height: 120,
        position: 'relative'
    },
    textHeader: {
        color: write,
        fontWeight: 'bold',
        position: 'absolute',
        top: '40%',
        right: 16 * sizeOffset(),
        fontSize: 18 * sizeOffset(),
        fontStyle: 'italic',
        width: '55%'
    },
    emptyWrap: {
        height: heightScreen - 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyImg: {
        width: 200 * sizeOffset(),
        height: 200 * sizeOffset()
    },
    emptyLink: {
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        color: primary[1]
    }
});
