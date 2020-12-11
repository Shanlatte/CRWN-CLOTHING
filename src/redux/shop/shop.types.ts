import { ShopData } from '../../data/shop.data'

//Constants
export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

//Actions
interface FetchCollectionsStart {
    type: typeof FETCH_COLLECTIONS_START
}
interface FetchCollectionsSuccess {
    type: typeof FETCH_COLLECTIONS_SUCCESS
    payload: any
}
interface FetchCollectionsFailure {
    type: typeof FETCH_COLLECTIONS_FAILURE
    payload: any
}
export interface ShopState {
    collections: ShopData,
    isFetching: boolean,
    errorMessage: string
}

export type ShopActionTypes = FetchCollectionsStart | FetchCollectionsSuccess | FetchCollectionsFailure;
