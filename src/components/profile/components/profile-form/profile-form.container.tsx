import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS, SCREENS_STACK } from '../../../../consts/screens';
import {
    resetPassworProfileUser,
    updateFieldUser
} from '../../../../services/api';
import { toUserAction } from '../../../../store/user/user.reducer';
import { toProfileAction } from '../../state/profile.state.reducer';
import { toProfileSelector } from '../../state/profile.state.selector';
import { IProfileFormContainer } from './profile-fom.model';
import { ProfileForm } from './profile-form.component';

export const ProfileFormContainer = ({
    schema,
    initValue,
    fieldName,
    fieldSetting
}: IProfileFormContainer) => {
    const dispatch = useDispatch();
    const fieldUpdateUser = (
        userID: string,
        field: string,
        data: string | []
    ) => {
        switch (fieldSetting.type) {
            case 'password':
                return resetPassworProfileUser(userID).toPromise();
            default:
                return updateFieldUser(userID, field, data).toPromise();
        }
    };

    const user = useSelector(toProfileSelector.user);
    const updateProfileField = (data: string | [], field: string) =>
        dispatch(toProfileAction.updateProfile({ data, field }));
    const nav = useNavigation();
    const goHome = () => {
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params: {
                screen: SCREENS.home
            }
        });
    };
    const onSignOut = () => {
        dispatch(toUserAction.logoutRequest());
        goHome();
    };
    return (
        <ProfileForm
            user={user}
            schema={schema}
            fieldName={fieldName}
            initValue={initValue}
            onStoreUptField={updateProfileField}
            fieldUpdateUser={fieldUpdateUser}
            fieldSetting={{ ...fieldSetting }}
            onSignOut={onSignOut}
        />
    );
};
