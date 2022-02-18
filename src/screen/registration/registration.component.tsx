import React, { useRef, useState } from 'react';
import {
    ImageBackground,
    Text,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    Alert
} from 'react-native';

import { Button, Snackbar, TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import { registrationSchema } from './registration.schema';
import {
    colorsInput,
    stylesRegistration,
    zoomIn,
    zoomOut
} from './registration.styles';
import { useTranslation } from 'react-i18next';
import { userCreateWithEmailAndPassword } from '../../services/api';
import { TextInputMask } from 'react-native-masked-text';
import { IRegProps } from './registration.model';

export const Registration = ({ onRedirect }: IRegProps) => {
    const initValue = {
        email: '',
        name: '',
        password: '',
        address: '',
        passwordConfirmation: '',
        phone: '+7'
    };
    const [isLoad, setLoad] = useState(false);
    const [visible, setVisible] = useState(false);
    const styles = stylesRegistration;
    const { t } = useTranslation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar backgroundColor={statusBar.bg[0]} style="light" />
                <ImageBackground
                    source={require('../../../assets/img/bg.jpg')}
                    style={styles.BgImage}
                />

                <Formik
                    initialValues={initValue}
                    onSubmit={(values, { resetForm }) => {
                        setLoad(true);
                        userCreateWithEmailAndPassword({
                            email: values.email,
                            password: values.password,
                            data: {
                                name: values.name,
                                address: values.address,
                                preview: '',
                                orders: [],
                                phone: values.phone
                            }
                        })
                            .toPromise()
                            .then((res) => {
                                setLoad(false);
                                if (!res.data?.newUser && res.error) {
                                    throw new Error(res.error);
                                } else {
                                    setVisible(true);
                                    resetForm();
                                }
                            })
                            .catch((e) => {
                                setLoad(false);
                                setVisible(false);
                                Alert.alert(
                                    'Error',
                                    e.message,
                                    [{ text: 'OK' }],
                                    {
                                        cancelable: false
                                    }
                                );
                            });
                    }}
                    validationSchema={registrationSchema}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        errors,
                        touched
                    }) => (
                        <ScrollView>
                            <View style={styles.form}>
                                <View style={styles.formControl}>
                                    <TextInput
                                        textAlign="left"
                                        style={styles.input}
                                        label={t('label.name') + '*'}
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        theme={colorsInput}
                                        error={
                                            errors.name && touched.name
                                                ? true
                                                : false
                                        }
                                    />
                                    <Animatable.Text
                                        animation={
                                            errors.name && touched.name
                                                ? zoomIn
                                                : zoomOut
                                        }
                                        style={styles.inputError}
                                    >
                                        {t(errors.name || 'error.req')}
                                    </Animatable.Text>
                                </View>
                                <View style={styles.formControl}>
                                    <TextInput
                                        textAlign="left"
                                        style={styles.input}
                                        label={t('label.email') + '*'}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        theme={colorsInput}
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                    />
                                    <Animatable.Text
                                        animation={
                                            errors.email && touched.email
                                                ? zoomIn
                                                : zoomOut
                                        }
                                        style={styles.inputError}
                                    >
                                        {t(errors.email || 'error.email')}
                                    </Animatable.Text>
                                </View>

                                <View style={styles.formControl}>
                                    <TextInput
                                        textAlign="left"
                                        style={styles.input}
                                        label={t('label.address') + '*'}
                                        onChangeText={handleChange('address')}
                                        value={values.address}
                                        theme={colorsInput}
                                        error={
                                            errors.address && touched.address
                                                ? true
                                                : false
                                        }
                                    />
                                    <Animatable.Text
                                        animation={
                                            errors.address && touched.address
                                                ? zoomIn
                                                : zoomOut
                                        }
                                        style={styles.inputError}
                                    >
                                        {t(errors.address || 'error.req')}
                                    </Animatable.Text>
                                </View>

                                <View style={styles.formControl}>
                                    <TextInput
                                        secureTextEntry={true}
                                        textAlign="left"
                                        style={styles.input}
                                        label={t('label.password') + '*'}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        theme={colorsInput}
                                        error={
                                            errors.password && touched.password
                                                ? true
                                                : false
                                        }
                                    />
                                    <Animatable.Text
                                        animation={
                                            errors.password && touched.password
                                                ? zoomIn
                                                : zoomOut
                                        }
                                        style={styles.inputError}
                                    >
                                        {t(errors.password || 'error.req')}
                                    </Animatable.Text>
                                </View>

                                <View style={styles.formControl}>
                                    <TextInput
                                        secureTextEntry={true}
                                        textAlign="left"
                                        style={styles.input}
                                        label={
                                            t('label.passwordConfirmation') +
                                            '*'
                                        }
                                        onChangeText={handleChange(
                                            'passwordConfirmation'
                                        )}
                                        value={values.passwordConfirmation}
                                        theme={colorsInput}
                                        error={
                                            errors.passwordConfirmation &&
                                            touched.passwordConfirmation
                                                ? true
                                                : false
                                        }
                                    />
                                    <Animatable.Text
                                        animation={
                                            errors.passwordConfirmation &&
                                            touched.passwordConfirmation
                                                ? zoomIn
                                                : zoomOut
                                        }
                                        style={styles.inputError}
                                    >
                                        {t(
                                            errors.passwordConfirmation ||
                                                'error.req'
                                        )}
                                    </Animatable.Text>
                                </View>

                                <View style={styles.formControl}>
                                    <TextInput
                                        textAlign="left"
                                        style={[
                                            styles.input,
                                            {
                                                zIndex: 1,
                                                elevation: 1,
                                                position: 'relative'
                                            }
                                        ]}
                                        label={t('label.phone') + '*'}
                                        onChangeText={handleChange('phone')}
                                        value={values.phone}
                                        theme={colorsInput}
                                        error={
                                            errors.phone && touched.phone
                                                ? true
                                                : false
                                        }
                                        render={(props) => (
                                            <TextInputMask
                                                type={'cel-phone'}
                                                style={styles.mask}
                                                options={{
                                                    maskType: 'INTERNATIONAL'
                                                }}
                                                onChangeText={
                                                    props.onChangeText
                                                }
                                                value={props.value}
                                            />
                                        )}
                                    />
                                    <Animatable.Text
                                        animation={
                                            errors.phone && touched.phone
                                                ? zoomIn
                                                : zoomOut
                                        }
                                        style={styles.inputError}
                                    >
                                        {t(errors.phone || 'error.req')}
                                    </Animatable.Text>
                                </View>

                                <Button
                                    loading={isLoad}
                                    icon="send-circle"
                                    color={'#333939'}
                                    style={styles.btn}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.btnText}>
                                        {t('btn.reg')}
                                    </Text>
                                </Button>
                            </View>
                        </ScrollView>
                    )}
                </Formik>

                <Snackbar
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    action={{
                        label: 'Ok',
                        onPress: () => {
                            onRedirect();
                        }
                    }}
                >
                    {t('reg.ok')}
                </Snackbar>
            </View>
        </TouchableWithoutFeedback>
    );
};
