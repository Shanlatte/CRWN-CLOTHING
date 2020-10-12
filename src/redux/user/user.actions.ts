import { SET_CURRENT_USER, CurrentUser, UserActionTypes } from './user.types'

export const setCurrentUser = (user: CurrentUser | null): UserActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user
});
