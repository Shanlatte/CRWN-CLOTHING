//Constants
export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

//Cart State
export interface CartState {
    hidden: boolean
    cartItems: CartItem[]
}

//Actions
interface ToggleCartHiddenAction {
    type: typeof TOGGLE_CART_HIDDEN
}

interface AddItem {
    type: typeof ADD_ITEM
    payload: Item
}

interface RemoveItem {
    type: typeof REMOVE_ITEM
    payload: Item
}

interface ClearItemFromCart {
    type: typeof CLEAR_ITEM_FROM_CART
    payload: Item
}

interface ClearCart {
    type: typeof CLEAR_CART
}

//Types
export interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface CartItem extends Item {
    quantity: number;
}

export type CartActionTypes = ToggleCartHiddenAction | AddItem | ClearItemFromCart | RemoveItem | ClearCart;