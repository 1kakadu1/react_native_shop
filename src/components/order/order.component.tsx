import React, { useState } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import { colorsInput, stylesOrder, zoomIn, zoomOut } from './order.styles';
import { Formik } from 'formik';
import { Button, IconButton, TextInput, Snackbar } from 'react-native-paper';
import { orderSchema } from './order.schema';
import { useTranslation } from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IOrderForm, IOrderProps } from './order.model';
import { datetimeSplit, dd } from '../../helpers/functions';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

export const Order = ({
    cart,
    user,
    sendOrder,
    goHome,
    onClear
}: IOrderProps) => {
    const styles = stylesOrder;
    const { t } = useTranslation();
    const initValue: IOrderForm = {
        email: user.email,
        name: user.name,
        address: user.address,
        comments: '',
        date: new Date()
    };
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isLoad, setLoad] = useState(false);
    const currentDateTime = new Date();

    const offsetDate = new Date();
    offsetDate.setDate(currentDateTime.getDate() + 4);
    offsetDate.setHours(currentDateTime.getHours() + 1);

    // TODO: move to helpers
    const getDate = (datetime: Date) => {
        const date = datetimeSplit(datetime);
        return `${date.day < 10 ? 0 : ''}${date.day}.${
            date.month + 1 < 10 ? 0 : ''
        }${date.month + 1} ${date.hours < 10 ? 0 : ''}${date.hours}:${
            date.min < 10 ? 0 : ''
        }${date.min}`;
    };

    return (
        <ImageBackground
            source={require('./resources/order.png')}
            style={styles.container}
        >
            <Formik
                initialValues={initValue}
                onSubmit={(values, { resetForm }) => {
                    setLoad(true);
                    const val = { ...values, userID: user.userID };
                    sendOrder(val, cart, 'key')
                        .then(() => {
                            setVisible(true);
                            setLoad(false);
                            onClear();
                            resetForm();
                            return true;
                        })
                        .catch((e) => {
                            setLoad(false);
                            Alert.alert('Error', e, [{ text: 'OK' }], {
                                cancelable: false
                            });
                        });
                }}
                validationSchema={orderSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    setFieldValue,
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
                                <Button
                                    style={styles.datetime}
                                    onPress={() => {
                                        setShowDate(true);
                                    }}
                                >
                                    <Text style={styles.datetimeText}>
                                        {' '}
                                        {t('cart.order')} {getDate(values.date)}{' '}
                                    </Text>
                                </Button>
                                <IconButton
                                    style={styles.datetimeIcon}
                                    icon={'calendar-month'}
                                    color={'#333939'}
                                    size={30}
                                    onPress={() => {
                                        setShowDate(true);
                                    }}
                                />

                                {showDate && (
                                    <DateTimePicker
                                        testID="date"
                                        value={values.date}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => {
                                            setShowDate(false);
                                            if (selectedDate && event) {
                                                setFieldValue(
                                                    'date',
                                                    Date.parse(
                                                        selectedDate.toString()
                                                    )
                                                );
                                                setShowTime(true);
                                            }
                                        }}
                                        maximumDate={offsetDate}
                                        minimumDate={currentDateTime}
                                    />
                                )}

                                {showTime && (
                                    <DateTimePicker
                                        testID="time"
                                        value={values.date}
                                        mode={'time'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => {
                                            setShowTime(false);
                                            if (selectedDate && event) {
                                                setFieldValue(
                                                    'date',
                                                    Date.parse(
                                                        selectedDate.toString()
                                                    )
                                                );
                                            }
                                        }}
                                        maximumDate={offsetDate}
                                        minimumDate={currentDateTime}
                                    />
                                )}
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
                                    textAlign="left"
                                    style={styles.input}
                                    label={t('label.comments')}
                                    onChangeText={handleChange('comments')}
                                    theme={colorsInput}
                                    value={values.comments}
                                />
                            </View>
                            <Button
                                loading={isLoad}
                                icon="send-circle"
                                color={'#333939'}
                                style={styles.btn}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.btnText}>
                                    {t('btn.send')}
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
                        goHome();
                    }
                }}
            >
                {t('order.send')}
            </Snackbar>
        </ImageBackground>
    );
};
