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

import { SET_KEY_NOTE, SET_REFERENCE_PITCH, SET_SCALE } from 'noteApp/types'

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

export const setScale = scale => ({
  scale,
  type: SET_SCALE
})
