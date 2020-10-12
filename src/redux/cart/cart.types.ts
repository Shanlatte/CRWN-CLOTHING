//Constants
export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";

//Cart State
export interface CartState {
    hidden: boolean
}

//Actions
interface ToggleCartHiddenAction {
    type: typeof TOGGLE_CART_HIDDEN
}

export type CartActionTypes = ToggleCartHiddenAction;