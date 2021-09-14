import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composedEnhancers = [applyMiddleware(thunk), (window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f)]
const store = createStore(rootReducer, undefined, compose(...composedEnhancers) )

export default store