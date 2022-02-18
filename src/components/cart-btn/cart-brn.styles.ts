import { StyleSheet } from 'react-native';
import { primary } from '../../consts/colors.const';

export const stylesCartBtn = StyleSheet.create({
    container: {
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 2,
        backgroundColor: primary[1]
    }
});
