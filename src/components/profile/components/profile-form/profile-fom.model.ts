import { SchemaOf } from 'yup';
import { IResponse } from '../../../../services/api';
import { IUser } from '../../../../store/user/user.model';
import { IProfileUser } from '../../state/profile.state.model';
import { referenceType } from './field/field-factory.model';

export interface IProfileForm {
    initValue: { [key: string]: string };
    schema: SchemaOf<any>;
    fieldName: string;
    fieldUpdateUser: (
        userID: string,
        field: string,
        data: string | []
    ) => Promise<IResponse<{}, string, IUser>>;
    user: IProfileUser;
    onStoreUptField: (data: string | [], field: string) => void;
    fieldSetting: {
        type: referenceType;
        label?: string;
        secureTextEntry?: boolean;
    };
    onSignOut: () => void;
}

export interface IProfileFormContainer {
    schema: SchemaOf<any>;
    initValue: { [key: string]: string };
    fieldName: string;
    fieldSetting: {
        type: referenceType;
        label?: string;
    };
}
