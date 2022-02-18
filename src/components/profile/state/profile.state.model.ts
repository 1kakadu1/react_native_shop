export interface IProfile {
    orders: any[];
    isAuth: boolean;
    error: string;
    user: IProfileUser;
}

export interface IProfileUser {
    preview?: string;
    email: string;
    phone: string;
    name: string;
    address: string;
    userID: string;
}
