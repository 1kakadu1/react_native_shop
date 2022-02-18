import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { IProfileForm } from './profile-fom.model';
import {
    colorsInput,
    stylesProfileForm,
    zoomIn,
    zoomOut
} from './profile-form.styles';
import * as Animatable from 'react-native-animatable';
import { Button, IconButton, TextInput, Snackbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { referenceInput } from './field/field-factory';
import { getkeyLabelField, getUserField } from './profile-form.utils';

export const ProfileForm = ({
    initValue,
    schema,
    fieldName,
    fieldUpdateUser,
    user,
    onStoreUptField,
    fieldSetting,
    onSignOut
}: IProfileForm) => {
    const [isLoad, setLoad] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [infoKey, setInfoKey] = useState<string>('');
    const styles = stylesProfileForm;
    const { t } = useTranslation();
    const key = fieldSetting.type;
    return (
        <View>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    setLoad(true);
                    const param = getUserField(user, fieldSetting.type);
                    const keyLabel = getkeyLabelField(fieldSetting.type);

                    fieldUpdateUser(param, fieldName, values[fieldName])
                        .then(() => {
                            if (fieldSetting.type === 'password') {
                                setTimeout(() => onSignOut(), 2000);
                            } else {
                                onStoreUptField(values[fieldName], fieldName);
                            }
                            setLoad(false);
                            setInfoKey(keyLabel.success);
                            setVisible(true);
                        })
                        .catch(() => {
                            setLoad(false);
                            setInfoKey(keyLabel.error);
                            setVisible(true);
                        });
                }}
                validationSchema={schema}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.form}>
                        {referenceInput[key]({
                            label: fieldSetting.label || '',
                            value: values[fieldName],
                            onChangeReference: handleChange,
                            error: errors[fieldName],
                            touched: touched[fieldName],
                            name: fieldName,
                            isLoad,
                            handleSubmitReference: handleSubmit,
                            defaultValue: initValue[fieldName]
                        })}
                    </View>
                )}
            </Formik>

            <Snackbar
                visible={visible}
                onDismiss={() => {
                    setInfoKey('');
                    setVisible(false);
                }}
                action={{
                    label: 'Ok',
                    onPress: () => {
                        setVisible(false);
                        setInfoKey('');
                    }
                }}
            >
                {infoKey !== '' && t(infoKey)}
            </Snackbar>
        </View>
    );
};
