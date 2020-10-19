import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import memoize from 'lodash.memoize';


const selectShop = (state: RootState) => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam: string) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam])
);