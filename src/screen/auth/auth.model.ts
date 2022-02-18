import { Animated } from 'react-native';

export interface IAnim {
    email: Animated.Value;
    password: Animated.Value;
    [key: string]: Animated.Value;
}

export interface IStateInput {
    init?: boolean;
    value: string;
    valid: boolean;
    error: string;
    keyError: string;
    name: string;
    validation: Array<string>;
}

export interface IStateForm {
    [key: string]: IStateInput;
}
