import Redux, { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Redux.Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };