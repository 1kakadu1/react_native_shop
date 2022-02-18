import {
    DrawerContentComponentProps,
    DrawerContentOptions
} from '@react-navigation/drawer';
export type DrawerContentProps = DrawerContentComponentProps<DrawerContentOptions>;
export interface IDraweProps {
    name: string;
    screenDrawer: (props: any) => JSX.Element;
}
