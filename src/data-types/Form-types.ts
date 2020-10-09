export interface ISignIn {
    email: string;
    password: string;
}

export const SignDefault: ISignIn = {
    email: '',
    password: ''
}

export interface ISignUp {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpDefault: ISignUp = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export interface IFormInputProps {
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
    label?: string;
}