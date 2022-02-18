import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { IModalProps } from './modal.model';
import { stylesModal } from './modal.styles';

export const ModalWindow = ({ btn, children, btnProps }: IModalProps) => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const hideModal = () => setVisible(false);
    const styles = stylesModal;

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={styles.container}
                >
                    {children}
                </Modal>
            </Portal>
            {btn({
                onPress: showModal,
                label: btnProps?.label || '',
                icon: btnProps?.icon,
                small: btnProps?.small,
                onLongPress: btnProps?.onLongPress
            })}
        </View>
    );
};
