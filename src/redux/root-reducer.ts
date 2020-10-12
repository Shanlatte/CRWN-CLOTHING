import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>