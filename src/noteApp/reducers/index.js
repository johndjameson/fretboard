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

import { SET_KEY_NOTE, SET_REFERENCE_PITCH, SET_SCALE } from 'noteApp/types'
import {
  getPitches,
  standardNotes,
  standardTuning
} from 'noteApp/helpers/pitches'
import * as scales from 'noteApp/helpers/scales'

// -------------------------------------
//   Reducer
// -------------------------------------

const initialState = {
  keyNote: 'E',
  notes: standardNotes,
  pitches: getPitches(),
  referencePitch: standardTuning,
  scale: scales.major
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
        pitches: getPitches({ referencePitch: action.referencePitch }),
        referencePitch: action.referencePitch
      }
    case SET_SCALE:
      return {
        ...state,
        scale: action.scale
      }
    default:
      return state
  }
}

// -------------------------------------
//   Export
// -------------------------------------

export default noteReducer
