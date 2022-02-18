import { StyleSheet } from 'react-native';
import { primary, write } from '../../../consts/colors.const';

export const stylesProfile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    generalImg: {
        width: '100%',
        height: 200
    },
    header: {
        position: 'relative',
        marginBottom: 66
    },
    navBtn: {
        backgroundColor: primary[1],
        borderRadius: 40
    },
    navBtnExit: {
        position: 'absolute',
        left: 40,
        bottom: -9
    },
    navBtnOrder: {
        position: 'absolute',
        right: 40,
        bottom: -9
    },
    previewWrap: {
        position: 'absolute',
        bottom: -60,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    preview: {
        width: 128,
        height: 128,
        borderRadius: 128,
        borderColor: primary[1],
        borderWidth: 3
    },
    uplodePreview: {
        position: 'absolute',
        top: 6,
        right: 2,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row'
    },
    uplodeIcon: {
        position: 'absolute',
        right: 20,
        top: 10,
        zIndex: 3
    },
    uplodeText: {
        color: write,
        fontWeight: '900'
    },
    uplodeProcent: {
        color: write,
        fontWeight: '900'
    },
    profileInfoList: {
        padding: 10
    },
    profileInfoItem: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileInfoItemIcon: {
        marginRight: 12
    },
    profileInfoItemText: {
        fontWeight: '600',
        fontSize: 18
    }
});
