import { SHOP_DATA } from '../../data/shop.data';


const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer;