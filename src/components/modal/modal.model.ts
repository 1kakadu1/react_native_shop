export interface IModalProps {
    btn: (props: IBtnProps) => JSX.Element;
    children: JSX.Element[] | JSX.Element;
    btnProps?: IBtnProps;
}

interface IBtnProps {
    onPress: () => void;
    label: string;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
    color?: string;
    small?: boolean;
    onLongPress?: () => void;
}
