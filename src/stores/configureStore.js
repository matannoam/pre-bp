import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'

let middleware = []
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger')
    const logger = createLogger()
    middleware = [...middleware, logger]
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore(initialState){
  return createStoreWithMiddleware(rootReducer, initialState)
}
