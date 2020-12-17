//Constants
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START";
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const CHECK_USER_SESSION = "CHECK_USER_SESSION";
export const SIGN_OUT_START = "SIGN_OUT_START";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

//User State
export interface UserState {
    currentUser: CurrentUser | null,
    error: string | null
}

//Types of user
export interface CurrentUser {
    displayName: string,
    email: string,
    id: string,
    createdAt: createdAt
}

export type createdAt = {
    nanoseconds: number,
    seconds: number
}

//User Actions
interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER
    payload: any
}

interface GoogleSignInStartAction {
    type: typeof GOOGLE_SIGN_IN_START
}

interface EmailSignInStartAction {
    type: typeof EMAIL_SIGN_IN_START
    payload: any
}

interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS
    payload: any
}
interface SignInFailureAction {
    type: typeof SIGN_IN_FAILURE
    payload: any
}

interface CheckUserSession {
    type: typeof CHECK_USER_SESSION
}

interface SignOutStart {
    type: typeof SIGN_OUT_START
}

interface SignOutSuccess {
    type: typeof SIGN_OUT_SUCCESS
}

interface SignOutFailure {
    type: typeof SIGN_OUT_FAILURE
    payload: any
}

interface SignUpStart {
    type: typeof SIGN_UP_START
    payload: any
}

interface SignUpSuccess {
    type: typeof SIGN_UP_SUCCESS
}

interface SignUpFailure {
    type: typeof SIGN_UP_FAILURE
    payload: any
}
export type UserActionTypes = (
    GoogleSignInStartAction | SetCurrentUserAction | EmailSignInStartAction |
    SignInSuccessAction | SignInFailureAction | CheckUserSession |
    SignOutStart | SignOutSuccess | SignOutFailure |
    SignUpStart | SignUpSuccess | SignUpFailure)

