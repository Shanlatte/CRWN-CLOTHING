import {
    CartActionTypes,
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    Item
} from './cart.types'

export const toggleCartHidden = (): CartActionTypes => ({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = (item: Item): CartActionTypes => ({
    type: ADD_ITEM,
    payload: item
})