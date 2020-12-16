import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    UserState,
    UserActionTypes
} from './user.types';

const INITIAL_STATE: UserState = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action: UserActionTypes): UserState => {

    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;