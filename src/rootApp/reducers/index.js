// *************************************
//
//   Root - Reducers
//   -> Application state
//
// *************************************

// ----- Packages ----- //

import { combineReducers } from 'redux'

// ----- Local ----- //

import notes from 'noteApp/reducers'

// -------------------------------------
//   Component
// -------------------------------------

const reducers = combineReducers({
  notes
})

// -------------------------------------
//   Export
// -------------------------------------

export default reducers
