import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    CHECK_USER_SESSION,
    CurrentUser,
    UserActionTypes,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
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

export const checkUserSession = (): UserActionTypes => ({
    type: CHECK_USER_SESSION
});

export const signOutStart = (): UserActionTypes => {
    return (
        {
            type: SIGN_OUT_START,
        })
};

export const signOutSuccess = (): UserActionTypes => {
    return (
        {
            type: SIGN_OUT_SUCCESS,
        })
};

export const signOutFailure = (error: string | null): UserActionTypes => ({
    type: SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials: any): UserActionTypes => {
    return (
        {
            type: SIGN_UP_START,
            payload: userCredentials
        })
};

export const signUpSuccess = (): UserActionTypes => {
    return (
        {
            type: SIGN_UP_SUCCESS,
        })
};

export const signUpFailure = (error: string | null): UserActionTypes => ({
    type: SIGN_UP_FAILURE,
    payload: error
});

