import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

import { ISignUp, SignUpDefault } from '../../data-types/Form-types'
import { useState } from 'react';

const SignUp: React.FC = () => {
    const [signUpForm, setSignUpForm] = useState<ISignUp>(SignUpDefault);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(signUpForm);
        const { email, displayName, password, confirmPassword } = signUpForm

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            setSignUpForm({ ...SignUpDefault })
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setSignUpForm({ ...signUpForm, [name]: value })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

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