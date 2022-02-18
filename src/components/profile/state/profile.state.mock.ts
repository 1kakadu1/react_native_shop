import { IProfile } from './profile.state.model';

export const profileInit: IProfile = {
    orders: [],
    isAuth: false,
    error: '',
    user: {
        email: '',
        phone: '',
        name: '',
        address: '',
        userID: '',
        preview: undefined
    }
};
