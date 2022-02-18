export interface IUser {
    email: string;
    name: string;
    userID?: string;
    isLoad?: boolean;
    token?: string;
    isAuth?: boolean;
    error?: string;
    password?: string;
    [key: string]: unknown;
}

export interface IUserActionProps {
    email: string;
    password: string;
    remember?: boolean;
}

export interface IUserCreateActionProps {
    email: string;
    password: string;
    data: IUserCreateData;
}

export interface IUserCreateData {
    preview: string;
    address: string;
    name: string;
    orders: string[];
    phone: string;
    [key: string]: unknown;
}
