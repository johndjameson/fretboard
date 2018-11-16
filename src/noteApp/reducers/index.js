// *************************************
//
//   Note App - Reducers
//   -> Note application state
//
// *************************************

// -------------------------------------
//   Reducer
// -------------------------------------

const initialState = {
  keyNote: 'C'
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTE_UPDATE_KEY_NOTE':
      return {
        ...state,
        keyNote: action.keyNote
      }
    default:
      return state
  }
}

// -------------------------------------
//   Export
// -------------------------------------

export default noteReducer
