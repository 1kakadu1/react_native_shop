import { StyleSheet } from 'react-native';
import { windowWidth } from '../../helpers/functions';
import { primary } from '../../consts/colors.const';
import Constants from 'expo-constants';

export const stylesRegistration = StyleSheet.create({
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
    form: {
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        flex: 1,
        justifyContent: 'center',
        padding: 32,
        margin: 20,
        marginTop: 20 + Constants.statusBarHeight
    },
    formControl: {
        position: 'relative',
        paddingBottom: 32
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        textAlign: 'left'
    },
    inputError: {
        color: 'red',
        fontSize: 16,
        position: 'absolute',
        right: 0,
        bottom: 6
    },
    btn: {
        backgroundColor: primary[1],
        color: '#333939'
    },
    btnText: {
        color: '#333939'
    },
    mask: {
        position: 'absolute',
        left: 8,
        bottom: 8,
        zIndex: 2,
        elevation: 2,
        width: '100%'
    }
});

export const colorsInput = {
    colors: {
        placeholder: '#333939',
        text: '#333939',
        primary: '#333939'
    }
};

export const zoomOut = {
    0: {
        opacity: 1,
        scale: 1
    },
    0.5: {
        opacity: 1,
        scale: 0.3
    },
    1: {
        opacity: 0,
        scale: 0
    }
};

export const zoomIn = {
    0: {
        opacity: 1,
        scale: 0
    },
    0.5: {
        opacity: 1,
        scale: 0.3
    },
    1: {
        opacity: 1,
        scale: 1
    }
};
