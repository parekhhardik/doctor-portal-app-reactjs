import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import rootReducer from './redux/reducers';

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)
    const store = createStore(rootReducer, preloadedState, composedEnhancers);
    return store;
}
