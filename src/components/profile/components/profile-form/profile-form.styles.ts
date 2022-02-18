import { primary } from '../../../../consts/colors.const';
import { StyleSheet } from 'react-native';

export const stylesProfileForm = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {},
    formControl: {
        position: 'relative',
        paddingBottom: 32,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    input: {
        width: '80%',
        textAlign: 'left'
    },
    inputError: {
        color: 'red',
        fontSize: 16,
        position: 'absolute',
        left: 0,
        bottom: 6
    },
    btn: {
        backgroundColor: primary[1],
        color: '#333939',
        width: '15%',
        marginLeft: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    },
    btnText: {
        color: '#333939'
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
