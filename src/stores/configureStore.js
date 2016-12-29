import { createStore, applyMiddleware } from 'redux'

import { routerMiddleware } from 'react-router-redux'

import browserHistory from '../lib/browserHistory'
import rootReducer from '../reducers/index'

const router = routerMiddleware(browserHistory)

let middleware = []
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger')
    const logger = createLogger()
    middleware = [...middleware, logger]
}

middleware = [...middleware, router]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore(initialState){
  return createStoreWithMiddleware(rootReducer, initialState)
}
