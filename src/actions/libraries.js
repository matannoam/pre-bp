import * as actionTypes from '../constants/actionTypes'

export function setLibraries (libraries) {
  return {
    type: actionTypes.LIBRARIES_SET,
    libraries
  }
}
