import { StyleSheet } from 'react-native';
import { windowWidth } from '../../helpers/functions';
import { primary } from '../../consts/colors.const';
export const stylesAuth = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'column',
        minHeight: Math.round(windowWidth)
    },
    wrapperChildren: {
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255,0.3)'
    },
    inputContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        position: 'relative',
        overflow: 'hidden'
    },
    btnContainer: {
        height: 60,
        backgroundColor: primary[1]
    },
    BgImage: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    footer: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        bottom: 14,
        left: 0,
        alignItems: 'center'
    },
    footerText: {
        color: primary[1],
        fontWeight: '700'
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255,0.3)'
    },
    error: {
        position: 'absolute',
        bottom: -1,
        right: 0
    },
    errorText: {
        color: 'red',
        fontWeight: '700'
    },
    showPassword: {
        position: 'absolute',
        top: '50%',
        right: 0,
        backgroundColor: 'transparent',
        zIndex: 400,
        elevation: 400,
        borderRadius: 100,
        width: 60,
        height: 60
    }
});
