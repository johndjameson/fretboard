// *************************************
//
//   Note App - Actions
//   -> Note application state mutations
//
// *************************************

// -------------------------------------
//   Actions
// -------------------------------------

export const updateKeyNote = keyNote => {
  return {
    keyNote,
    type: 'NOTE_UPDATE_KEY_NOTE'
  }
}
