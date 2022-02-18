import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { stylesDrawer } from './drawer-menu.styles';
import { IDrawerContent } from './drawer-menu.model';
import { SCREENS_STACK, SCREENS } from '../../consts/screens';
import { useTranslation } from 'react-i18next';
import { drawer } from '../../consts/colors.const';

export default function DrawerContent({
    email,
    name,
    isAuth,
    isLoad,
    preview,
    onSignOut,
    drawerProps
}: IDrawerContent) {
    const styles = stylesDrawer;
    const [t] = useTranslation();
    const singOutBtn = () => {
        return (
            <DrawerItem
                style={styles.drawerItem}
                icon={({ size }) => (
                    <Icon name="exit-to-app" color={drawer.text} size={size} />
                )}
                label={() => (
                    <Text style={styles.menuItem}>{t('sing-out')}</Text>
                )}
                onPress={onSignOut}
            />
        );
    };
    const singInBtn = () => {
        return (
            <DrawerItem
                style={styles.drawerItem}
                icon={({ size }) => (
                    <Icon name="login" color={drawer.text} size={size} />
                )}
                label={() => (
                    <Text style={styles.menuItem}>{t('sing-in')}</Text>
                )}
                onPress={() => {
                    drawerProps.navigation.navigate(SCREENS_STACK.drawer, {
                        screen: SCREENS_STACK.drawlerChild,
                        params: {
                            screen: SCREENS.auth
                        }
                    });
                }}
            />
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...drawerProps}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                style={{ backgroundColor: '#fff' }}
                                source={
                                    preview !== '' && preview
                                        ? { uri: preview }
                                        : require('../../../assets/img/pizza.jpg')
                                }
                                size={50}
                            />
                            <View
                                style={{
                                    marginLeft: 15,
                                    flexDirection: 'column'
                                }}
                            >
                                <Title style={styles.title}>
                                    {name !== '' ? name : t('not.acc.title')}
                                </Title>
                                <Caption style={styles.caption}>
                                    {email !== '' ? email : t('not.acc.desc')}
                                </Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="home-outline"
                                    color={drawer.text}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <Text style={styles.menuItem}>
                                    {t('menu.home')}
                                </Text>
                            )}
                            onPress={() => {
                                drawerProps.navigation.navigate(
                                    SCREENS_STACK.drawer,
                                    {
                                        screen: SCREENS_STACK.drawlerChild,
                                        params: {
                                            screen: SCREENS.home
                                        }
                                    }
                                );
                            }}
                        />
                        {!isAuth && (
                            <DrawerItem
                                icon={({ size }) => (
                                    <Icon
                                        name="account-circle-outline"
                                        color={drawer.text}
                                        size={size}
                                    />
                                )}
                                label={() => (
                                    <Text style={styles.menuItem}>
                                        {t('reg')}
                                    </Text>
                                )}
                                onPress={() => {
                                    drawerProps.navigation.navigate(
                                        SCREENS_STACK.drawer,
                                        {
                                            screen: SCREENS_STACK.drawlerChild,
                                            params: {
                                                screen: SCREENS.registration
                                            }
                                        }
                                    );
                                }}
                            />
                        )}

                        {isAuth && (
                            <DrawerItem
                                icon={({ size }) => (
                                    <Icon
                                        name="account-circle-outline"
                                        color={drawer.text}
                                        size={size}
                                    />
                                )}
                                label={() => (
                                    <Text style={styles.menuItem}>
                                        {t('user.profile')}
                                    </Text>
                                )}
                                onPress={() => {
                                    drawerProps.navigation.navigate(
                                        SCREENS_STACK.drawer,
                                        {
                                            screen: SCREENS_STACK.drawlerChild,
                                            params: {
                                                screen: SCREENS.user
                                            }
                                        }
                                    );
                                }}
                            />
                        )}

                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="cart"
                                    color={drawer.text}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <Text style={styles.menuItem}>
                                    {t('menu.cart')}
                                </Text>
                            )}
                            onPress={() => {
                                drawerProps.navigation.navigate(
                                    SCREENS_STACK.drawer,
                                    {
                                        screen: SCREENS_STACK.drawlerChild,
                                        params: {
                                            screen: SCREENS.cart
                                        }
                                    }
                                );
                            }}
                        />
                        {/*<DrawerItem
                            icon={({ size}) => (
                                <Icon 
                                name="information-outline" 
                                color={drawer.text}
                                size={size}
                                />
                            )}
                            label={()=> <Text style={styles.menuItem}>{t("menu.about")}</Text>}
                            onPress={() => {
                                drawerProps.navigation.navigate(SCREENS_STACK.drawer, {
                                    screen: SCREENS_STACK.drawlerChild,
                                    params:{
                                        screen: SCREENS.about,
                                    }
                                })
                            }}
                        /> */}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section>
                {isAuth === true ? singOutBtn() : singInBtn()}
            </Drawer.Section>
        </View>
    );
}
