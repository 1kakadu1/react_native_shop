import React from 'react';
import { InputText } from '../components/text/input-text.component';
import { IRefereceInput } from '../field-factory.model';

export const inputTextReference = (props: IRefereceInput) => {
    return <InputText {...props} />;
};
