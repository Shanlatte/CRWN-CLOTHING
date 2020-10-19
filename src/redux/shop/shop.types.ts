import { ShopData } from '../../data/shop.data'

//Constants
export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

//Actions
interface UpdateCollections {
    type: typeof UPDATE_COLLECTIONS
    payload: any
}

export interface ShopState {
    collections: ShopData
}

export type ShopActionTypes = UpdateCollections;
