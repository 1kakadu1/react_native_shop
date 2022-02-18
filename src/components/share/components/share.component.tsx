import * as React from 'react';
import { View, Share as ShareMsg } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, IconButton } from 'react-native-paper';
import { IShare } from '../state/share.model';
import { stylesShare } from './share.styles';

export const Share = ({ uri, message, title }: IShare) => {
    const styles = stylesShare;

    const onShare = async () => {
        try {
            await ShareMsg.share({
                message: uri + '\n' + title + '\n' + message
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <TouchableOpacity onPress={onShare}>
            <IconButton
                icon={'link'}
                color={'#fff'}
                size={20}
                onPress={() => true}
            />
        </TouchableOpacity>
    );
};
