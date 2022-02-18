import React from 'react';
import { InputPhone } from '../components/phone/input-phone.component';
import { IRefereceInput } from '../field-factory.model';

export const inputPhoneReference = (props: IRefereceInput) => {
    return <InputPhone {...props} />;
};
