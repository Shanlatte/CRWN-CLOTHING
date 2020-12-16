import { call, put, takeLatest } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

import {
    FETCH_COLLECTIONS_START,
} from './shop.types';

export function* fetchCollectionsAsync() {
    try {

        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))

    } catch (error) {

        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}