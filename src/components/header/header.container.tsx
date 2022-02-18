import React from 'react';
import { IHeaderContainerProps } from './header.mode';
import { useNavigation } from '@react-navigation/native';
import { Header } from './header.component';
import { useDispatch } from 'react-redux';
import { toHeaderAction } from './state/header.reducer';

export const HeaderContainer = ({
    back,
    title,
    icon,
    showSettings
}: IHeaderContainerProps) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onOpenSetting = showSettings
        ? () => dispatch(toHeaderAction.onOpenSetting())
        : undefined;
    const onHeaderLeft = () => {
        return back === true ? navigation.goBack() : navigation.openDrawer();
    };
    const getIcon = back === true ? 'arrow-left' : icon ? icon : 'menu';

    return (
        <Header
            icon={getIcon}
            title={title}
            onSetting={onOpenSetting}
            onHeaderLeft={onHeaderLeft}
        />
    );
};
