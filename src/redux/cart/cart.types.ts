//Constants
export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";

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

export interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface CartItem extends Item {
    quantity: number;
}

export type CartActionTypes = ToggleCartHiddenAction | AddItem;