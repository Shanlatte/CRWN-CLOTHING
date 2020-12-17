import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

import { ISignUp, SignUpDefault, ISignUpProps } from '../../data-types/Form-types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp: React.FC<ISignUpProps> = ({ handleForm }) => {
    const [signUpForm, setSignUpForm] = useState<ISignUp>(SignUpDefault);
    const dispatch = useDispatch();

    const signUpStartAction = (email: string, password: string, displayName: string) => {
        return (
            dispatch(signUpStart({ email, password, displayName }))
        )
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, displayName, password, confirmPassword } = signUpForm

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStartAction(email, password, displayName)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setSignUpForm({ ...signUpForm, [name]: value })
    }

    return (
        <div className="sign-up">
            <h2 className="title">Sign Up</h2>
            <span>Sign up with your email and password</span>
            <span onClick={handleForm} style={{ color: "blue", cursor: "pointer" }}>I already have an account</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    handleChange={handleChange}
                    value={signUpForm.displayName}
                    required
                    label="Display Name"
                />
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={signUpForm.email}
                    required
                    label="Email"
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={signUpForm.password}
                    label="Password"
                    required />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    handleChange={handleChange}
                    value={signUpForm.confirmPassword}
                    label="Confirm Password"
                    required />

                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp;