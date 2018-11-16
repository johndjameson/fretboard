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
import {
  getPitches,
  standardNotes,
  standardTuning
} from 'noteApp/helpers/pitches'

// -------------------------------------
//   Reducer
// -------------------------------------

const initialState = {
  keyNote: 'C',
  notes: standardNotes,
  pitches: getPitches({ pitchCount: 88 }),
  referencePitch: standardTuning,
  render: () => null
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
