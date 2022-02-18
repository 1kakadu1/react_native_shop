import { Animated } from 'react-native';

export interface IRegProps {
    onRedirect: () => void;
}

export interface IAnim {
    email: Animated.Value;
    password: Animated.Value;
    [key: string]: Animated.Value;
}
