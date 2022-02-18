import React from 'react';
import { IHeaderContainerProps } from './header.mode';
import { useNavigation } from '@react-navigation/native';
import { Header } from './header.component';

export const HeaderPostContainer = ({
    back,
    title,
    icon,
    rightComponent
}: IHeaderContainerProps) => {
    const navigation = useNavigation();
    const onHeaderLeft = () => {
        //@ts-ignore
        return back === true ? navigation.goBack() : navigation.openDrawer();
    };
    const getIcon = back === true ? 'arrow-left' : icon ? icon : 'menu';

    return (
        <Header
            icon={getIcon}
            title={title}
            onHeaderLeft={onHeaderLeft}
            rightComponent={rightComponent}
        />
    );
};
