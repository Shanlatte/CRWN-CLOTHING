import { takeLatest, put, call, all } from 'redux-saga/effects';

import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signInFailure, signInSuccess } from './user.actions'


export function* getSnapshotFromUserAuth(userAuth: any) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user)
}

export function* signInWithEmail(action: any) {
    const { payload } = action
    const { email, password } = payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}