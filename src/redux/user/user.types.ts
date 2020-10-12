//Constants
export const SET_CURRENT_USER: String = "SET_CURRENT_USER";

//User State
export interface UserState {
    currentUser: CurrentUser | null
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
    payload: CurrentUser | null
}

export type UserActionTypes = SetCurrentUserAction