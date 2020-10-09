import React from 'react';
import { useState } from 'react';

import './sign-in.styles.scss'

import { ISignIn, SignDefault } from '../../data-types/Form-types';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn: React.FC = () => {
    const [signInForm, setsignInForm] = useState<ISignIn>(SignDefault);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = signInForm;

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
        }

        setsignInForm({ ...SignDefault })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setsignInForm({ ...signInForm, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={signInForm.email}
                    required
                    label="Email"
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={signInForm.password}
                    label="Password"
                    required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                    Sign in with Google{' '}
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

export default SignIn;