import { Dimensions, StyleSheet } from 'react-native';
import { primary, text, write } from '../../../../consts/colors.const';

const widthScreen = Dimensions.get('window').width;

const sizeOffset = () => {
    if (widthScreen < 340) {
        return 0.8;
    }

    return 1;
};

export const stylesSearchItem = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: write
    },
    wrapper: {
        marginBottom: 12
    },
    preview: {
        borderRadius: 10,
        width: 100,
        height: 100
    },
    img: {
        borderRadius: 10,
        width: '100%',
        height: '100%'
    },
    colLeft: {
        width: 100
    },
    colRight: {
        width: '100%',
        marginLeft: 16,
        justifyContent: 'center'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4
    },
    icon: {
        color: text.title
    },
    size: {
        marginLeft: 6,
        marginRight: 6,
        color: text.title,
        fontSize: 14 * sizeOffset()
    },
    title: {
        color: text.title,
        fontSize: 20 * sizeOffset()
    },
    price: {
        fontSize: 18 * sizeOffset(),
        color: primary[1]
    }
});
