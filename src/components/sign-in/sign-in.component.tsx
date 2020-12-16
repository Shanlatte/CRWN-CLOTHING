import React from 'react';
import { useState } from 'react';

import './sign-in.styles.scss'

import { ISignIn, SignDefault, ISignInProps } from '../../data-types/Form-types';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const SignIn: React.FC<ISignInProps> = ({ handleForm }) => {
    const [signInForm, setsignInForm] = useState<ISignIn>(SignDefault);
    const dispatch = useDispatch();

    const googleSignInStartAction = () => dispatch(googleSignInStart())
    const emailSignInStartAction = (email: string, password: string) => dispatch(emailSignInStart({ email, password }))

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = signInForm;

        emailSignInStartAction(email, password)

        setsignInForm({ ...SignDefault })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setsignInForm({ ...signInForm, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2>Sign In</h2>

            <span>Sign in with your email and password</span>
            <span onClick={handleForm} style={{ color: "blue", cursor: "pointer" }}>I do not have an account</span>


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
                    <CustomButton
                        type="button"
                        onClick={googleSignInStartAction}
                        isGoogleSignIn>
                        {' '}
                    Sign in with Google{' '}
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

export default SignIn;