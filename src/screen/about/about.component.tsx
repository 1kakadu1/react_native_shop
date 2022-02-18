import React from 'react';
import { View, Text } from 'react-native';
import { ContainerDefault } from '../../components/containers/default/container.component';
import { stylesPost } from './about.styles';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';

const About = () => {
    const styles = stylesPost;
    const [t] = useTranslation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[0]} style="light" />
            <ContainerDefault title={t('about')} settings={false}>
                <View>
                    <Text>About</Text>
                </View>
            </ContainerDefault>
        </View>
    );
};

export default About;
