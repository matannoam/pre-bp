import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import libraries from './libraries'

export default combineReducers({
  libraries,
  routing: routerReducer
})
