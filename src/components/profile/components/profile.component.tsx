import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform, Alert, ScrollView } from 'react-native';
import { IProfileProps } from './profile.model';
import { stylesProfile } from './profile.styles';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUriFileInfo } from '../../../helpers/functions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primary, write } from '../../../consts/colors.const';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'react-native-paper';
import { sizeOffset } from '../../../consts/size';
import * as Animatable from 'react-native-animatable';
import { ProfileFormContainer } from './profile-form/profile-form.container';
import {
    profileAddressSchema,
    profileNameSchema,
    profilePasswordSchema,
    profilePhoneSchema
} from './profile.shema';

export const Profile = ({
    user,
    store,
    fieldUpdateUser,
    updateProfileField,
    onSignOut,
    goHistory
}: IProfileProps) => {
    const styles = stylesProfile;
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [uplodeProgress, setUplodeProgress] = useState<number | undefined>(
        undefined
    );
    const { t } = useTranslation();
    const preview =
        selectedImage !== ''
            ? { uri: selectedImage }
            : user.preview && user.preview !== ''
            ? { uri: user.preview }
            : require('../../../../assets/img/pizza.jpg');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            setSelectedImage(result.uri);
            uplodeImage(result.uri);
        }
    };

    const uplodeImage = async (uri: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const filename = getUriFileInfo(uri).filename;

        if (
            (blob.size < 5242880 && blob.type === 'image/png') ||
            blob.type === 'image/jpg' ||
            blob.type === 'image/jpeg'
        ) {
            const uploadTask = store
                .child(`images/users/${filename}`)
                .put(blob);

            uploadTask.on(
                'state_changed',
                (snapshot: {
                    bytesTransferred: number;
                    totalBytes: number;
                }) => {
                    setUplodeProgress(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (error: string) => {
                    Alert.alert('', error.toString(), [{ text: 'OK' }], {
                        cancelable: false
                    });
                    setUplodeProgress(undefined);
                    setSelectedImage('');
                },
                () => {
                    uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL: string) => {
                            setUplodeProgress(undefined);
                            fieldUpdateUser(
                                user.userID,
                                'preview',
                                downloadURL
                            ).then(() => {
                                updateProfileField(downloadURL, 'preview');
                                setSelectedImage('');
                                setUplodeProgress(undefined);
                            });
                        });
                }
            );
        } else {
            Alert.alert('', 'Ошибка при обработке файла', [{ text: 'OK' }], {
                cancelable: false
            });
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.generalImg}
                    source={require('./resources/profile-img.jpg')}
                />
                {uplodeProgress !== undefined ? (
                    <View style={styles.uplodePreview}>
                        <Text style={styles.uplodeText}>Uplode image: </Text>
                        <Text style={styles.uplodeProcent}>
                            {Math.ceil(uplodeProgress).toString()}%
                        </Text>
                    </View>
                ) : null}
                <View style={styles.previewWrap}>
                    <TouchableOpacity
                        onPress={() => !uplodeProgress && pickImage()}
                    >
                        <Icon
                            name="cloud-download"
                            style={styles.uplodeIcon}
                            color={write}
                            size={20}
                        />
                        <Image style={styles.preview} source={preview} />
                    </TouchableOpacity>

                    <Animatable.View
                        style={[styles.navBtn, styles.navBtnExit]}
                        animation={'fadeIn'}
                        delay={600}
                    >
                        <IconButton
                            style={styles.navBtn}
                            icon={'exit-to-app'}
                            color={'#fff'}
                            size={28 * sizeOffset()}
                            onPress={onSignOut}
                        />
                    </Animatable.View>
                    <Animatable.View
                        style={[styles.navBtn, styles.navBtnOrder]}
                        animation={'fadeIn'}
                        delay={600}
                    >
                        <IconButton
                            style={styles.navBtn}
                            icon={'history'}
                            color={'#fff'}
                            size={28 * sizeOffset()}
                            onPress={goHistory}
                        />
                    </Animatable.View>
                </View>
            </View>
            <ScrollView style={{ overflow: 'hidden' }}>
                <View style={styles.profileInfoList}>
                    <View style={styles.profileInfoItem}>
                        <Icon
                            name="account-circle"
                            style={styles.profileInfoItemIcon}
                            color={primary[1]}
                            size={20}
                        />
                        <Text style={styles.profileInfoItemText}>
                            {t('user.name')}: {user.name}
                        </Text>
                    </View>
                    <View style={styles.profileInfoItem}>
                        <Icon
                            name="cellphone"
                            style={styles.profileInfoItemIcon}
                            color={primary[1]}
                            size={20}
                        />
                        <Text style={styles.profileInfoItemText}>
                            {t('user.phone')}: {user.phone}
                        </Text>
                    </View>
                    <View style={styles.profileInfoItem}>
                        <Icon
                            name="google-maps"
                            style={styles.profileInfoItemIcon}
                            color={primary[1]}
                            size={20}
                        />
                        <Text style={styles.profileInfoItemText}>
                            {t('user.address')}: {user.address}
                        </Text>
                    </View>
                    <View style={styles.profileInfoItem}>
                        <Icon
                            name="at"
                            style={styles.profileInfoItemIcon}
                            color={primary[1]}
                            size={20}
                        />
                        <Text style={styles.profileInfoItemText}>
                            {t('user.email')}: {user.email}
                        </Text>
                    </View>
                </View>

                <View style={styles.profileInfoList}>
                    <Text>{t('profile.change')}:</Text>

                    <ProfileFormContainer
                        fieldName={'name'}
                        initValue={{ name: user.name }}
                        schema={profileNameSchema}
                        fieldSetting={{
                            label: t('label.name'),
                            type: 'text'
                        }}
                    />

                    <ProfileFormContainer
                        fieldName={'address'}
                        initValue={{ address: user.address }}
                        schema={profileAddressSchema}
                        fieldSetting={{
                            label: t('label.address'),
                            type: 'text'
                        }}
                    />

                    <ProfileFormContainer
                        fieldName={'password'}
                        initValue={{ password: 'this password' }}
                        schema={profilePasswordSchema}
                        fieldSetting={{
                            label: t('label.reset.password'),
                            type: 'password'
                        }}
                    />

                    <ProfileFormContainer
                        fieldName={'phone'}
                        initValue={{ phone: user.phone }}
                        schema={profilePhoneSchema}
                        fieldSetting={{
                            label: t('label.phone'),
                            type: 'phone'
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
