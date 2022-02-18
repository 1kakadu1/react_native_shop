import { StyleSheet } from 'react-native';
import { black, gray, write } from '../../../consts/colors.const';

export const stylesCardVertical = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: write,
        borderRadius: 6
    },
    preview: {
        backgroundColor: gray[100],
        width: '100%',
        height: 132
    },
    postInfo: {
        padding: 10,
        flexDirection: 'column'
    },
    title: {
        color: black[100],
        fontSize: 24,
        paddingBottom: 6
    },
    desc: {
        color: black[60],
        fontSize: 14
    }
});
