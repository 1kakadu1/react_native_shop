export interface IFabProps {
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
    color?: string;
    small?: boolean;
    onLongPress?: () => void;
    onPress: () => void;
    label: string;
    visible?: boolean;
}
