
import { ShopActionTypes, UPDATE_COLLECTIONS, ShopState } from './shop.types';

const INITIAL_STATE: ShopState = {
    collections: {}
}

const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes) => {
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;