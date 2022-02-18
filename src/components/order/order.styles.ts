import { StyleSheet } from 'react-native';
import { primary } from '../../consts/colors.const';
export const stylesOrder = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        padding: 32
    },
    formControl: {
        position: 'relative',
        paddingBottom: 32
    },
    datetime: {
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(255,255,255,0.7)',
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    datetimeIcon: {
        position: 'absolute',
        right: 4,
        zIndex: 4
    },
    datetimeText: {
        color: '#333939'
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
