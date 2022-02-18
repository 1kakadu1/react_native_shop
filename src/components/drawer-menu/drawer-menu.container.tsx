import {
    DrawerContentComponentProps,
    DrawerContentOptions
} from '@react-navigation/drawer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toUserAction } from '../../store/user/user.reducer';
import { toUser } from '../../store/user/user.selector';
import { toProfileSelector } from '../profile/state/profile.state.selector';
import DrawerContent from './drawer-menu';

export const DrawerContentContainer = (
    props: DrawerContentComponentProps<DrawerContentOptions>
) => {
    const user = useSelector(toProfileSelector.user);
    const isLoad = useSelector(toUser.isLoad);
    const isAuth = useSelector(toUser.isAuth);

    const dispatch = useDispatch();
    const onSignOut = () => dispatch(toUserAction.logoutRequest());

    return (
        <DrawerContent
            email={user.email}
            name={user.name}
            isAuth={isAuth || false}
            preview={user.preview}
            isLoad={isLoad || false}
            onSignOut={onSignOut}
            drawerProps={props}
        />
    );
};
