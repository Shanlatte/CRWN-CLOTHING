export interface ISignIn {
    email: string;
    password: string;
}

export const SignDefault: ISignIn = {
    email: '',
    password: ''
}

export interface IFormInputProps {
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
    label?: string;
}