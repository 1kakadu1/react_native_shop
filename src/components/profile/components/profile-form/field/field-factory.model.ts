export interface IRefereceInput {
    onChangeReference: any;
    name: string;
    value: string;
    label: string;
    defaultValue: string;
    error?: string;
    touched?: boolean;
    isLoad: boolean;
    handleSubmitReference: (
        e?: React.FormEvent<HTMLFormElement> | undefined
    ) => void;
    secureTextEntry?: boolean;
}
export type referenceType = 'text' | 'password' | 'phone';
export type FieldFactory = {
    [value in string]: (props: IRefereceInput) => JSX.Element;
};
