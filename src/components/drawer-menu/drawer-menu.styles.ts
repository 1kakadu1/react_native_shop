import { size } from 'lodash';
import { Dimensions, StyleSheet } from 'react-native';
import { drawer } from '../../consts/colors.const';
import { sizeOffset } from '../../consts/size';
const width = Dimensions.get('window').width;
export const stylesDrawer = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    drawerItem: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: drawer.text
    },
    menuItem: {
        color: drawer.text,
        fontSize: 14 * sizeOffset()
    },
    caption: {
        fontSize: width * 0.024,
        lineHeight: 14,
        color: drawer.text
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});
