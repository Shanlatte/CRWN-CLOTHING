import { Item, CartItem } from './cart.types'

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: Item): CartItem[] => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}