import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICatProps } from './cat.model';
import { styleCat } from './cat.styles';

export const СatList = ({ cat, currentCat, onChangeCat }: ICatProps) => {
    const styles = styleCat;
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            {cat.map((item) => (
                <TouchableOpacity
                    style={[
                        styles.btn,
                        currentCat === item.name ? styles.btnActive : {}
                    ]}
                    key={item.id}
                    onPress={() => onChangeCat(item)}
                >
                    <Text style={styles.text}>{t(`cat.${item.name}`)}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};
