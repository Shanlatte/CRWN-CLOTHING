import Redux, { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

import thunk from 'redux-thunk';
const middlewares: Redux.Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

export const persistor = persistStore(store);

export default { store, persistor };