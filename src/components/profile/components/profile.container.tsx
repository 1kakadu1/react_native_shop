import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS, SCREENS_STACK } from '../../../consts/screens';
import { fb } from '../../../firebase/firebase';
import { updateFieldUser } from '../../../services/api';
import { toUserAction } from '../../../store/user/user.reducer';
import { toProfileAction } from '../state/profile.state.reducer';
import { toProfileSelector } from '../state/profile.state.selector';
import { Profile } from './profile.component';
import { useNavigation } from '@react-navigation/native';

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const user = useSelector(toProfileSelector.user);
    const store = fb.store().ref();
    const fieldUpdateUser = (
        userID: string,
        field: string,
        data: string | []
    ) => updateFieldUser(userID, field, data).toPromise();
    const updateProfileField = (data: string | [], field: string) =>
        dispatch(toProfileAction.updateProfile({ data, field }));
    const goHome = () => {
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params: {
                screen: SCREENS.home
            }
        });
    };
    const goHistory = () => {
        nav.navigate(SCREENS_STACK.modal, {
            screen: SCREENS.history,
            params: {}
        });
    };
    const onSignOut = () => {
        dispatch(toUserAction.logoutRequest());
        goHome();
    };

    return (
        store && (
            <Profile
                user={user}
                store={store}
                fieldUpdateUser={fieldUpdateUser}
                updateProfileField={updateProfileField}
                onSignOut={onSignOut}
                goHistory={goHistory}
            />
        )
    );
};
