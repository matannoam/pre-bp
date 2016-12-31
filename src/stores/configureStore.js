import { createStore, applyMiddleware } from 'redux'

import routerMiddleware from 'preact-router-redux/lib/middleware'
import syncHistoryWithStore from 'preact-router-redux/lib/sync'

import browserHistory from '../lib/browserHistory'
import rootReducer from '../reducers/index'

const router = routerMiddleware(browserHistory)

let middleware = [router]
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger')
    const logger = createLogger()
    middleware = [...middleware, logger]
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

function configureStore(initialState){
  return createStoreWithMiddleware(rootReducer, initialState)
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export { store, history }
