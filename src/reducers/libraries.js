import * as actionTypes from '../constants/actionTypes'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LIBRARIES_SET:
      return setLibraries(state, action)
  }
  return state
}

function setLibraries(state, action) {
  const { libraries } = action
  return [ ...state, ...libraries ]
}
