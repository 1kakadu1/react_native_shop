import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Settigs } from './setting.component';
import { toSettingAction } from './state/setting.reducer';
import { toSettingSelector } from './state/setting.selector';

export const SettigsContainer = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(toSettingSelector.isOpen);
    const onOpen = () => dispatch(toSettingAction.onOpen());
    const onClose = () => dispatch(toSettingAction.onClose());

    return <Settigs onOpen={onOpen} onClose={onClose} isOpen={isOpen} />;
};
