import { IResponse } from '../../../services/api';
import { IUser } from '../../../store/user/user.model';
import { IProfileUser } from '../state/profile.state.model';

export interface IProfileProps {
    user: IProfileUser;
    store: any; //TODO: check type
    fieldUpdateUser: (
        userID: string,
        field: string,
        data: string | []
    ) => Promise<IResponse<{}, string, IUser>>;
    updateProfileField: (data: string | [], field: string) => void;
    onSignOut: () => void;
    goHistory: () => void;
}
