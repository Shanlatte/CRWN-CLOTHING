import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    CurrentUser,
    UserActionTypes
} from './user.types'

export const setCurrentUser = (user: CurrentUser | null): UserActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = (): UserActionTypes => ({
    type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword: any): UserActionTypes => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});


export const signInSuccess = (user: CurrentUser | null): UserActionTypes => {
    console.log(user)
    return (
        {
            type: SIGN_IN_SUCCESS,
            payload: user
        })
};

export const signInFailure = (error: string | null): UserActionTypes => ({
    type: SIGN_IN_FAILURE,
    payload: error
});

