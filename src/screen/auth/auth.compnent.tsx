import React, { useRef, useState } from 'react';
import {
    Animated,
    ImageBackground,
    Text,
    View,
    Image,
    Alert,
    BackHandler,
    TextInput as RNTextInput,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { IError, Validator } from '../../helpers/validator';
import { toUserAction } from '../../store/user/user.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { toUser } from '../../store/user/user.selector';
import { fb } from '../../firebase/firebase';
import { useTranslation } from 'react-i18next';
import { stylesAuth } from './auth.styles';
import { IAnim, IStateForm, IStateInput } from './auth.model';
import { StatusBar } from 'expo-status-bar';
import { primary, statusBar } from '../../consts/colors.const';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SCREENS, SCREENS_STACK } from '../../consts/screens';

//TODO: !!!!change form to Formik+yup!!!!

const validator = new Validator();

export const Auth = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(toUser.isLoad);
    const isAuth = useSelector(toUser.isAuth);
    const [t] = useTranslation();
    const styles = stylesAuth;

    const goHome = () => {
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params: {
                screen: SCREENS.home
            }
        });
    };

    const fadeAnim: IAnim = {
        email: useRef(new Animated.Value(300)).current,
        password: useRef(new Animated.Value(300)).current
    };
    const refEmail = useRef<RNTextInput>(null);
    const refPassword = useRef<RNTextInput>(null);

    const [textEmail, setTextEmail] = useState<IStateInput>({
        value: '',
        valid: true,
        error: '',
        name: 'email',
        keyError: '',
        validation: ['req', 'email'],
        init: false
    });

    const [textPassword, setTextPassword] = useState<IStateInput>({
        value: '',
        valid: true,
        error: '',
        keyError: '',
        name: 'password',
        validation: ['req', 'len:3'],
        init: false
    });

    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const nav = useNavigation();

    function handleBackButtonClick() {
        nav.goBack();
        Keyboard.dismiss();
        refPassword && refPassword.current?.blur();
        refEmail && refEmail.current?.blur();
        return true;
    }
    React.useEffect(() => {
        fb.firebase.auth().onAuthStateChanged(function (user) {
            if (user && !isLoading && !isAuth) {
                dispatch(
                    toUserAction.getUserActionLaodingRequest({
                        userID: user.uid,
                        email: user.email
                    })
                );
                goHome();
            }
        });

        BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButtonClick
        );

        return () =>
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButtonClick
            );
    }, []);

    const setInput = ({
        type,
        value,
        errorList,
        clear = false
    }: {
        type: string;
        value: string;
        errorList?: IError;
        clear?: boolean;
    }) => {
        if (!clear && errorList) {
            switch (type) {
                case 'email':
                    setTextEmail((prevState: any) => {
                        return {
                            ...prevState,
                            value,
                            valid: errorList.valid,
                            keyError: errorList.key,
                            error: t(errorList.key),
                            init: true
                        };
                    });
                    break;
                case 'password':
                    setTextPassword((prevState: any) => {
                        return {
                            ...prevState,
                            value,
                            valid: errorList.valid,
                            keyError: errorList.key,
                            error: t(errorList.key),
                            init: true
                        };
                    });
                    break;
            }

            Animated.timing(fadeAnim[type], {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(fadeAnim[type], {
                toValue: 300,
                duration: 1200,
                useNativeDriver: true
            }).start(() => {
                switch (type) {
                    case 'email':
                        setTextEmail((prevState: any) => {
                            return {
                                ...prevState,
                                valid: true,
                                keyError: '',
                                error: '',
                                init: false
                            };
                        });
                        break;
                    case 'password':
                        setTextPassword((prevState: any) => {
                            return {
                                ...prevState,
                                valid: true,
                                keyError: '',
                                error: '',
                                init: false
                            };
                        });
                        break;
                }
            });
        }
    };

    const handlerInput = (type: string, text: string): void => {
        let inputs: IStateForm = {
            email: { ...textEmail },
            password: { ...textPassword }
        };
        inputs[type].value = text;

        if (inputs[type].value.length > 3) inputs[type].init = true;

        if (inputs[type].init === true) {
            let flagClearError: boolean = false;
            const errorsList = validator.check_valid_input(
                inputs[type].validation,
                inputs[type].value
            );

            for (let i = 0; i < errorsList.length; i++) {
                const item = errorsList[i];

                if (item.valid === false) {
                    // error true
                    flagClearError = false;
                    setInput({ type, value: text, errorList: item });
                    break;
                } else {
                    flagClearError = true;
                }
            }

            if (flagClearError === true) {
                // clear error
                setInput({ type, value: text, clear: true });
            }
        }
    };

    const handlerForm = () => {
        if (textEmail.valid && textPassword.valid) {
            dispatch(
                toUserAction.loginActionRequest({
                    email: textEmail.value,
                    password: textPassword.value
                })
            );
            goHome();
        } else {
            Alert.alert('', t('msg.modal.error'), [{ text: 'OK' }], {
                cancelable: false
            });
        }
    };
    //TODO: add formik (example to order)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar backgroundColor={statusBar.bg[0]} style="light" />
                <ImageBackground
                    source={require('../../../assets/img/bg.jpg')}
                    style={styles.BgImage}
                />

                <View style={styles.wrapperChildren}>
                    <View
                        style={[
                            styles.inputContainer,
                            { alignItems: 'center', paddingBottom: 4 }
                        ]}
                    >
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={require('../../../assets/img/logo.png')}
                        ></Image>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            textAlign="left"
                            ref={refEmail}
                            theme={{
                                colors: {
                                    placeholder: primary[1],
                                    text: primary[1],
                                    primary: primary[1]
                                }
                            }}
                            label={t('email.label')}
                            mode="flat"
                            value={textEmail.value}
                            error={
                                textEmail.init === true
                                    ? !textEmail.valid
                                    : false
                            }
                            style={styles.input}
                            onChangeText={(text) => {
                                setTextEmail({
                                    ...textEmail,
                                    value: text.trim()
                                });
                                handlerInput('email', text.trim());
                            }}
                        />
                        <Animated.View
                            style={[
                                styles.error,
                                { transform: [{ translateX: fadeAnim.email }] }
                            ]}
                        >
                            <Text style={styles.errorText}>
                                {textEmail.error}
                            </Text>
                        </Animated.View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            textAlign="left"
                            ref={refPassword}
                            theme={{
                                colors: {
                                    placeholder: primary[1],
                                    text: primary[1],
                                    primary: primary[1]
                                }
                            }}
                            label={t('password.label')}
                            mode="flat"
                            value={textPassword.value}
                            error={
                                textPassword.init === true
                                    ? !textPassword.valid
                                    : false
                            }
                            style={styles.input}
                            secureTextEntry={!isShowPassword}
                            onChangeText={(text) => {
                                setTextPassword({
                                    ...textPassword,
                                    value: text
                                });
                                handlerInput('password', text);
                            }}
                        />
                        <Button
                            style={styles.showPassword}
                            onPress={() => setShowPassword(!isShowPassword)}
                        >
                            <Icon
                                color={primary[1]}
                                name={!isShowPassword ? 'eye' : 'eye-slash'}
                                size={24}
                            />
                        </Button>
                        <Animated.View
                            style={[
                                styles.error,
                                {
                                    transform: [
                                        { translateX: fadeAnim.password }
                                    ]
                                }
                            ]}
                        >
                            <Text style={styles.errorText}>
                                {textPassword.error}
                            </Text>
                        </Animated.View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Button
                            icon="login"
                            loading={isLoading}
                            mode="contained"
                            contentStyle={styles.btnContainer}
                            onPress={handlerForm}
                        >
                            {t('sing-in')}
                        </Button>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Pizza time</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
