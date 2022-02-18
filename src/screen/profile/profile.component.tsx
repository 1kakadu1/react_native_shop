import React from 'react';
import { View, Text } from 'react-native';
import { stylesPost } from './profile.styles';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';
import { PostDefault } from '../../components/containers/post/container.component';
import { ProfileModule } from '../../components/profile/profile.module';
import { CartBtnContainer } from '../../components/cart-btn/cart-brn.container';

export const Profile = () => {
    const styles = stylesPost;
    const [t] = useTranslation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[0]} style="light" />
            <PostDefault
                title={t('user.profile')}
                rightComponent={CartBtnContainer}
            >
                <ProfileModule.component />
            </PostDefault>
        </View>
    );
};
