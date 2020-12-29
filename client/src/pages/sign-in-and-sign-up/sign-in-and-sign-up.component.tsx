import React, { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage: React.FC = () => {
    const [signInSignUp, setSignInSignUp] = useState("signIn")
    return (
        <div className="sign-in-and-sign-up">
            {signInSignUp === "signIn" ?
                <SignIn handleForm={() => setSignInSignUp("signUp")} /> :
                <SignUp handleForm={() => setSignInSignUp("signIn")} />}
        </div>
    )
}

export default SignInAndSignUpPage;