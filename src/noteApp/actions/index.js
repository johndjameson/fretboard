// *************************************
//
//   Note App - Actions
//   -> Note application state mutations
//
// *************************************

// -------------------------------------
//   Imports
// -------------------------------------

// ----- Local ----- //

import { SET_KEY_NOTE, SET_REFERENCE_PITCH } from 'noteApp/types'

// -------------------------------------
//   Actions
// -------------------------------------

export const setKeyNote = ({ keyNote }) => ({
  keyNote,
  type: SET_KEY_NOTE
})

export const setReferencePitch = ({ frequency }) => ({
  referencePitch: Number(frequency),
  type: SET_REFERENCE_PITCH
})
