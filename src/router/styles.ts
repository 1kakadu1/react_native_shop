import { StyleSheet } from 'react-native';
import { primary } from '../consts/colors.const';

export const stylesDrawerRoute = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: primary[1],
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 1.0,
        shadowRadius: 10.32,
        elevation: 30,
        zIndex: 33,
        backgroundColor: primary[1]
    }
});
