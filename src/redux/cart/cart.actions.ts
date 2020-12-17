import {
    CartActionTypes,
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    Item,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    CLEAR_CART
} from './cart.types'

export const toggleCartHidden = (): CartActionTypes => ({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = (item: Item): CartActionTypes => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (item: Item): CartActionTypes => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = (item: Item): CartActionTypes => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = (): CartActionTypes => ({
    type: CLEAR_CART
});