// *************************************
//
//   Index
//   -> Application entry
//
// *************************************

// ----- Imports ----- //

import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'rootApp/components/Root'
import { createStore } from 'redux'

// ----- Local ----- //

import reducers from 'rootApp/reducers'

// ----- Assets ----- //

import './styles.scss'

// -------------------------------------
//   Setup
// -------------------------------------

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// -------------------------------------
//   Main
// -------------------------------------

ReactDOM.render(<Root store={store} />, document.querySelector('#js-root'))
