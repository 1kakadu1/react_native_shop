import React from 'react';
import { InputReasetPassword } from '../components/password/input-rest-password.component';
import { IRefereceInput } from '../field-factory.model';

export const inputResetPasswordReference = (props: IRefereceInput) => {
    return <InputReasetPassword {...props} />;
};
