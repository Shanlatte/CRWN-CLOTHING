import { SHOP_DATA } from '../../data/shop.data';

import { ShopActionTypes, UPDATE_COLLECTIONS } from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA
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