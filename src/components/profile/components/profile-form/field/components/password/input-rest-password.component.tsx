import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { IRefereceInput } from '../../field-factory.model';
import { colorsInput, stylesFactoryForm } from '../../field-factory.styles';

export const InputReasetPassword = (props: IRefereceInput) => {
    const styles = stylesFactoryForm;
    return (
        <View style={styles.formControl}>
            <TextInput
                secureTextEntry={true}
                textAlign="left"
                style={styles.input}
                label={props.label}
                onChangeText={() => {}}
                value={'this passsword'}
                theme={colorsInput}
                disabled={true}
            />
            <Button
                loading={props.isLoad}
                icon="content-save-outline"
                color={'#333939'}
                labelStyle={{ fontSize: 25, marginLeft: '3%' }}
                style={styles.btn}
                onPress={props.handleSubmitReference}
                disabled={props.isLoad}
            >
                <Text style={{ display: 'none', fontSize: 0 }}>text</Text>
            </Button>
        </View>
    );
};
