import { CartActionTypes, TOGGLE_CART_HIDDEN } from './cart.types'

export const toggleCartHidden = (): CartActionTypes => ({
    type: TOGGLE_CART_HIDDEN
})