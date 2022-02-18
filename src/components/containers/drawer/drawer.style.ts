import { StyleSheet } from 'react-native';
import { black, primary } from '../../../consts/colors.const';

export const stylesDrawer = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: black[100]
    },
    drawerStyles: { flex: 1, width: '60%', backgroundColor: 'transparent' }
});
