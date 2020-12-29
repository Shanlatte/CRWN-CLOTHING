import {
    ShopActionTypes,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} from './shop.types';
import { Action } from 'redux'
import { RootState } from '../root-reducer'
import { ThunkAction } from 'redux-thunk'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = (): ShopActionTypes => ({
    type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionMap: any) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = (errorMessage: string) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = ():
    ThunkAction<void, RootState, unknown, Action<string>> => {

    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get()
            .then(async snapShot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapShot);
                dispatch(fetchCollectionsSuccess(collectionMap));

            }).catch(error => {
                dispatch(fetchCollectionsFailure(error.Message));

            });
    }
}
