
// Props
export interface IFormInputProps {
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
    label?: string;
}

export interface ISignUpProps {
    handleForm: () => void;
}

export interface ISignInProps {
    handleForm: () => void;
}

// Types
export interface ISignUp {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ISignIn {
    email: string;
    password: string;
}
// Forms types
export const SignDefault: ISignIn = {
    email: '',
    password: ''
}

export const SignUpDefault: ISignUp = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

