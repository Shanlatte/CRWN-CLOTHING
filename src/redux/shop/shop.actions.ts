import { ShopActionTypes, UPDATE_COLLECTIONS } from './shop.types';

export const updateCollections = (collectionsMap: any): ShopActionTypes => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})