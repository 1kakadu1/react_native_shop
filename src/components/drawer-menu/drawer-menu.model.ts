export interface IDrawerContent {
    drawerProps: any;
    name: string;
    email: string;
    isLoad: boolean;
    isAuth: boolean;
    preview?: string;
    onSignOut: () => void;
}
