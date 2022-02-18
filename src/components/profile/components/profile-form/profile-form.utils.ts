import { IProfileUser } from '../../state/profile.state.model';

export const getUserField = (user: IProfileUser, filed?: string) => {
    switch (filed) {
        case 'password':
            return user.email;
        default:
            return user.userID;
    }
};
interface IKeyLabel {
    error: string;
    success: string;
}
export const getkeyLabelField = (filed?: string): IKeyLabel => {
    switch (filed) {
        case 'password':
            return {
                error: 'profile.reset.error',
                success: 'profile.reset.success'
            };
        default:
            return {
                error: 'profile.save.error',
                success: 'profile.save.success'
            };
    }
};
