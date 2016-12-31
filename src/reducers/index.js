import { combineReducers } from 'redux'
import { routerReducer } from 'preact-router-redux/lib/reducer'
import libraries from './libraries'

export default combineReducers({
  libraries,
  routing: routerReducer
})
