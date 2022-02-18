import { StyleSheet } from 'react-native';
import { primary, write } from '../../consts/colors.const';

export const styleCat = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: write
    },
    btn: {
        marginLeft: 10,
        marginRight: 10
    },
    btnActive: {
        borderBottomColor: primary[1],
        borderBottomWidth: 2
    }
});
