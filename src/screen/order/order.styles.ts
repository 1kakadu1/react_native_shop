import { StyleSheet } from 'react-native';
import { gray, write } from '../../consts/colors.const';
export const stylesOrder = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: gray[30]
    },
    text: {
        color: write,
        fontSize: 16,
        paddingRight: 12,
        paddingBottom: 6,
        fontWeight: 'bold'
    }
});
