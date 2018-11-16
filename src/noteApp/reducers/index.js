// *************************************
//
//   Note App - Reducers
//   -> Note application state
//
// *************************************

// -------------------------------------
//   Imports
// -------------------------------------

// ----- Local ----- //

import { SET_KEY_NOTE, SET_REFERENCE_PITCH } from 'noteApp/types'

// -------------------------------------
//   Reducer
// -------------------------------------

const initialState = {
  keyNote: 'C',
  referencePitch: 440
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEY_NOTE:
      return {
        ...state,
        keyNote: action.keyNote
      }
    case SET_REFERENCE_PITCH:
      return {
        ...state,
        referencePitch: action.referencePitch
      }
    default:
      return state
  }
}

// -------------------------------------
//   Export
// -------------------------------------

export default noteReducer
