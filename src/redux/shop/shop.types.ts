//Constants
export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

//Actions
interface UpdateCollections {
    type: typeof UPDATE_COLLECTIONS
    payload: any
}

export type ShopActionTypes = UpdateCollections;
